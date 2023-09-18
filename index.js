const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
var weather_img=document.querySelector('weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.querySelector('#humidity');
const wind=document.querySelector('#wind');
const location_Not_Found=document.querySelector('.location_Not');
const weather_body=document.querySelector('.weather-body');

async function checkweather(city)
{
      const api_key="291186f93a2088008ad7c28c8445b0e6";
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

      const weather_data=await fetch(`${url}`).then(response=>response.json());
      
      if(weather_data.cod==`404`)
      {
        location_Not_Found.style.display="flex";
        weather_body.style.display="none";
        return ;
      }
      
      
      location_Not_Found.style.display="none";
      weather_body.style.display="flex";
      temperature.innerText=Math.round(weather_data.main.temp-273.15)+"°C";
      description.innerHTML=weather_data.weather[0].description;
      humidity.innerHTML=weather_data.main.humidity+"%";
      wind.innerHTML=weather_data.wind.speed+" Km/h";
     
      const data=weather_data.weather[0].main;
      
        
        if(data=='Clouds')
            document.querySelector('.weather-img').src="images/cloud.png";
          
        else if(data=='Clear')
             document.querySelector('.weather-img').src="images/clear.png";
        
        else if(data=='Mist')
            document.querySelector('.weather-img').src="images/mist.png";
       
        else if(data=='Rain')
            document.querySelector('.weather-img').src="images/rain.png";
        
        else if(data=='Snow')
            document.querySelector('.weather-img').src="images/snow.png";
                
     
    
    }
     


searchBtn.addEventListener('click',function(){
    checkweather(inputBox.value);
});