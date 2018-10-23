export function calculate_shipping(weight = 0, days = 5) {

  days = parseFloat(days);

  let cost_per_kilogram;
  let shipping_cost_multiplier;
  let current_date = new Date();
  let ms = current_date.getTime();
  let single_day_in_ms = 24 * 60 * 60 * 1000;
  let shipping_time_ms = ms;
  let deliveryDate;
  let shipping_cost_pesos;
  let weight_in_kilograms = parseFloat(weight); // multiply input weight by 16 to obtain ounces

  // create shipping multiplier depending on selected shipping speed
  if (days === 3) {
    shipping_cost_multiplier = 110;
  } else if (days === 2) {
    shipping_cost_multiplier = 160;
  } else {
    shipping_cost_multiplier = 80;
  }

  // determine cost per ounce, based on weight ranges and shipping multiplier
  if (weight_in_kilograms < 1) {
    cost_per_kilogram = shipping_cost_multiplier ;
  } else if (weight_in_kilograms > 2) {
    cost_per_kilograms = shipping_cost_multiplier;
  } else {
    cost_per_kilograms = shipping_cost_multiplier;
  }

  // determine actual shipping cost of weight * cost per ounce * 0.01 to convert to dollars.
  shipping_cost_pesos = (cost_per_kilograms * weight_in_kilograms * 0.01).toFixed(2);

  // determine if today is sunday, if so add one day (in MS) to the shipping time total (in MS)
  if (current_date.getDay() === 0) {
    shipping_time_ms += single_day_in_ms;
  }

  // add actual shipping time (e.g. 5, 3, 2) (in MS) to the shipping time total (in MS)
  if (days === 5) {
    shipping_time_ms += 4 * single_day_in_ms;
  } else if (days === 3) {
    shipping_time_ms += 2 * single_day_in_ms;
  } else if (days === 2) {
    shipping_time_ms += 1 * single_day_in_ms;
  } else {
    shipping_time_ms = 30 * single_day_in_ms; // shouldn't ever run, but just in case for lolz
  }

  // figure out new delivery date, and determine if it's sunday as well
  let prelim_date = new Date(shipping_time_ms);
  if (prelim_date.getDay() === 0) {
    shipping_time_ms += single_day_in_ms;
  }

  // create final shipping time in MS, after taking into account two possible sundays and actual shipping time
  deliveryDate = new Date(shipping_time_ms);

  // create date in string format of "June 3, 2016"
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let formatted_current_date_string = '' +
    monthNames[current_date.getMonth()] + ' ' +
    current_date.getDate() + ', ' +
    current_date.getFullYear();
  let formatted_deliveryDate_string = '' +
    monthNames[deliveryDate.getMonth()] + ' ' +
    deliveryDate.getDate() + ', ' +
    deliveryDate.getFullYear();

  // create object to be returned that includes all values needed to build the display
  return {
    weight_kg: weight_in_kilograms,
    weight_kg: weight,
    service_speed: days,
    pickUp_date: formatted_current_date_string,
    deliveryDate: formatted_deliveryDate_string,
    cost: shipping_cost_pesos
  };
}
