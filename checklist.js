// checklist.js - counts the ticks on the Take Action page

function countTicks() {
  var boxes = document.querySelectorAll(".checklist input");
  var ticked = 0;

  // go through every box and add 1 if it is ticked
  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i].checked) {
      ticked = ticked + 1;
    }
  }

  document.getElementById("count").textContent = "You picked " + ticked + " of 3 steps.";
}
