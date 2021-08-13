const timeE=document.getElementById('time');
const dateE=document.getElementById('day-date');
const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
const APIKey="8708ea16a91c0069f011d80a051d7f33";
setInterval(() => {
    const time=new Date();
    const month=time.getMonth();
    const date=time.getDate();
    const day=time.getDay();
    const hour=time.getHours();
    const Hoursin12=hour>=13? hour%12 :hour
    const minutes=time.getMinutes();
    const ampm=hour>=12?'PM':'AM';
    timeE.innerHTML =((Hoursin12<10?'0'+Hoursin12:Hoursin12)+':'+(minutes<10?'0'+minutes:minutes)+' '+`<span class="am-pm">${ampm}</span>`)
    dateE.innerHTML =(days[day]+', '+date+' '+months[month]);
},1000);
// function to call the api based on geo location.
getWeatherData();
function getWeatherData()
{
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);
        let {lat,log}=success.coords;
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${log}&exclude=hourly,minutely&appid=${APIKey}`).then(res=>res.json()).then(data=>{
            console.log(data);
        })
    })
}