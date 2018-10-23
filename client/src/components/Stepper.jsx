import React from 'react';
import 'Stepper.css';
class Stepper extends React.Component {
var steps = $(".step");
console.dir(steps);

setTimeout(function() {
  steps.each(function(index) {
    var _t = $(this);
    setTimeout(function() {
      _t.addClass('done');
    }, 1250*index*1.5);
  });
}, 500);

render() {
  return(
    <h1>PROGRESS BAR</h1>

<div class="progress">
  <div class="step">
    <div class="step-progress"></div>
    <div class="icon-wrapper">
      <svg class="icon icon-checkmark" viewBox="0 0 32 32"><path class="path1" d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>  </svg>
      <div class="step-text">ENROLLED</div>
    </div>
  </div>
  <div class="step">
    <div class="step-progress"></div>
    <div class="icon-wrapper">
      <svg class="icon icon-checkmark" viewBox="0 0 32 32"><path class="path1" d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>  </svg>
      <div class="step-text">APPLIED</div>
    </div>
  </div>
  <div class="step">
    <div class="step-progress"></div>
    <div class="icon-wrapper">
      <svg class="icon icon-checkmark" viewBox="0 0 32 32"><path class="path1" d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>  </svg>
      <div class="step-text">CONFIRMED</div>
    </div>
  </div>
  <div class="step">
    <div class="icon-wrapper">
      <svg class="icon icon-checkmark" viewBox="0 0 32 32"><path class="path1" d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>  </svg>
      <div class="step-text">DONE!</div>
    </div>
  </div>
</div>
)
}
}
export default Stepper;
