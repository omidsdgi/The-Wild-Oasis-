import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable.jsx";
import AddCabin from "../features/cabins/AddCabin.jsx";
import TableOperations from "../ui/TableOperations.jsx";

function Cabins() {

    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All cabins</Heading>
                <TableOperations />
            </Row>
            <Row>
                <CabinTable/>
                <AddCabin/>
            </Row>
        </>
    );
}
export default Cabins;
