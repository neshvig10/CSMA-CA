let traveltime=5000;
let node1sendingframe=false;

let time1="0";

const display = document.getElementById("page1display");
const cw1=document.getElementById("cw1");
const cw2=document.getElementById("cw2");
const cw3=document.getElementById("cw3");
const cw4=document.getElementById("cw4");
const cw5=document.getElementById("cw5");

function refreshTime() {
  if (node1sendingframe)
  {
    display.innerHTML = "Sending Frame";
  }
  else
  {
    display.innerHTML = "Node 1 is Idle "
  }

  console.log(time1)

  if (time1==="0")
  {
    cw1.style.backgroundColor="green";
    cw2.style.backgroundColor="green";
    cw3.style.backgroundColor="green";
    cw4.style.backgroundColor="green";
    cw5.style.backgroundColor="green";
  }

  if (time1==="5")
  {
    cw1.style.backgroundColor="green";
    cw2.style.backgroundColor="green";
    cw3.style.backgroundColor="green";
    cw4.style.backgroundColor="green";
    cw5.style.backgroundColor="red";
    time1="0";
  }
  if (time1==="4")
  {
    cw1.style.backgroundColor="green";
    cw2.style.backgroundColor="green";
    cw3.style.backgroundColor="green";
    cw4.style.backgroundColor="red";
    cw5.style.backgroundColor="green";
    time1="5";
  }
  if (time1==="3")
  {
    cw1.style.backgroundColor="green";
    cw2.style.backgroundColor="green";
    cw3.style.backgroundColor="red";
    cw4.style.backgroundColor="green";
    cw5.style.backgroundColor="green";
    time1="4";
  }
  if (time1==="2")
  {
    cw1.style.backgroundColor="green";
    cw2.style.backgroundColor="red";
    cw3.style.backgroundColor="green";
    cw4.style.backgroundColor="green";
    cw5.style.backgroundColor="green";
    time1="3";
  }
  if (time1==="1")
  {
    cw1.style.backgroundColor="red";
    cw2.style.backgroundColor="green";
    cw3.style.backgroundColor="green";
    cw4.style.backgroundColor="green";
    cw5.style.backgroundColor="green";
    time1="2";
  }
}
setInterval(refreshTime, 1000);


function collisioncheck(){
  node1sendingframe=false;
  if (channel_busy)
  {
    alert("Interfered with bot node's signal");
  }
  else
  {
    alert("Hub Recieved Frame from Node 1 !");
  }
}


function sendframe() {
  node1sendingframe=true;
  time1 = "1";
  setTimeout(function () {
    collisioncheck();
  }, traveltime);
}


//bot
let rand=0;
let sendtime=5;

let ch=1;
if (ch)
{
  channelstatus();
  refreshTime();
  ch=0;
}


function channelstatus(){
  channel_busy=false;
  console.log("Botsent");

  rand=Math.random()*10;
  console.log(rand*1000);

  setTimeout(() => {
    botsendframe();
  },rand*1000);

}


function botsendframe(){
  channel_busy=true;

  console.log("BotsendingFrame");

  setTimeout(() => {
    channelstatus();
  },traveltime);
}