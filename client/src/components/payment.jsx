import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payment extends React.Component{
  constructor(props){
    super(props);

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
          token={this.onToken}
          stripeKey="pk_test_wd9rThkNdTfjOnS9RXQIFPv6"
        />
      </div>
    );
  }
}

export default Payment;
