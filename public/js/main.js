const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');

const data_hide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === ''){
        city_name.innerText = `Plz Write the Name Before Search`;
        data_hide.classList.add('data_hide');

    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=eabca886340a06952a5c58b5d0f4cb78`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            console.log(arrdata);

            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp_real_val.innerText = arrdata[0].main.temp;
            const tempMood = arrdata[0].weather[0].main;


            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0b6;'></i>";
            }else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }

           data_hide.classList.remove('data_hide');


        }catch{
            city_name.innerText = `Plz Enter the City Name Properly`;
            data_hide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);