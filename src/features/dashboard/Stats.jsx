import Stat from "./Stat.jsx";
import {HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar} from "react-icons/hi2";

function Stats({bookings,confirmedStays}) {
    const numBookings = bookings.length;

    // const sales=bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
    return (
        <>
        <Stat title="Bookings" color="blue" icon={<HiOutlineBriefcase/>} value={numBookings}  />
        <Stat title="Sales" color="green" icon={<HiOutlineBanknotes/>} value={numBookings}  />
        <Stat title="Check ins" color="indigo" icon={<HiOutlineCalendarDays/>} value={numBookings}  />
        <Stat title="Bookings" color="yellow" icon={<HiOutlineChartBar/>} value={numBookings}  />

        </>
    )
}

export default Stats