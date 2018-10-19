
import React, { Component } from 'react';


class OrderSummary extends Component {

render() {
  const Schedule=this.props.Schedule;
  const ScheduleDates=this.state.dates(Schedule);
  const this.add=this.props.service;

let costPerKg = 0;

   if(this.props.service === 'economy'){
     costPerKg = 80
   }
   else if(this.props.service === "standard") {
     costPerKg = 110
   }
   else if (this.props.service === 'express') {
     costPerKg = 160
   }

  const costOfWash =
return (
     <div className="order-summary">
       <div className="fix-this">
         <div className="delivery-details">
           <p>Your laundry will be collected on {dayOfWeekCollection}, {monthNameCollection} {dayOfMonthCollection} and delivered back to you before {dayOfWeekReturn}, {monthNameReturn} {dayOfMonthReturn} </p>
         </div>
         <div className="price-estimate">
           <p> {costOfWash}d</p>
         </div>
         )
}
}

export default OrderSummary;
