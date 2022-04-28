import Checkout100 from "components/CheckOutForm100";
import Checkout50 from "components/CheckOutForm50";
import Checkout25 from "components/CheckOutForm25";
import "./CheckoutPage.css"


export function CheckOutForm () {

    return (
        <div>
           <Checkout100/>
           <Checkout50/>
           <Checkout25/>
        </div>
    )
}