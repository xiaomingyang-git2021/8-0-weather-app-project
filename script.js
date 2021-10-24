let form = document.querySelector("form#city_choice");
let searchedCity = [];

form.addEventListener("submit",(e)=>{
  
    e.preventDefault();
    let selectedCity = e.target["city_name"].value;
    selectedCity = selectedCity.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    // selectedCity = selectedCity[0].toUpperCase()+ selectedCity.slice(1);
    if(!selectedCity){
        return;
    }
    e.target["city_name"].value ="";

    weatherForcast(selectedCity);

});

function weatherForcast(cityName){
    fetch(`https://wttr.in/${cityName}?format=j1`)
.then((result)=>{
    return result.json();
}).then((data)=>{
    let main = document.querySelector("#main");
    main.innerHTML = ` 
    <div><h2>${cityName}<h2></div>
    <div id="display-details">
        <h2 id="selected-city"></h2>
    </div>
        <div id="display-area"><strong>Area:</strong> ${data.nearest_area[0].areaName[0].value}</div>
        <div id="display-region"><strong>Region:</strong> ${data.nearest_area[0].region[0].value}</div>
        <div id="display-country"><strong>Country:</strong> ${data.nearest_area[0].country[0].value}</div>
        <div id="display-currently"> <strong>Currently:</strong> ${data.current_condition[0].FeelsLikeF} °F / ${data.current_condition[0].FeelsLikeC} °C</div>`;
    
    let weatherResults = document.querySelector("#weather_results");
    weatherResults.innerHTML = `
        <div id="weather_results_today">
                <div>
                    <h3>Today</h3>
                </div>
                <div>Average Tempretaure: ${data.weather[0].avgtempF} °F / ${data.weather[0].avgtempC} °C</div>
                <div>Max Temperature: ${data.weather[0].maxtempF} °F / ${data.weather[0].maxtempC} °C</div>
                <div>Min Temperature: ${data.weather[0].mintempF} °F / ${data.weather[0].mintempC} °C</div>
        </div>
        <div id="weather_results_tomorrow">
                <div>
                    <h3>Tomorrow</h3>
                </div>
                <div>Average Tempretaure: ${data.weather[1].avgtempF} °F / ${data.weather[1].avgtempC} °C</div>
                <div>Max Temperature: ${data.weather[1].maxtempF} °F / ${data.weather[1].maxtempC} °C</div>
                <div>Min Temperature: ${data.weather[1].mintempF} °F / ${data.weather[1].mintempC} °C</div>
        </div>
        <div id="weather_results_after_tomorrow">
                <div>
                    <h3>Day After Tomorrow</h3>
                </div>
                <div>Average Tempretaure: ${data.weather[2].avgtempF} °F / ${data.weather[2].avgtempC} °C</div>
                <div>Max Temperature: ${data.weather[2].maxtempF} °F / ${data.weather[2].maxtempC} °C</div>
                <div>Min Temperature: ${data.weather[2].mintempF} °F / ${data.weather[2].mintempC} °C</div>
        </div>`;
        let message = document.querySelector("#message");
        if(message){
            message.remove();
        }
        let ul = document.querySelector("#previous_searches");
        let li = document.createElement("li");
        let a = document.createElement("a");
        let span = document.createElement("span");
        a.href = "#";
        span.textContent = ` - ${data.current_condition[0].FeelsLikeF}°F / ${data.current_condition[0].FeelsLikeC}°C `;
        a.textContent = `${cityName}`;

        
        if(!searchedCity.includes(cityName)){
            li.append(a,span);
            ul.append(li);
            searchedCity.push(cityName);
        };
        a.addEventListener("click", (e)=>{
            weatherForcast(e.target.textContent);
            
        })
    }).catch((error)=>{
        console.log(error)
    });
}
