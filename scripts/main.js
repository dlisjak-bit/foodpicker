

var kovanec

function MetKovanca(){
    kovanec = Math.random();
    console.log(kovanec);
    if(kovanec<0.5){
        kovanec = "glava"
    }
    else{
        kovanec = "cifra"
    }
    console.log(kovanec)
    document.getElementById("rezultat").innerHTML = kovanec;
    setTimeout(() => { document.getElementById("rezultat").innerHTML = ""; }, 5000);

}

function IzbiraVrste(){

}