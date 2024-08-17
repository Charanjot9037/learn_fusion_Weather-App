const apikey="a0a413c115ced41412ed8ab3a9ff5421";
const apiurl="https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=";


const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const icon=document.querySelector(".wathericon");

async function checkweather(city) {

    const response=await fetch(apiurl + city+`&appid=${apikey}`);

    if(response.status==404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".head").style.display="none";
        var data=await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    
    
    if(data.weather[0].main=="Clouds")
    {
        icon.src="clouds.png";
    
    }
    
    else if(data.weather[0].main=="Clear")
        {
            icon.src="clear.png";
        
        
        }
        else if(data.weather[0].main=="Rain")
            {
                icon.src="rain.png";
            
            
            }
            else if(data.weather[0].main=="Dizzle")
                {
                    icon.src="dizzle.png";
                
                
                }
                else if(data.weather[0].main=="Mist")
                    {
                        icon.src="mist.png";
                    
                    
                    }
                    document.querySelector(".weather").style.display="block";
                    document.querySelector(".error").style.display="none";
    }
  

}




searchbtn.addEventListener("click",()=>{checkweather(searchbox.value);

})



