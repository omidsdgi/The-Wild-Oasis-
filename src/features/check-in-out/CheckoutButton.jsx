import Button from "../../ui/Button.jsx";
import {useCheckout} from "./useCheckout.js";

function CheckoutButton({ bookingId }) {
    const{checkout,isCheckingOut}=useCheckout();
  return (
    <Button variation="primary" size="small" disabled={isCheckingOut} onClick={()=>checkout(bookingId)}>
      Check out
    </Button>
  );
}

export default CheckoutButton;
