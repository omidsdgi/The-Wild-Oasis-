import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button.jsx";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createCabin} from "../../services/apiCabins.js";
import toast from "react-hot-toast";
import error from "eslint-plugin-react/lib/util/error.js";
import FormRow from "../../ui/FormRow.jsx";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

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
       mutate(data)
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
        <Textarea type="number" id="description" disabled={isCreating} defaultValue="" {...register("description",{required:"This field is required"})} />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Edit cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
