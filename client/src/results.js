import React from 'react';

const Results = (props) => {

    const {
      weight_kg,
      weight_ozs,
      shipping_speed,
      departure_date,
      arrival_date,
      cost
    } = props.details;


    return (
      <ul id="shipping_information">
        <li><h5><strong>WeightOfLaundry:</strong></h5>
          <ul>

            <li className="weight"><h5>({weight_kg} kilograms)</h5></li>
          </ul>
        </li>
        <li><h5><strong>ServiceLength:</strong></h5>
          <ul>
            <li className="weight"><h5>Type: {shipping_speed} day</h5></li>
            <li className="weight"><strong>PickUpDate: </strong>{departure_date}</li>
            <li className="weight"><strong>DropOffDate: </strong>{arrival_date}</li>
          </ul>
        </li>
        <li className="weight"><strong>TotalCost: </strong>{cost}</li>
      </ul>

    );
};

export default Results;
