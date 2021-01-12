window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription=document.querySelector('.temperature-description');
    let temperatureDegree=document.querySelector('.temperature-degree');
    let locationTimezone=document.querySelector('.location-timezone');
    
    //extra
    let locationName=document.querySelector('.location-name');
    let temperatureFeelsLike=document.querySelector('.temperature-feels-like');
    let temperatureTempMin=document.querySelector('.temperature-temp-min');
    let temperatureTempMax=document.querySelector('.temperature-temp-max');
    let temperaturePressure=document.querySelector('.temperature-pressure');
    let temperatureHumidity=document.querySelector('.temperature-humidity');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long=position.coords.longitude;
            lat=position.coords.latitude;
            //long=position.coord.lon;
            //lat=position.coord.lat;

            //const proxy="https://cors-anywhere.herokuapp.com/";
            //const api=`${proxy}http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}.363&appid=ea79adb27d3942882171f664726d0950`;
            //const api=`${proxy}http://api.openweathermap.org/data/2.5/weather?lat=22.5626&lon=88.363&appid=ea79adb27d3942882171f664726d0950`;
            //const api=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}.363&appid=ea79adb27d3942882171f664726d0950`;
            const api=`http://api.openweathermap.org/data/2.5/weather?lat=22.5626&lon=88.363&appid=ea79adb27d3942882171f664726d0950`;

            fetch(api)
             .then(response =>{
                return response.json();
            })
             .then(data =>{
                console.log(data);
                const {temp} = data.main;
                const [{description}] = data.weather;
                const {country} = data.sys;

                //extra
                const {feels_like} = data.main;
                const {temp_min} = data.main;
                const {temp_max} = data.main;
                const {pressure} = data.main;
                const {humidity} = data.main;

                //DOM elements from API
                temperatureDegree.textContent=temp;
                temperatureDescription.textContent=description;
                locationTimezone.textContent=country;

                //extra
                locationName.textContent=data.name;
                temperatureFeelsLike.textContent=feels_like;
                temperatureTempMin.textContent=temp_min;
                temperatureTempMax.textContent=temp_max;
                temperaturePressure.textContent=pressure;
                temperatureHumidity.textContent=humidity;
            });
        });
    }
});