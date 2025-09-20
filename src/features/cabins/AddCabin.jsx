import Button from "../../ui/Button.jsx";
import Modal from "../../ui/Modal.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";
import CabinTable from "./CabinTable.jsx";

function AddCabin(props) {

    return (
        <Modal>
            <Modal.Open opens="cabin-form">
                <Button>Add new cabin</Button>
            </Modal.Open>
            <Modal.Window name="cabin-form">
                <CreateCabinForm  />
            </Modal.Window>

            <Modal.Open opens="table">
                <Button>Show table</Button>
            </Modal.Open>
            <Modal.Window name="table">
                <CabinTable  />
            </Modal.Window>
        </Modal>
    )
}


// function AddCabin() {
//     const [isOpenModal, setIsOpenModal] = useState(false);
//
//     return (
//         <div>
//             <Button onClick={() => setIsOpenModal(!isOpenModal)}>Add new cabin</Button>
//             {isOpenModal && (
//                 <Modal onClose={() => setIsOpenModal(false)} >
//                     <CreateCabinForm onCloseModal={() => setIsOpenModal(false)}/>
//                 </Modal>)
//                 }
//         </div>
//     );
// }

export default AddCabin