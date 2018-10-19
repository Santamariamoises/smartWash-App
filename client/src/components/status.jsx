import React from 'react';

function start(al) {
  var bar = document.getElementById('progressBar');
  var status = document.getElementById('status');
  status.innerHTML = al + "%";
  bar.value = al;
  al++;
  var sim = setTimeout("start(" + al + ")", 1);
  if (al == 100) {
    status.innerHTML = "100%";
    bar.value = 100;
    clearTimeout(sim);
    var finalMessage = document.getElementById('finalMessage');
    finalMessage.innerHTML = "Process is complete";
  }

render(){
  return (
    <div>
    <body>
      <progress id="progressBar" value="0" max="100" style="width:300px;"></progress>
      <span id="status"></span>
    <h1 id="finalMessage"></h1>
  //<!-- Add Button with event Click
    with this event start your progressbar with your function -->
    <button onclick='start(0)'>Click</button>
  </body>
  </div>
)
}


export default Status;
