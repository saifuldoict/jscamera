// let ID1 = document.getElementById("ID1");
//
// ID1.innerHTML = "Welcome to the Training!";
//
//
// let P1= document.getElementsByClassName("P1");
// p1.innerText = "Hello World";
//
//
// function ClickMe(){
//     let IDP = document.getElementById("IDP").innerHTML = Date();
//
// }

// let praentDiv = document.querySelector(".praentDiv")
// console.log(praentDiv.children);
//
// let divTag= document.createElement("div")
// divTag.innerHTML = "<p>this is p tag</p>"
//
//
// document.body.appendChild(divTag);


// let menu = document.getElementById("menu");
//
// function createElement(name){
//     let li = document.createElement("li");
//     li.textContent = name;
//     return li;
// }
// menu.appendChild(createElement("nowshin"));
// menu.appendChild(createElement("nowshin"));
// menu.appendChild(createElement("nowshin"));
// menu.appendChild(createElement("nowshin"));

// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function(){
//     alert("hello world");
// })



// function  ClickMe(){
//     alert("hello");
// }

const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const hours   = document.getElementById('hours');

setInterval(function(){

    var date=new Date();
    var sec =date.getSeconds();
    var min =date.getMinutes();
    var hou =date.getHours();


    seconds.innerText = sec;
    minutes.innerText = min;
    hours.innerText = hou;

}), 1000;




const cameraFeed = document.getElementById("cameraFeed");
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        cameraFeed.srcObject = stream;
    })
    .catch(error => {
        console.error("Error accessing camera:", error);
    });