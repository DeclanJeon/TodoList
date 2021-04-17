const weather = document.querySelector(".js-weather");

const API_KEY = "b607fa16091ba670f2b6fae2a8af9c33";
const COORDS_LS = 'coords';

function getWeather(lat, lng) {
  // fetch를 사용할 떄에는 백틱(``)을 쓴다
  // 데이터가 완전히 들어온 다음 호출해야 하기 떄문에 .then을 사용한다
  fetch (
  	// https://openweathermap.org/current 참고
  	`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  ).then(function(res){
  	return res.json()
  }).then(function(json){
  	console.log(json);
  	const temperature = json.main.temp;
  	const place = json.name;
  	const description1 = json.weather[0].main;
  	const description2 = json.weather[0].description;
  	weather.innerHTML = `<b>${description1}</b><br>${description2} ${temperature}℃ @ ${place}`;
  })
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
  	latitude,
  	longitude
  };
  saveCoords(coordsObj); // LS
  getWeather(latitude, longitude); // API
}

function handleGeoError(){
  console.log('Can\'t access geo location.');
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS_LS);
  if(loadedCoords === null){
    askForCoords();
  } else {
    // getWeather -> 로컬스토리지에서 좌표정보 가져옴
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
	loadCoords();
}

init();