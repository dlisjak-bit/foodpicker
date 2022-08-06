const Kuhinje = ["azijska", "kitajska", "indijska", "ameriška", "slovenska", "morska", "italijanska"];
var lokacija = "";
var gumb1_rezultat = document.getElementById("rezultat");
var gumb2_izginujoci = document.getElementById("izginujoci");
var gumb3_spreminjajoci = document.getElementById("spreminjajoci");
var gumb4_izbirajoci = document.getElementById("izbirajoci")



function MetKovanca(){
    var kovanec = Math.random();
    console.log(kovanec);
    if(kovanec<0.5){
        gumb1_rezultat.innerHTML = "<img src='./images/glava.png' alt='glava'></img>";
    }
    else{
        gumb1_rezultat.innerHTML = "<img src='./images/cifra.png' alt='cifra'></img>";
    }
    //setTimeout(() => { document.getElementById("rezultat").innerHTML = ""; }, 5000);

}

function IzbiraVrste(){
    index = Math.floor(Math.random()*Kuhinje.length);
    gumb1_rezultat.innerHTML = Kuhinje[index] + " hrana";
    //setTimeout(() => { document.getElementById("rezultat").innerHTML = ""; }, 10000);
}

function demiDomSelect(){
    lokacija = "Medenska cesta 55";
    Restavracija()
}

function domenDomSelect(){
    lokacija = "Hubadova ulica 39";
    Restavracija()
}

function centerSelect(){
    lokacija = "Center";
    Restavracija()
}



function izbiraLokacije(){
    //Trije gumbi: Demi dom, Domen dom, Center
    gumb1_rezultat.style.display = "none";

    gumb2_izginujoci.innerHTML = "Demi dom";
    gumb2_izginujoci.onclick = demiDomSelect;

    gumb3_spreminjajoci.innerHTML = "Domen dom";
    gumb3_spreminjajoci.onclick = domenDomSelect;


    gumb4_izbirajoci.innerHTML = "Center";
    gumb4_izbirajoci.onclick = centerSelect;


}

function Restavracija(){

    // Change window into Restavracija without needing another page
    gumb1_rezultat.style.display = "block";
    gumb1_rezultat.innerHTML = "";
    gumb1_rezultat.classList.add("restavracija-rezultat");
    gumb1_rezultat.classList.remove("gumbvelik");

    gumb2_izginujoci.style.display = "none";

    gumb3_spreminjajoci.classList.remove("gumbvelik");
    gumb3_spreminjajoci.classList.add("nazaj");
    gumb3_spreminjajoci.onclick = Nazaj;
    gumb3_spreminjajoci.innerHTML = "Nazaj";

    gumb4_izbirajoci.innerHTML = "Izberi drugo";
    gumb4_izbirajoci.onclick = drugaRestavracija;
}

function Nazaj(){

    // Revert changes into stock index.html
    window.location.reload();
}