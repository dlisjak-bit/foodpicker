const Kuhinje = ["azijska", "kitajska", "indijska", "ameriška", "slovenska", "morska", "italijanska"]

function MetKovanca(){
    var kovanec = Math.random();
    console.log(kovanec);
    if(kovanec<0.5){
        document.getElementById("rezultat").innerHTML = "<img src='./images/glava.png' alt='glava'></img>";
    }
    else{
        document.getElementById("rezultat").innerHTML = "<img src='./images/cifra.png' alt='cifra'></img>";
    }
    //setTimeout(() => { document.getElementById("rezultat").innerHTML = ""; }, 5000);

}

function IzbiraVrste(){
    index = Math.floor(Math.random()*Kuhinje.length);
    document.getElementById("rezultat").innerHTML = Kuhinje[index] + " hrana";
    //setTimeout(() => { document.getElementById("rezultat").innerHTML = ""; }, 10000);
}

function Restavracija(){
    var currentUrl = window.location.href;
    //console.log(currentUrl);
    currentUrl = currentUrl.slice(0,-10);
    //window.location = currentUrl + "pages/restavracija.html";
    

    // Change window into Restavracija without needing another page
    document.getElementById("rezultat").classList.add("restavracija-rezultat");
    document.getElementById("rezultat").classList.remove("btn-lg");

    document.getElementById("izginujoci").style.display = "none";

    document.getElementById("spreminjajoci").classList.remove("btn-lg");
    document.getElementById("spreminjajoci").classList.add("nazaj");
    document.getElementById("spreminjajoci").onclick = Nazaj;
    document.getElementById("spreminjajoci").innerHTML = "Nazaj"

    document.getElementById("izbirajoci").innerHTML = "Izberi drugo"
}

function Nazaj(){

    // Revert changes into stock index.html
    window.location.reload();
}