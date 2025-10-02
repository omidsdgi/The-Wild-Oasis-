import styled from "styled-components";
import Stats from "./Stats.jsx";
import {useRecentStays} from "./useRecentStays.js";
import useRecentBookings from "./useRecentBookings.js";
import Spinner from "../../ui/Spinner.jsx";
import {useCabins} from "../cabins/UseCabins.js";
import SalesChart from "./SalesChart.jsx";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
    const{isLoading:isLoading1,bookings} =useRecentBookings()
    const{isLoading:isLoading2,stays,confirmedStays,numDays}=useRecentStays()
    const {isLoading:isLoading3 , cabins} =useCabins()

    if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;
    return (
        <StyledDashboardLayout>
            <Stats bookings={bookings} confirmedStays={confirmedStays} cabinCount={cabins.length} numDays={numDays} />
            <div>today's activity</div>
            <div>Chart stay durations </div>
            <SalesChart/>
        </StyledDashboardLayout>
    )
}
export default DashboardLayout;