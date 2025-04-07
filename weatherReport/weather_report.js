function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'db2850f081c88bc1eef3a820a4f1c846'; // 'YOUR_API_KEY' kısmını gerçek API anahtarınızla değiştirin

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    })

    .catch(error => {
        console.error('Hava durumu alınırken hata oluştu:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Hava durumu alınamadı. Lütfen tekrar deneyin.</p>`;
      });
   
    
}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );