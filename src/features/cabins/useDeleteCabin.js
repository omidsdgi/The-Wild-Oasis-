import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {deleteCabin as deleteCabinApi} from "../../services/apiCabins.js";

export function useDeleteCabin  () {
    const queryClient = useQueryClient()

    const {isLoading: isDeleting, mutate:deleteCabin} = useMutation({

        mutationFn: deleteCabinApi,
        onSuccess: () => {
            toast.success("Cabin successfully Deleted")
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            })
        },
        onError: (error) => toast.error(error.message),
    })
    return{isDeleting, deleteCabin}
}
