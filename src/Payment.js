import React from 'react'
import "./Payment.css"
import { useParams ,useHistory} from 'react-router';
const Payment = () => {
    const history=useHistory()
    const id=useParams("id");
    console.log(id.id)
    const onPay=()=>{
        localStorage.setItem(id.id,true)
        alert("purchased");
        history.push("/dashboard")
    }
    return (
      <div>
        <div class="container">
          <h1>Payment</h1>

          <span class="fieldRow">
            <input id="name" type="name" value="First Name" placeholder="" />

            <i for="name" class="fa fa-user"></i>
          </span>

          <span class="fieldRow">
            <input id="surname" type="name" placeholder="" value="surname" />

            <i for="surname" class="fa fa-user"></i>
          </span>

          <div class="blank_space">
            <span class="fieldRow credit_card">
              <input
                id="cc"
                class="credit_card_number"
                type="text"
                value="Credit Card no"
                placeholder="Cradit Card no"
              />

              <i for="cc" class="fa fa-credit-card"></i>

              <div class="closeBtn">
                <i class="fa fa-times"></i>
              </div>
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <span class="fieldRow col2">
              <input id="cvv" type="text" placeholder="XXX" value="CVV" />

              <i for="cvv" class="fa fa-lock"></i>
            </span>

            <span class="fieldRow col2 last">
              <input
                id="date"
                type="text"
                placeholder="mm/yy"
                value="Date"
              />

              <i for="date" class="fa  fa-calendar"></i>
            </span>
          </div>

          <button type="submit" onClick={onPay}>
            PAY NOW
          </button>
        </div>

        <div class="overlay"></div>
      </div>
    );
}

export default Payment
