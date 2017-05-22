exports.trackEntersTheBox = function(gpsTrack, pointNorthWest, pointSouthEast) {
  for (i = 0; i < gpsTrack.length; i ++) {
    if (gpsTrack[i].lat <= pointNorthWest.lat && gpsTrack[i].lat >= pointSouthEast.lat && gpsTrack[i].lon >= pointNorthWest.lon && gpsTrack[i].lon <= pointSouthEast.lon) {
      console.log('TRUE');
      return true;
    }
  }
  console.log('FALSE');
  return false;
};

exports.trackIsInTheBox = function(gpsTrack, pointNorthWest, pointSouthEast) {
  for (i = 0; i < gpsTrack.length; i ++) {
    if (gpsTrack[i].lat > pointNorthWest.lat || gpsTrack[i].lat < pointSouthEast.lat || gpsTrack[i].lon < pointNorthWest.lon || gpsTrack[i].lon > pointSouthEast.lon) {
      console.log('FALSE');
      return false;
    }
  }
  console.log('TRUE');
  return true;
};

exports.getDistanceBetweenPointAndNearestGpsPoint = function(gpsTrack, gpsPoint) {
  var distSave = null;
  for (i = 0; i < gpsTrack.length; i ++) {
    // dist^2 = a^2 + b^2
    var dist = Math.sqrt(Math.pow(Math.abs((gpsTrack[i].lat - gpsPoint.lat)), 2) + Math.pow(Math.abs((gpsTrack[i].lon - gpsPoint.lon)), 2));
    if (dist < distSave || distSave == null) {
      distSave = { nearestPoint: i, distancePoint: dist };
    }
  }
  console.log(distSave.distancePoint);
  return distSave.distancePoint;
};
