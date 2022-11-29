var ddata;
var mssg__ = document.getElementById("mssg__");
var randnum;

fetch("data/you.json")
.then (res=>res.json())
.then(data =>{ddata = data})
.then(()=>{
    if(window.location.href.split("#")[1]){
        mssg__.innerHTML = ddata[parseInt(window.location.href.split("#")[1])];
    } else {
        randnum = Math.floor(Math.random()* ddata.length)
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
    a.href = "https://www.adnans.ml/contact-me/";
    a.target = "_blank";
    a.click();
}

var items = document.querySelectorAll("div.cursosr-pointer");

function link__() {
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    var ccpy = window.location.href + "#" + randnum;
    navigator.clipboard.writeText(ccpy);
}

function email__() {
    
}

function twitter__(){

}

items.forEach((e,i)=>{
    switch(i){
        case 0:
            twitter__()
            console.log("twitter")
            break
        case 1:
            email__()
            console.log("email")
            break
        case 2:
            e.addEventListener("click", link__());
            console.log("link")
            break
    }
})
