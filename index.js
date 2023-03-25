var whatcoppied__ = document.getElementById("whatcoppied__");
var date__ = document.querySelector(".date__");
var coppiedEl = document.getElementById("coppied");
coppiedEl.children[0].children[0].addEventListener("click", ()=>{
    if (!coppiedEl.classList.contains("d-none")) {
        coppiedEl.classList.toggle("d-none");
    }
})

var ddata;
var mssg__ = document.getElementById("mssg__");
var randnum = parseInt(window.location.href.split("#")[1]);

function isInt(value) {
  return (
    !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value, 10))
  );
}

fetch("data/you.json")
.then (res=>res.json())
.then(data =>{ddata = data})
.then(()=>{
    var time__ = new Date();
    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    date__.innerHTML = formatAMPM(time__) +" - "+ String(time__).split(" ")[1]+" "+String(time__).split(" ")[2]+", "+String(time__).split(" ")[3];

    if(isInt(window.location.href.split("#")[1])){
        mssg__.innerHTML = ddata[parseInt(window.location.href.split("#")[1])];
    } else {
        randnum = Math.floor(Math.random()* ddata.length);
        mssg__.innerHTML = ddata[randnum];
    }
})

function img__() {
    var a = document.createElement("a");
    a.href = "https://www.adnans.ml";
    a.target = "_blank";
    a.click();
}

function contact__(){
    var a = document.createElement("a");
    a.href = "https://www.adnans.website/contact-me/";
    a.target = "_blank";
    a.click();
}

var items = document.querySelectorAll("div.cursosr-pointer");

function link__() {
    var cppy = String(window.location.href+"#"+randnum);
    navigator.clipboard.writeText(cppy);
    whatcoppied__.innerHTML = cppy;
    if (coppiedEl.classList.contains("d-none")) {
        coppiedEl.classList.toggle("d-none");
    }
    setTimeout(()=>{
        if (!coppiedEl.classList.contains("d-none")) {
            coppiedEl.classList.toggle("d-none");
        }  
    }, 5000)
}

function email__() {
    var a = document.createElement("a");
    var body__ = "Hello\nI saw this and I think you need to see it:\n" + window.location.href+"#"+randnum;
    a.href = "mailto:?subject=&body="+encodeURIComponent(body__);
    a.target = "_blank";
    a.click();
}

function twitter__(){
    var a = document.createElement("a");
    var body__ = "Hello\nI saw this and I think you need to see it:\n" + window.location.href+"#"+randnum;
    a.href = "https://twitter.com/intent/tweet?text="+encodeURIComponent(body__);
    a.target = "_blank";
    a.click();
}

items.forEach((e,i)=>{
    switch(i){
        case 0:
            e.addEventListener("click", ()=>{twitter__()});
            break
        case 1:
            e.addEventListener("click", ()=>{email__()});
            break
        case 2:
            e.addEventListener("click", ()=>{link__()});
            break
    }
})
