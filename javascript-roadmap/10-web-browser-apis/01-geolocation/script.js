// getCurrentPosition()

function curSuccess(pos) {
  const { latitude, longitude, accuracy } = pos.coords;

  console.log(`Latitude: ${latitude}`);
  console.log(`Longitude: ${longitude}`);
  console.log(`Within: ${accuracy} meters`);
}

function curError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// watchPosition()

const target = {
  latitude: 41.3874387,
  longitude: -71.394839,
};

function watchSuccess(pos) {
  const { latitude, longitude } = pos.coords;
  console.log(pos.coords);

  if (target.latitude === latitude && target.longitude === longitude) {
    console.log('You have reached your destination!');
    navigator.geolocation.clearWatch(id);
  }
}

function watchError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
};

const id = navigator.geolocation.watchPosition(
  watchSuccess,
  watchError,
  watchOptions
);
