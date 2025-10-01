import styled from "styled-components";
import Stats from "./Stats.jsx";
import {useRecentStays} from "./useRecentStays.js";
import useRecentBookings from "./useRecentBookings.js";
import Spinner from "../../ui/Spinner.jsx";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
    const{isLoading:isLoading1,bookings} =useRecentBookings()
    const{isLoading:isLoading2,stays,confirmedStays}=useRecentStays()

    if (isLoading1 || isLoading2) return <Spinner />;
    return (
        <StyledDashboardLayout>
            <Stats bookings={bookings} confirmedStays={confirmedStays} />
            <div>today's activity</div>
            <div>Chart stay durations </div>
            <div>Chat sales</div>
        </StyledDashboardLayout>
    )
}
export default DashboardLayout;