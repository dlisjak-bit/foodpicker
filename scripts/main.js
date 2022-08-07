const Kuhinje = ["azijska", "kitajska", "indijska", "ameriška", "slovenska", "morska", "italijanska"];
var lokacija = "";
var gumb1_rezultat = document.getElementById("rezultat");
var gumb2_izginujoci = document.getElementById("izginujoci");
var gumb3_spreminjajoci = document.getElementById("spreminjajoci");
var gumb4_izbirajoci = document.getElementById("izbirajoci");

var demiDom_restavracije = ["Park Žibert", "McDonald's", "Flying Smoker", "Svetilnik", "Picarole", "Kitajc"];
var domenDom_restavracije = ["McDonald's", "Roza Slon", "Dobra vila", "Pica Marija", "Picarole", "Han Aleja", "Tloft", "Foculus", "Mehiška", "Subway"];
var center_restavracije = ["ni se dodano"];

var izbrana_lokacija_restavracije;


function Refresh(){
    window.location.reload();
}


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
    gumb1_rezultat.innerHTML = "<p class='izbranka'>" + Kuhinje[index] + " hrana" + "</p>";
    //setTimeout(() => { document.getElementById("rezultat").innerHTML = ""; }, 10000);
}

function demiDomSelect(){
    lokacija = "Medenska cesta 55";
    izbrana_lokacija_restavracije = demiDom_restavracije;
    Restavracija();
}

function domenDomSelect(){
    lokacija = "Hubadova ulica 39";
    izbrana_lokacija_restavracije = domenDom_restavracije;
    Restavracija();
}

function centerSelect(){
    lokacija = "Center";
    izbrana_lokacija_restavracije = center_restavracije;
    Restavracija();
}



function izbiraLokacije(){
    //Trije gumbi: Demi dom, Domen dom, Center
    gumb1_rezultat.innerHTML = "";
    gumb1_rezultat.classList.add("neviden-rezultat");
    gumb1_rezultat.classList.remove("gumbvelik");

    gumb2_izginujoci.innerHTML = "Demi dom";
    gumb2_izginujoci.onclick = demiDomSelect;

    gumb3_spreminjajoci.innerHTML = "Domen dom";
    gumb3_spreminjajoci.onclick = domenDomSelect;


    gumb4_izbirajoci.innerHTML = "Center";
    gumb4_izbirajoci.onclick = centerSelect;


}

function novaRestavracija(){
    // Choose random restaurant from the list at the location
    index = Math.floor(Math.random()*izbrana_lokacija_restavracije.length);
    izbrana_restavracija = izbrana_lokacija_restavracije[index];
    gumb1_rezultat.innerHTML = "<p class='izbranka_restavracija'>" + izbrana_restavracija + "</p>";
}

function Restavracija(){

    // Change window into Restavracija without needing another page
    gumb1_rezultat.innerHTML = "";
    gumb1_rezultat.classList.add("restavracija-rezultat");
    gumb1_rezultat.classList.remove("neviden-rezultat");

    gumb2_izginujoci.style.display = "none";

    gumb3_spreminjajoci.classList.remove("gumbvelik");
    gumb3_spreminjajoci.classList.add("nazaj");
    gumb3_spreminjajoci.onclick = Nazaj;
    gumb3_spreminjajoci.innerHTML = "Nazaj";

    gumb4_izbirajoci.innerHTML = "Izberi drugo";
    gumb4_izbirajoci.onclick = novaRestavracija;

    novaRestavracija();
}

function Nazaj(){

    // Revert changes into stock index.html
    gumb1_rezultat.classList.remove("restavracija-rezultat");
    gumb1_rezultat.classList.add("gumbvelik");
    gumb1_rezultat.innerHTML = ""

    gumb2_izginujoci.style.display = "block";
    gumb2_izginujoci.innerHTML = "Kovanec"
    gumb2_izginujoci.onclick = MetKovanca;

    gumb3_spreminjajoci.classList.remove("nazaj");
    gumb3_spreminjajoci.classList.add("gumbvelik");
    gumb3_spreminjajoci.onclick = IzbiraVrste;
    gumb3_spreminjajoci.innerHTML = "Kuhinja";

    gumb4_izbirajoci.onclick = izbiraLokacije;
    gumb4_izbirajoci.innerHTML = "Restavracija";


    //window.location.reload();
}