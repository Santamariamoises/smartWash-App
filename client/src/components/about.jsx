import React from 'react';


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div>
      <h1>Picked up dirty. Delivered fresh & folded.</h1>
      <img className="pic" src="steps.jpg"/>
    <h1>SmartWash door-to-door laundry service is one of the best ways to save
    time and money. Your laundry will be picked up and delivered, all
    fresh and folded. We take care of your laundry so you can spend
    your time where and when you want.
    Laundry Time shouldn't interrupt your Fun Time!</h1>

    </div>
    )
  }
}

export default About;
