import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button.jsx";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createCabin} from "../../services/apiCabins.js";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow.jsx";

function CreateCabinForm() {
    const queryClient = useQueryClient();
    const {register,handleSubmit,reset,getValues,formState}=useForm()
    const {errors}=formState;
    console.log(errors);

    const {mutate,isLoading:isCreating}=useMutation({
       mutationFn:createCabin,
       onSuccess:()=>{
           toast.success("new cabin successfully Created")
           queryClient.invalidateQueries({
               queryKey:["cabins"]
           })
               reset()
       },
       onError:(error)=>toast.error(error.message),
    })


    function onSubmit(data){
       mutate({...data,image:data.image[0]})
    }
    function onError(error) {
        console.log(error)
    }

  return (
    <Form  onSubmit={handleSubmit(onSubmit,onError)}>

        <FormRow label="cabin name" error={errors?.name?.message}>
            <Input
                type="text"
                id="name"
                disabled={isCreating}
                {...register("name",
                    {required:"This field is required"
                })}
            />
        </FormRow>

        <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input type="number" id="maxCapacity" disabled={isCreating} {...register(
            "maxCapacity",{required:"This field is required",
            min:{
                value:1,
                message:"Capacity must be at least 1"
            }})} />
      </FormRow>

        <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input type="number" id="regularPrice" disabled={isCreating} {...register(
            "regularPrice",{required:"This field is required",
        min:{
            value:1,
            message:"Regular price must be at least 1"
        }
        })} />

      </FormRow>

        <FormRow label="Discount" error={errors?.discount?.message}>
        <Input type="number" id="discount" disabled={isCreating} defaultValue={0} {...register(
            "discount",{required:"This field is required",
        validate:(value)=> Number(value)<Number(getValues().regularPrice) || "Mehraneh"
        })} />
      </FormRow>

        <FormRow label="Description for website" error={errors?.description?.message}>
        <Textarea type="number" id="description" disabled={isCreating} defaultValue="" {...register(
            "description",{required:"This field is required"})} />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput id="image"
                   accept="image/*" {...register(
            "image",{required:"This field is required"})}/>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
