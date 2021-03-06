let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
let b = document.querySelector('#kennsaku');
b.addEventListener('click',kekka);

function kekka(){
  let id;
  let rs = document.querySelectorAll('input[name="to"]');
  for(let r of rs){
    if(r.checked){
      id = r.value;
    }
  }
  let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/"+id+".json";

  axios.get(url)
      .then(showResult)
      .catch(showError)
      .then(finish);
}

function showResult(resp){

  let data = resp.data;

  if(typeof data === 'string'){
    data = JSON.parse(data);
  }

  console.log(data.name);
  console.log(data.main.temp_max);
  console.log(data.main.temp_min);

  let to = document.querySelector('span#toshi');
  to.textContent = data.name;
  let te = document.querySelector('span#tennki');
  let tenn = data.weather[0];
  te.textContent = tenn.description;

  let saikou = document.querySelector('span#saikoukionn');
  saikou.textContent = data.main.temp_max;
  let saitei = document.querySelector('span#saiteikionn');
  saitei.textContent = data.main.temp_min;
  let shi = document.querySelector('span#shitsudo');
  shi.textContent = data.clouds.all;
}

function showError(err){
  console.log(err);
}
function finish(){
  console.log('Ajax 通信が終わりました');
}