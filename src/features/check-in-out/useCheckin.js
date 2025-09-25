import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {updateBooking} from "../../services/apiBookings.js";
import toast from "react-hot-toast";

export function useCheckin() {
    const queryClient=useQueryClient();
    const navigate=useNavigate();

    const{mutate:checkin,isLoading:isCheckingIn} =useMutation({
        mutationFn:(bookingId)=>updateBooking(bookingId,{
            status:"checked-in",
            isPaid:true
        }),
        onSuccess:(data)=>{
            toast.success(`checked-in #${data.id} successfully Updated`);
            queryClient.invalidateQueries({});
            navigate("/")
        },
        onError:()=>toast.error("There was an error while checking in"),
    })

    return{checkin,isCheckingIn}
}