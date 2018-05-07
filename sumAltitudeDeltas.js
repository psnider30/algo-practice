function sumAltitudeDeltas(altitudes, start, end) {
  var delta = 0;
  var hike = altitudes.slice(start, end + 1);


  for (var i = 0; i < hike.length - 1; i++) {
    var currentDelta = hike[i + 1] - hike[i];
    if (currentDelta > 0) { // increase
      delta += currentDelta * 2;

    } else { //decrease
    delta += Math.abs(currentDelta);

    }
  }
  return delta;
}


console.log(sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 1));
