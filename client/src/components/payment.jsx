import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payment extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      messages: []
    }
    this.onToken = this.onToken.bind(this);
  }


onToken(token){
  console.log('onToken', token);
    fetch('/api/stripe',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        stripeToken: token.id,
      }),
    }).then(res => res.json())
    .then(json => {
      let data = this.state.messages;
      data.push(json.newMessage);

      this.setState({
        messages: data
      });
    });
}

  render(){
    return(
<div>
  <StripeCheckout
  className = 'pago'
  token={this.onToken}
  stripeKey="pk_test_wd9rThkNdTfjOnS9RXQIFPv6"
  />
    <form action="/" method="GET">
      <script
        src="https:checkout.stripe.com/checkout.js" className="stripe-button"
        data-key="pk_test_wd9rThkNdTfjOnS9RXQIFPv6"
        data-amount="700000 "
        data-name="Smart Wash"
        data-description="Widget"
        data-image= {'/clothes.png'}
        data-locale="auto"
        >
      </script>
    </form>
  </div>
    );
  }
}

export default Payment;
