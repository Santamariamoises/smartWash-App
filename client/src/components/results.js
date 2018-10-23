import React from 'react';

const Results = (props) => {

    const {
      weight_kg,
      weight_ozs,
      service_speed,
      pickUp_date,
      deliveryDate,
      cost
    } = props.details;


    return (
      <ul id="shipping_information">
        <li><h5><strong>WeightOfLaundry:</strong></h5>
          <ul>

            <li className="weight"><h5>({weight_kg} kilograms)</h5></li>
          </ul>
        </li>
        <li><h5><strong>ServicesSpeed:</strong></h5>
          <ul>
            <li className="weight"><h5>Type: {service_speed} day</h5></li>
            <li className="weight"><strong>PickUpDate: </strong>{pickUp_date}</li>
            <li className="weight"><strong>DropOffDate: </strong>{deliveryDate}</li>
          </ul>
        </li>
        <li className="weight"><strong>TotalCost: </strong>{cost}</li>
      </ul>

    );
};

export default Results;
