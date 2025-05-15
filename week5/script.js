const input = document.getElementById('city-input');
const weatherCard = document.getElementById('weather-card');
const description = document.getElementById('description');
const temperature = document.getElementById('temp');
const locationText = document.getElementById('location');
const icon = document.getElementById('icon');
const form = document.getElementById('search-form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const city = encodeURIComponent(input.value.trim()); //URL 인코딩 해도 한글 X
    if(!city){
        alert('도시 이름을 입력해주세요.');
        return; //동작 중지
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=kr`)
    .then((response) => {
        if(!response.ok){ //응답 상태 성공 여부
            throw new Error('도시를 찾을 수 없습니다.');
        }
        return response.json();
    })
    .then((data)=>{
        description.textContent = data.weather[0].description;
        temperature.textContent =`${data.main.temp}°C`;
        locationText.textContent = `${data.name}, ${data.sys.country}`;
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        icon.alt = data.weather[0].description;

        weatherCard.classList.remove('hidden');
    })
    .catch((error) => {
        alert(error.message);
        weatherCard.classList.add('hidden');
    });
});