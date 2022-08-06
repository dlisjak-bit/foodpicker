const Kuhinje = [azijska, kitajska, indijska, ameriška, slovenska, morska, italijanska]

function MetKovanca(){
    var kovanec = Math.random();
    console.log(kovanec);
    if(kovanec<0.5){
        document.getElementById("rezultat").innerHTML = "<img src='./images/glava.png' alt='glava'></img>";
    }
    else{
        document.getElementById("rezultat").innerHTML = "<img src='./images/cifra.png' alt='cifra'></img>";
    }
    setTimeout(() => { document.getElementById("rezultat").innerHTML = ""; }, 5000);

}

function IzbiraVrste(){

}