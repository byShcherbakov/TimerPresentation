const items = document.querySelectorAll('.countDown-item >h4'); //получать цифру с h4
const countContainer = document.querySelector('.countDown')
//Точка отсчета
let conutdownDay = new Date(2026,2,20,10,24,60).getTime()

function getCountDownTime(){
    //время
    const now = new Date().getTime(); //получение временив в милл сек

    //разница во времени
    const distance =  now - conutdownDay ;

    //1c = 1000мс 
    //1 м = 60с 
    //1 ч = 60м
    //1д = 24ч 

    //Создание переменных 
    const oneDay = 24*60*60*1000;
    const onehour = 60*60*1000;
    const oneMinute = 60*1000;

    //подсчет 
    let days = Math.floor(distance/oneDay);
    let hours = Math.floor((distance%oneDay)/onehour);
    let minutes = Math.floor((distance%onehour)/oneMinute);
    let secconds = Math.floor((distance%oneMinute)/1000);

    //Создание массив переменных
    const values =[days,hours,minutes, secconds]
    //добл значени на страницу 
    items.forEach(function (item,index){
        item.textContent = (values[index]);
    })

    if(distance < 0){
        clearInterval(countDown);
        countContainer.innerHTML = `<h4 class = 'expired'>Таймер закончился</h4>`
    }
} 

// обноваление счетчика 
 let countDown= setInterval(getCountDownTime,10)

//инциализация тайма 


