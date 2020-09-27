window.addEventListener('load',()=>{
  let long;
  let lat;
  let degree = document.getElementById("degree");
  let description = document.getElementById("description");
  let location = document.getElementById("timezone");

  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position =>{
        long = position.coords.longitude;
        lat = position.coords.latitude;
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f315233507e499cdb2199f36ce45babd`;
        

        fetch(url)
        .then(response=>{
          return response.json();
        })
        .then(data=>{

          const temp = data.main.temp;
          const summary = data.weather[0].description;
          const city = data.name;
          degree.innerHTML = temp;
          description.innerHTML = summary;
          location.innerHTML = city;


        })
      });
  }
  else{
    h1.textContent ="Please allow to access your location";
  }





});
