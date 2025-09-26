import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button.jsx";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import {useBooking} from "../bookings/useBooking.js";
import Spinner from "../../ui/Spinner.jsx";
import {useEffect, useState} from "react";
import Checkbox from "../../ui/Checkbox.jsx";
import {formatCurrency} from "../../utils/helpers.js";
import {useCheckin} from "./useCheckin.js";
import {useSettings} from "../settings/UseSettings.js";

const Box = styled.div`
    /* Box */
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
    padding: 2.4rem 4rem;
`;

function CheckinBooking() {
    const [confirmPaid, setConfirmPaid] = useState(false);
    const [addBreakfast, setAddBreakfast] = useState(false)
    const{booking,isLoading}=useBooking()
    const{settings,isLoading:isLoadingSetting}=useSettings()

    useEffect(() => setConfirmPaid(booking?.isPaid ?? false),[booking]);
    const moveBack = useMoveBack();
    const{checkin,isCheckingIn}=useCheckin()

    if(isLoading || isLoadingSetting)  return <Spinner />;
    const {
        id: bookingId,
        guests,
        totalPrice,
        numGuests,
        hasBreakfast,
        numNights,
    } = booking;
    const optionalBreakfastPrice= settings.breakfastPrice * numNights * numGuests

    function handleCheckin() {
        if(!confirmPaid) return null;
        if (addBreakfast){
            checkin({bookingId, breakfast:{
                hasBreakfast:true,
                    extrasPrice:optionalBreakfastPrice,
                    totalPrice:totalPrice + optionalBreakfastPrice,
                }})
        }else{
        checkin({bookingId,breakfast:{}})
        }
    }

    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Check in booking #{bookingId}</Heading>
                <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
            </Row>

            <BookingDataBox booking={booking} />

            {!hasBreakfast &&(
            <Box>
                <Checkbox
                checked={addBreakfast}
                onChange={()=>{setAddBreakfast(!addBreakfast);setConfirmPaid(false)}}
                id="breakfast"
                >
                Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
                </Checkbox>
            </Box>
            )}
            {/*<Box>*/}
            {/*    <Checkbox*/}
            {/*        checked={addBreakfast}*/}
            {/*        onChange={()=>{setAddBreakfast(!addBreakfast);setConfirmPaid(false)}}*/}
            {/*        id="breakfast"*/}
            {/*    >*/}
            {/*        Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?*/}
            {/*    </Checkbox>*/}
            {/*</Box>*/}

            <Box>
                <Checkbox
                checked={confirmPaid}
                disabled={confirmPaid ||isCheckingIn}
                onChange={()=>setConfirmPaid(!confirmPaid)}
                id ="confirmPaid"
                >
                    I confirm that {guests.fullName} has paid the total amount of {" "}
                    {!addBreakfast ?(
                            formatCurrency(totalPrice)
                    ):(
                        <>
                        {formatCurrency(totalPrice + optionalBreakfastPrice)}
                         ({formatCurrency(totalPrice)} + {formatCurrency(optionalBreakfastPrice)})
                        </>
                         )}
                </Checkbox>
            </Box>

            <ButtonGroup>
                <Button onClick={handleCheckin} disabled={!confirmPaid ||  isCheckingIn}>Check in booking #{bookingId}</Button>
                <Button variation="secondary" onClick={moveBack}>
                    Back
                </Button>
            </ButtonGroup>
        </>
    );
}

export default CheckinBooking;
