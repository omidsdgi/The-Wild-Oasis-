import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboardLayout from "../features/dashboard/DashboardLayout.jsx";
import DashboardFilter from "../features/dashboard/DashboardFilter.jsx";
import useRecentBookings from "../features/dashboard/useRecentBookings.js";
import Spinner from "../ui/Spinner.jsx";

function Dashboard() {
    const {bookings,isLoading}=useRecentBookings()
    if(isLoading) return <Spinner />

    console.log(bookings)
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Dashboard</Heading>
                <DashboardFilter/>
            </Row>
            <DashboardLayout/>
        </>
    );
}
export default Dashboard;
