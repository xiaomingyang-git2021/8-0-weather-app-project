// let form = document.querySelector("form#city_choice");
// let searchedCity = [];
// form.addEventListener("submit",(e)=>{
  
//     e.preventDefault();
//     let selectedCity = e.target["city_name"].value;
//     if(!selectedCity) {
//         return;
//     }
//     console.log(selectedCity);
//     e.target["city_name"].value ="";

//     // let city = selectedCity[0].toUpperCase() + selectedCity.slice(1);
//     selectedCity = selectedCity.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
//     fetch(`https://wttr.in/${selectedCity}?format=j1`)
//     .then((result)=>{
//         return result.json();
//     }).then((data)=>{
//         let main = document.querySelector("#main");
//         main.innerHTML = ` 
//         <div><h2>${selectedCity}<h2></div>
//         <div id="display-details">
//             <h2 id="selected-city"></h2>
//         </div>
//             <div id="display-area"><strong>Area:</strong> ${data.nearest_area[0].areaName[0].value}</div>
//             <div id="display-region"><strong>Region:</strong> ${data.nearest_area[0].region[0].value}</div>
//             <div id="display-country"><strong>Country:</strong> ${data.nearest_area[0].country[0].value}</div>
//             <div id="display-currently"> <strong>Currently:</strong> ${data.current_condition[0].FeelsLikeF} °F</div>`;
        
//         let weatherResults = document.querySelector("#weather_results");
//         weatherResults.innerHTML = `
//             <div class="weather_results_today">
//                     <div>
//                         <h3>Today</h3>
//                     </div>
//                     <div>Average Tempretaure: ${data.weather[0].avgtempF} °F</div>
//                     <div>Max Temperature: ${data.weather[0].maxtempF} °F</div>
//                     <div>Min Temperature: ${data.weather[0].mintempF} °F</div>
//             </div>
//             <div class="weather_results_tomorrow">
//                     <div>
//                         <h3>Tomorrow</h3>
//                     </div>
//                     <div>Average Tempretaure: ${data.weather[1].avgtempF} °F</div>
//                     <div>Max Temperature: ${data.weather[1].maxtempF} °F</div>
//                     <div>Min Temperature: ${data.weather[1].mintempF} °F</div>
//             </div>
//             <div class="weather_results_after_tomorrow">
//                     <div>
//                         <h3>Day After Tomorrow</h3>
//                     </div>
//                     <div>Average Tempretaure: ${data.weather[2].avgtempF} °F</div>
//                     <div>Max Temperature: ${data.weather[2].maxtempF} °F</div>
//                     <div>Min Temperature: ${data.weather[2].mintempF} °F</div>
//             </div>`;
//             let message = document.querySelector("#message");
//             let ul = document.querySelector("#previous_searches");
//             let li = document.createElement("li");
//             let a = document.createElement("a");
//             let span = document.createElement("span");
//             span.textContent = `  - ${data.current_condition[0].FeelsLikeF} °F`
//             a.href = "#";
//             a.textContent = `${selectedCity}`;
//             li.append(a, span);
//             ul.append(li);
//             if(message){
//                 message.remove();
//             }
            
//             if(!searchedCity.includes(selectedCity)){
//                 li.append(a, span);
//                 ul.append(li);
//                 searchedCity.push(selectedCity);
//             }
//     }).catch((error)=>{
//         console.log(error)
//     });
// });

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

    
    // let city = selectedCity[0].toUpperCase() + selectedCity.slice(1);
    // fetch(`https://wttr.in/${selectedCity}?format=j1`)
    // .then((result)=>{
    //     return result.json();
    // }).then((data)=>{
    //     let main = document.querySelector("#main");
    //     main.innerHTML = ` 
    //     <div><h2>${selectedCity}<h2></div>
    //     <div id="display-details">
    //         <h2 id="selected-city"></h2>
    //     </div>
    //         <div id="display-area"><strong>Area:</strong> ${data.nearest_area[0].areaName[0].value}</div>
    //         <div id="display-region"><strong>Region:</strong> ${data.nearest_area[0].region[0].value}</div>
    //         <div id="display-country"><strong>Country:</strong> ${data.nearest_area[0].country[0].value}</div>
    //         <div id="display-currently"> <strong>Currently:</strong> ${data.current_condition[0].FeelsLikeF} °F</div>`;
        
    //     let weatherResults = document.querySelector("#weather_results");
    //     weatherResults.innerHTML = `
    //         <div class="weather_results_today">
    //                 <div>
    //                     <h3>Today</h3>
    //                 </div>
    //                 <div>Average Tempretaure: ${data.weather[0].avgtempF} °F</div>
    //                 <div>Max Temperature: ${data.weather[0].maxtempF} °F</div>
    //                 <div>Min Temperature: ${data.weather[0].mintempF} °F</div>
    //         </div>
    //         <div class="weather_results_tomorrow">
    //                 <div>
    //                     <h3>Tomorrow</h3>
    //                 </div>
    //                 <div>Average Tempretaure: ${data.weather[1].avgtempF} °F</div>
    //                 <div>Max Temperature: ${data.weather[1].maxtempF} °F</div>
    //                 <div>Min Temperature: ${data.weather[1].mintempF} °F</div>
    //         </div>
    //         <div class="weather_results_after_tomorrow">
    //                 <div>
    //                     <h3>Day After Tomorrow</h3>
    //                 </div>
    //                 <div>Average Tempretaure: ${data.weather[2].avgtempF} °F</div>
    //                 <div>Max Temperature: ${data.weather[2].avgtempF} °F</div>
    //                 <div>Min Temperature: ${data.weather[2].avgtempF} °F</div>
    //         </div>`;
    //         let message = document.querySelector("#message");
    //         if(message){
    //             message.remove();
    //         }
    //         let ul = document.querySelector("#previous_searches");
    //         let li = document.createElement("li");
    //         let a = document.createElement("a");
    //         let span = document.createElement("span");
    //         a.href = "#";
    //         span.textContent = ` - ${data.current_condition[0].FeelsLikeF}°F `;
    //         a.textContent = `${selectedCity}`;

            
    //         if(!searchedCity.includes(selectedCity)){
    //             li.append(a,span);
    //             ul.append(li);
    //             searchedCity.push(selectedCity);
    //         };
    // }).catch((error)=>{
    //     console.log(error)
    // });
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
        <div id="display-currently"> <strong>Currently:</strong> ${data.current_condition[0].FeelsLikeF} °F</div>`;
    
    let weatherResults = document.querySelector("#weather_results");
    weatherResults.innerHTML = `
        <div id="weather_results_today">
                <div>
                    <h3>Today</h3>
                </div>
                <div>Average Tempretaure: ${data.weather[0].avgtempF} °F</div>
                <div>Max Temperature: ${data.weather[0].maxtempF} °F</div>
                <div>Min Temperature: ${data.weather[0].mintempF} °F</div>
        </div>
        <div id="weather_results_tomorrow">
                <div>
                    <h3>Tomorrow</h3>
                </div>
                <div>Average Tempretaure: ${data.weather[1].avgtempF} °F</div>
                <div>Max Temperature: ${data.weather[1].maxtempF} °F</div>
                <div>Min Temperature: ${data.weather[1].mintempF} °F</div>
        </div>
        <div id="weather_results_after_tomorrow">
                <div>
                    <h3>Day After Tomorrow</h3>
                </div>
                <div>Average Tempretaure: ${data.weather[2].avgtempF} °F</div>
                <div>Max Temperature: ${data.weather[2].maxtempF} °F</div>
                <div>Min Temperature: ${data.weather[2].mintempF} °F</div>
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
        span.textContent = ` - ${data.current_condition[0].FeelsLikeF}°F `;
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
 