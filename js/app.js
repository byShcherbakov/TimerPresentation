const items = document.querySelectorAll('.countDown-item >h4'); //получать цифру с h4

//Точка отсчета
let conutdownDay = new Date(2026,2,20,10,24,60).getTime()


function getCountDownTime(){
    //время
    const now = new Date().getTime(); //получение временив в милл сек


    //разница во времени
    const distance =  conutdownDay - now;
}