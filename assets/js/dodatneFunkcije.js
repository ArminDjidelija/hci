var naslov = "";
var dijagnoza = "";

document.addEventListener("DOMContentLoaded", function () {
    console.log(window.location.href);

    // stranica 1
    if (window.location.href == "http://127.0.0.1:5500/RezervacijaTermina1.html" ||
        window.location.href == "http://127.0.0.1:5500/RezervacijaTermina3.html") {
        var naslovInput = document.getElementById("naslov"); // Zamijenite "myInput" s ID-om vašeg input polja
        var naslovLocalStorage = localStorage.getItem("naslov");

        var dijagnozaInput = document.getElementById("dijagnoza");
        var dijagnozaLocalStorage = localStorage.getItem("dijagnoza");

        if (naslovLocalStorage) {
            naslovInput.value = naslovLocalStorage;
        }
        if (dijagnozaLocalStorage) {
            dijagnozaInput.value = dijagnozaLocalStorage;
        }

    }
    if (window.location.href == "http://127.0.0.1:5500/RezervacijaTermina2.html" ||
        window.location.href == "http://127.0.0.1:5500/RezervacijaTermina3.html") {
        // stranica 2

        var datumTermina = document.getElementById("datumTermina");
        var datum = localStorage.getItem("datumTermina");

        if (datum) {
            datumTermina.value = datum;
            console.log(datum);
        }

        var vrijemeSati = document.getElementById("vrijemeTerminaSati");
        var sati = localStorage.getItem("vrijemeTerminaSati");

        if (sati) {
            vrijemeSati.value = sati;
            console.log(sati);

        }

        var vrijemeMinute = document.getElementById("vrijemeTerminaMinute");
        var minute = localStorage.getItem("vrijemeTerminaMinute");

        if (minute) {
            vrijemeMinute.value = minute;
            console.log(minute);

        }

        var tipPrviPregled = document.getElementById("prviPregled");
        var tipPrvi = localStorage.getItem("tipPregledaPrvi");

        if (tipPrvi == "true") {
            tipPrviPregled.checked = true;
            console.log("Tip prvi: ", tipPrvi);
        }


        var tipKontrolaPregled = document.getElementById("kontrola");
        var tipKontrola = localStorage.getItem("tipPregledaKontrola");

        if (tipKontrola == "true") {
            tipKontrolaPregled.checked = true;
            console.log("Tip kontrola: ", tipKontrola);
        }

        var hitnostDa = document.getElementById("hitnostDa");
        var da = localStorage.getItem("hitnostPregledaDa");

        if (da == "true") {
            hitnostDa.checked = da;
            console.log(da);

        }

        var hitnostNe = document.getElementById("hitnostNe");
        var ne = localStorage.getItem("hitnostPregledaNe");

        if (ne == "true") {
            hitnostNe.checked = ne;
            console.log(ne);

        }
    }

});



function odaberiTermin(id) {
    if (id == 1) {
        document.getElementById("obabranTermin1").style.border = "3px solid green";
        document.getElementById("obabranTermin2").style.border = "3px solid red";
        document.getElementById("obabranTermin3").style.border = "3px solid red";
    }
    else if (id == 2) {
        document.getElementById("obabranTermin1").style.border = "3px solid red";
        document.getElementById("obabranTermin2").style.border = "3px solid green";
        document.getElementById("obabranTermin3").style.border = "3px solid red";
    }
    else if (id == 3) {
        document.getElementById("obabranTermin1").style.border = "3px solid red";
        document.getElementById("obabranTermin2").style.border = "3px solid red";
        document.getElementById("obabranTermin3").style.border = "3px solid green";
    }
}

function prviKorakNext() {
    const naslovInput = document.getElementById("naslov");
    const dijagnozaInput = document.getElementById("dijagnoza");

    // Get the warning divs
    const naslovWarning = document.getElementById("naslovWarning");
    const dijagnozaWarning = document.getElementById("dijagnozaWarning");

    if (naslovInput.value.trim() != "" &&
        dijagnozaInput.value.trim() != "") {
        naslov = naslovInput.value;
        dijagnoza = dijagnozaInput.value;

        localStorage.setItem('naslov', naslov);
        localStorage.setItem('dijagnoza', dijagnoza);

        window.location.href = "RezervacijaTermina2.html";

    }

    // Check if the first name is empty
    if (naslovInput.value.trim() === "") {
        naslovWarning.style.display = "block";
    } else {
        naslovWarning.style.display = "none";
    }

    // Check if the last name is empty
    if (dijagnozaInput.value.trim() === "") {
        dijagnozaWarning.style.display = "block";
    } else {
        dijagnozaWarning.style.display = "none";
    }
    localStorage.setItem('naslov', naslov);
    localStorage.setItem('dijagnoza', dijagnoza);
}

function drugiKorakNext() {
    const datumTermina = document.getElementById("datumTermina");

    const vrijemeTerminSati = document.getElementById("vrijemeTerminaSati");
    const vrijemeTerminMinute = document.getElementById("vrijemeTerminaMinute");

    const tipPregledaPrvi = document.getElementById("prviPregled");
    const tipPregledaKontrola = document.getElementById("kontrola");

    const hitnostDa = document.getElementById("hitnostDa");
    const hitnostNe = document.getElementById("hitnostNe");

    var datumstanje = false;
    var vrijeme = false;
    var vrijemeMinute = false;
    var tip = false;
    var hitnost = false;


    if (datumTermina.value == null) {
        document.getElementById("datumWarning").style.display = "block";
        datumTermina = false;
    }
    else {
        document.getElementById("datumWarning").style.display = "none";
        datumstanje = true;

    }


    if (vrijemeTerminSati.value.trim() === "" || vrijemeTerminMinute.value.trim() === "") {
        document.getElementById("vrijemeWarning").style.display = "block";
        vrijeme = false;

        console.log("vrijeme nije dobro");
    }
    else {
        document.getElementById("vrijemeWarning").style.display = "none";
        vrijeme = true;

        console.log("vrijeme je dobro");
    }





    if (!tipPregledaPrvi.checked && !tipPregledaKontrola.checked) {
        document.getElementById("tipPregledaWarning").style.display = "block";
    }
    else {
        document.getElementById("tipPregledaWarning").style.display = "none";
        tip = true;

    }
    if (!hitnostDa.checked && !hitnostNe.checked) {
        document.getElementById("hitnostiPregledaWarning").style.display = "block"
    }
    else {
        document.getElementById("hitnostiPregledaWarning").style.display = "none"
        hitnost = true;
    }

    if (datumstanje && vrijeme && tip && hitnost) {
        localStorage.setItem('datumTermina', datumTermina.value);
        localStorage.setItem('vrijemeTerminaMinute', vrijemeTerminMinute.value);
        localStorage.setItem('vrijemeTerminaSati', vrijemeTerminSati.value);
        if (tipPregledaPrvi.checked) {
            localStorage.setItem('tipPregledaPrvi', true);
            localStorage.setItem('tipPregledaKontrola', false);
        }
        else {
            localStorage.setItem('tipPregledaPrvi', false);
            localStorage.setItem('tipPregledaKontrola', true);
        }
        if (hitnostDa.checked) {
            localStorage.setItem('hitnostPregledaDa', true);
            localStorage.setItem('hitnostPregledaNe', false);
        }
        else {
            localStorage.setItem('hitnostPregledaDa', false);
            localStorage.setItem('hitnostPregledaNe', true);
        }
        console.log(vrijemeTerminMinute.value);
        console.log(hitnostDa.checked);
        window.location.href = "RezervacijaTermina3.html";

    }

}





function conzola() {

    console.log(localStorage.getItem("vrijemeTerminaSati"));
    console.log(localStorage.getItem("tipPregledaPrvi"));
    console.log(localStorage.getItem("tipPregledaKontrola"));
    console.log(localStorage.getItem("hitnostPregledaDa"));
    console.log(localStorage.getItem("hitnostPregledaNe"));
    console.log();
}

function resetuj() {
    localStorage.setItem('naslov', "");
    localStorage.setItem('dijagnoza', "");
    localStorage.setItem('datumTermina', "");
    localStorage.setItem('vrijemeTerminaMinute', "");
    localStorage.setItem('vrijemeTerminaSati', "");
    localStorage.setItem('tipPregledaPrvi', "");
    localStorage.setItem('tipPregledaKontrola', "");
    localStorage.setItem('hitnostPregledaDa', "");
    localStorage.setItem('hitnostPregledaNe', "");
    
}
function resetuj2() {
    localStorage.setItem('naslov', "");
    localStorage.setItem('dijagnoza', "");
    localStorage.setItem('datumTermina', "");
    localStorage.setItem('vrijemeTerminaMinute', "");
    localStorage.setItem('vrijemeTerminaSati', "");
    localStorage.setItem('tipPregledaPrvi', "");
    localStorage.setItem('tipPregledaKontrola', "");
    localStorage.setItem('hitnostPregledaDa', "");
    localStorage.setItem('hitnostPregledaNe', "");
    window.alert("Uspješno ste poništili rezervaciju");
    window.location.href="Pocetna.html";
}

var stanjehaha=false;
function potvrdiRezervaciju() {
  console.log("potvrdi rezervaciju");
    if(!stanjehaha){
      infoDetalji2();
      stanjehaha=true;
    }
    else{
      resetuj();
      window.location.href = "Termini.html";
    }
    
}

function posaljiPoruku() {
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    const subjectWarning = document.getElementById("svrhaWarning");
    const messageWarning = document.getElementById("porukaWarning");

    if (subject.value.trim() === "") {
        subjectWarning.style.display = "block";
    }
    else {
        subjectWarning.style.display = "none";
    }

    if (message.value.trim() === "") {
        messageWarning.style.display = "block";
    }
    else {
        messageWarning.style.display = "none";
    }

    if (subject.value.trim() != "" && message.value.trim() != "") {
        alert("Poruka uspjesno poslana");
        subject.value = "";
        message.value = "";
    }
}

document.querySelector("#show-login").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
});

function infoDetalji() {
    document.getElementById("popupInfo").style.display = "block";
    document.getElementById("pregledi").style.opacity = "0.2";
    document.getElementById("header").style.opacity = "0";
    document.getElementById("header").style.display = "none";

    document.getElementById("popupInfo").style.opacity = "1";
}
function infoDetalji2() {
  document.getElementById("popupInfo").style.display = "block";
  document.getElementById("header").style.opacity = "0";
  document.getElementById("header").style.display = "none";

  document.getElementById("popupInfo").style.opacity = "1";
}

function ugasiPopup() {
    document.getElementById("popupInfo").style.display = "none";
    document.getElementById("popupInfo").style.opacity = "0";
    document.getElementById("pregledi").style.opacity = "1";
    document.getElementById("header").style.opacity = "1";
    document.getElementById("header").style.display = "block";
}

function ugasiPopup2() {
  document.getElementById("popupInfo").style.display = "none";
  document.getElementById("popupInfo").style.opacity = "0";
  document.getElementById("header").style.opacity = "1";
  document.getElementById("header").style.display = "block";
}

function ugasiPopupDijagnoza() {
    document.getElementById("dijagnozaInfo").style.display = "none";
    document.getElementById("dijagnozaInfo").style.opacity = "0";
    document.getElementById("pregledi").style.opacity = "1";
    document.getElementById("header").style.opacity = "1";
    document.getElementById("header").style.display = "block";
}

function napisiDijagnozu() {
    document.getElementById("dijagnozaInfo").style.display = "block";
    document.getElementById("pregledi").style.opacity = "0.2";

    document.getElementById("dijagnozaInfo").style.opacity = "1";
    document.getElementById("header").style.opacity = "0";
    document.getElementById("header").style.display = "none";
}

function ponistiDijagnozu(){
  var naslov=document.getElementById("naslovPopup");
    var dijagnoza=document.getElementById("dijagnozaPopup");
    var lijekovi=document.getElementById("lijekoviPopup");

    naslov.value="";
    dijagnoza.value="";
    lijekovi.value="";
}
function potvrdiDijagnozu(){
    var naslov=document.getElementById("naslovPopup");
    var dijagnoza=document.getElementById("dijagnozaPopup");
    var lijekovi=document.getElementById("lijekoviPopup");

    

    if(naslov.value.trim()===""){
        document.getElementById("naslovPopupWarning").style.display="block";
    }
    else{
        document.getElementById("naslovPopupWarning").style.display="none";
    }
    if(dijagnoza.value.trim()===""){
        document.getElementById("dijagnozaPopupWarning").style.display="block";
    }
    else{
        document.getElementById("dijagnozaPopupWarning").style.display="none";
    }
    if(lijekovi.value.trim()===""){
        document.getElementById("lijekoviPopupWarning").style.display="block";
    }
    else{
        document.getElementById("lijekoviPopupWarning").style.display="none";
    }

    if(naslov.value.trim()==="" || dijagnoza.value.trim()==="" || lijekovi.value.trim()==="")
    {

    }
    else{
        ugasiPopupDijagnoza();
        window.alert("Uspjesno dodana dijagnoza");
        document.getElementById("tabelaPregledi").innerHTML=
        `
        <tr id="prviRed">
            <td scope="row"><img src="assets/img/patients/patient1.jpg" alt=""
                style="height: 50px; border-radius: 50%; margin-right: 5px;"> <a href="" style="color: black;">Ime
                prezime</a></td>
            <td class="align-middle">08:00</td>
            <td class="align-middle">Kontrola</td>
            <td class="align-middle">Ne</td>
            <td class="align-middle" ><div id="prviNe">Da</div></td>

            <td id="show-login" class="align-middle">
              <button href="#" class="btn btn-sm bg-info-light" id="btnDetalji" data-toggle="modal"
                data-target="#appt_details" onclick="infoDetalji()">
                <i class="far fa-eye"></i> Detalji
              </button>
              <a href="javascript:void(0);" class="btn btn-sm bg-success-light" id="btnDijagnoza"
                onclick="napisiDijagnozu()">
                <i class="fas fa-check"></i> Dijagnoza
              </a>
            </td>

          </tr>
          <tr>
            <td scope="row"><img src="assets/img/patients/patient2.jpg" alt=""
                style="height: 50px; border-radius: 50%; margin-right: 5px;"> <a href="" style="color: black;">Ime
                prezime</a></td>
            <td class="align-middle">08:15</td>
            <td class="align-middle">Kontrola</td>
            <td class="align-middle">Ne</td>
            <td class="align-middle">Ne</td>

            <td id="show-login" class="align-middle">
              <button href="#" class="btn btn-sm bg-info-light" id="btnDetalji" data-toggle="modal"
                data-target="#appt_details" onclick="infoDetalji()">
                <i class="far fa-eye"></i> Detalji
              </button>
              <a href="javascript:void(0);" class="btn btn-sm bg-success-light" id="btnDijagnoza"
                onclick="napisiDijagnozu()">
                <i class="fas fa-check"></i> Dijagnoza
              </a>
            </td>

          </tr>
          <tr>
            <td scope="row"><img src="assets/img/patients/patient3.jpg" alt=""
                style="height: 50px; border-radius: 50%; margin-right: 5px;"> <a href="" style="color: black;">Ime
                prezime</a></td>
            <td class="align-middle">08:30</td>
            <td class="align-middle">Kontrola</td>
            <td class="align-middle">Ne</td>
            <td class="align-middle">Ne</td>

            <td id="show-login" class="align-middle">
              <button href="#" class="btn btn-sm bg-info-light" id="btnDetalji" data-toggle="modal"
                data-target="#appt_details" onclick="infoDetalji()">
                <i class="far fa-eye"></i> Detalji
              </button>
              <a href="javascript:void(0);" class="btn btn-sm bg-success-light" id="btnDijagnoza"
                onclick="napisiDijagnozu()">
                <i class="fas fa-check"></i> Dijagnoza
              </a>
            </td>

          </tr>
          <tr>
            <td scope="row"><img src="assets/img/patients/patient4.jpg" alt=""
                style="height: 50px; border-radius: 50%; margin-right: 5px;"><a href="" style="color: black;">Ime
                prezime</a></td>
            <td class="align-middle">08:45</td>
            <td class="align-middle">Kontrola</td>
            <td class="align-middle">Ne</td>
            <td class="align-middle">Ne</td>

            <td id="show-login" class="align-middle">
              <button href="#" class="btn btn-sm bg-info-light" id="btnDetalji" data-toggle="modal"
                data-target="#appt_details" onclick="infoDetalji()">
                <i class="far fa-eye"></i> Detalji
              </button>
              <a href="javascript:void(0);" class="btn btn-sm bg-success-light" id="btnDijagnoza"
                onclick="napisiDijagnozu()">
                <i class="fas fa-check"></i> Dijagnoza
              </a>
            </td>

          </tr>
          <tr>
            <td scope="row"><img src="assets/img/patients/patient5.jpg" alt=""
                style="height: 50px; border-radius: 50%; margin-right: 5px;"><a href="" style="color: black;">Ime
                prezime</a></td>
            <td class="align-middle">09:00</td>
            <td class="align-middle">Kontrola</td>
            <td class="align-middle">Ne</td>
            <td class="align-middle">Ne</td>

            <td id="show-login" class="align-middle">
              <button href="#" class="btn btn-sm bg-info-light" id="btnDetalji" data-toggle="modal"
                data-target="#appt_details" onclick="infoDetalji()">
                <i class="far fa-eye"></i> Detalji
              </button>
              <a href="javascript:void(0);" class="btn btn-sm bg-success-light" id="btnDijagnoza"
                onclick="napisiDijagnozu()">
                <i class="fas fa-check"></i> Dijagnoza
              </a>
            </td>

          </tr>
          <tr>
            <td scope="row"><img src="assets/img/patients/patient7.jpg" alt=""
                style="height: 50px; border-radius: 50%; margin-right: 5px;"> <a href="" style="color: black;">Ime
                prezime</a></td>
            <td class="align-middle">09:15</td>
            <td class="align-middle">Kontrola</td>
            <td class="align-middle">Ne</td>
            <td class="align-middle">Ne</td>

            <td id="show-login" class="align-middle">
              <button href="#" class="btn btn-sm bg-info-light" id="btnDetalji" data-toggle="modal"
                data-target="#appt_details" onclick="infoDetalji()">
                <i class="far fa-eye"></i> Detalji
              </button>
              <a href="javascript:void(0);" class="btn btn-sm bg-success-light" id="btnDijagnoza"
                onclick="napisiDijagnozu()">
                <i class="fas fa-check"></i> Dijagnoza
              </a>
            </td>

          </tr>
          <tr>
            <td scope="row"><img src="assets/img/patients/patient1.jpg" alt=""
                style="height: 50px; border-radius: 50%; margin-right: 5px;"><a href="" style="color: black;">Ime
                prezime</a></td>
            <td class="align-middle">09:30</td>
            <td class="align-middle">Kontrola</td>
            <td class="align-middle">Ne</td>
            <td class="align-middle">Ne</td>

            <td id="show-login" class="align-middle">
              <button href="#" class="btn btn-sm bg-info-light" id="btnDetalji" data-toggle="modal"
                data-target="#appt_details" onclick="infoDetalji()">
                <i class="far fa-eye"></i> Detalji
              </button>
              <a href="javascript:void(0);" class="btn btn-sm bg-success-light" id="btnDijagnoza"
                onclick="napisiDijagnozu()">
                <i class="fas fa-check"></i> Dijagnoza
              </a>
            </td>

          </tr>
          <tr>
            <td scope="row"><img src="assets/img/patients/patient2.jpg" alt=""
                style="height: 50px; border-radius: 50%; margin-right: 5px;"> <a href="" style="color: black;">Ime
                prezime</a></td>
            <td class="align-middle">09:45</td>
            <td class="align-middle">Kontrola</td>
            <td class="align-middle">Ne</td>
            <td class="align-middle">Ne</td>

            <td id="show-login" class="align-middle">
              <button href="#" class="btn btn-sm bg-info-light" id="btnDetalji" data-toggle="modal"
                data-target="#appt_details" onclick="infoDetalji()">
                <i class="far fa-eye"></i> Detalji
              </button>
              <a href="javascript:void(0);" class="btn btn-sm bg-success-light" id="btnDijagnoza"
                onclick="napisiDijagnozu()">
                <i class="fas fa-check"></i> Dijagnoza
              </a>
            </td>

          </tr>
          <tr>
            <td scope="row"><img src="assets/img/patients/patient3.jpg" alt=""
                style="height: 50px; border-radius: 50%; margin-right: 5px;"><a href="" style="color: black;">Ime
                prezime</a></td>
            <td class="align-middle">10:00</td>
            <td class="align-middle">Kontrola</td>
            <td class="align-middle">Ne</td>
            <td class="align-middle">Ne</td>

            <td id="show-login" class="align-middle">
              <button href="#" class="btn btn-sm bg-info-light" id="btnDetalji" data-toggle="modal"
                data-target="#appt_details" onclick="infoDetalji()">
                <i class="far fa-eye"></i> Detalji
              </button>
              <a href="javascript:void(0);" class="btn btn-sm bg-success-light" id="btnDijagnoza"
                onclick="napisiDijagnozu()">
                <i class="fas fa-check"></i> Dijagnoza
              </a>
            </td>

          </tr>
        `
    }
   
}

function dodajPacijentaApotekar(){
    console.log("usli smo u funkciju");
    //infoDetalji();
    document.getElementById("nemaPodataka").style.display="none";
    if(document.getElementById("idPacijenta").value=="123456"){
        console.log("usli smo u if");
        //document.getElementById("prviRed").style.opacity=1;
        document.getElementById("imePrezime").style.display="block";
        document.getElementById("tbodyId").innerHTML=`
        <tr id="prviRed" >
            <td scope="row">
            Paracetamol 500mg, 30 tableta, 3x na dan maksimalno <br>
            Acipan 40mg, 30 tableta, 2x na dan poslije jela <br>

            </td>
            <td class="align-middle">Dr. Ime Prezime</td>
            <td class="align-middle">6.12.2023.</td>
            <td class="align-middle">Ne</td>
            <td id="show-login" class="align-middle">
            
              <a href="javascript:void(0);" class="btn btn-sm bg-success-light" id="btnDijagnoza"
                onclick="potvrdiKupovinu()">
                <i class="fas fa-check"></i> Potvrdi kupovinu
              </a>
            </td>

          </tr>
          <tr id="prviRed">
            <td scope="row">
              Controloc 20mg, 1x na dan, pola sata prije doručka <br>
              Medrol 16mg, 1x na dan, pola tablete poslije doručka <br>

            </td>
            <td class="align-middle">Dr. Ime Prezime</td>
            <td class="align-middle">16.8.2023.</td>
            <td class="align-middle">Da</td>
            <td id="show-login" class="align-middle">
            
            
            </td>

          </tr>
        `;
    }
    else{
        document.getElementById("prviRed").style.opacity=0;
        document.getElementById("imePrezime").style.display="none";
    }
    
}

function potvrdiKupovinu(){
  infoDetalji();
    document.getElementById("tbodyId").innerHTML=`
        <tr id="prviRed" >
            <td scope="row">
              Paracetamol 500mg, 30 tableta, 3x na dan maksimalno <br>
              Acipan 40mg, 30 tableta, 2x na dan poslije jela <br>

            </td>
            <td class="align-middle">Dr. Ime Prezime</td>
            <td class="align-middle">6.12.2023.</td>
            <td class="align-middle">Da</td>
            <td id="show-login" class="align-middle">
            
             
            </td>

          </tr>
          <tr id="prviRed">
            <td scope="row">
              Controloc 20mg, 1x na dan, pola sata prije doručka <br>
              Medrol 16mg, 1x na dan, pola tablete poslije doručka <br>

            </td>
            <td class="align-middle">Dr. Ime Prezime</td>
            <td class="align-middle">16.8.2023.</td>
            <td class="align-middle">Da</td>
            <td id="show-login" class="align-middle">
            
            
            </td>

          </tr>
        `;
}

function incrementHeight() {
  var heightInput = document.getElementById('height');
  heightInput.value = (parseFloat(heightInput.value) + 0.1).toFixed(1);
  
}

function decrementHeight() {
  var heightInput = document.getElementById('height');
  heightInput.value = (parseFloat(heightInput.value) - 0.1).toFixed(1);
}

function incrementWeight() {
  var weightInput = document.getElementById('weight');
  weightInput.value = (parseFloat(weightInput.value) + 0.1).toFixed(1);
}

function decrementWeight() {
  var weightInput = document.getElementById('weight');
  weightInput.value = (parseFloat(weightInput.value) - 0.1).toFixed(1);
}

function incrementBMI() {
  var BMI = document.getElementById('BMI');
  BMI.value = (parseFloat(BMI.value) + 0.1).toFixed(1);
}

function decrementBMI() {
  var BMI = document.getElementById('BMI');
  BMI.value = (parseFloat(BMI.value) - 0.1).toFixed(1);
}

function umanjiDatum(){
  var currentDate = new Date(document.getElementById('datumTermina2').value);
  currentDate.setDate(currentDate.getDate() - 1);

  
  document.getElementById('datumTermina2').value = currentDate.toISOString().split('T')[0];
}
function uvecajDatum(){
  var currentDate = new Date(document.getElementById('datumTermina2').value);
  currentDate.setDate(currentDate.getDate() + 1);
  document.getElementById('datumTermina2').value = currentDate.toISOString().split('T')[0];
}

var nizDana = {
  "2024-02-08": {
    height: 180,
    weight: 94.6,
    BMI: 23.4,
    bloodPressure: "120/80"
  },
  "2024-02-09": {
    height: 180,
    weight: 94.5,
    BMI: 23.3,
    bloodPressure: "118/78"
  },
  "2024-02-10": {
    height: 180,
    weight: 94.4,
    BMI: 23.1,
    bloodPressure: "122/82"
  },
  "2024-02-11": {
    height: 180,
    weight: 94.3,
    BMI: 22,
    bloodPressure: "125/85"
  },
  "2024-02-12": {
    height: 180,
    weight: 94.2,
    BMI: 22,
    bloodPressure: "116/76"
  },
  "2024-02-13": {
    height: 180,
    weight: 94.2,
    BMI: 22,
    bloodPressure: "128/88"
  },
  "2024-02-14": {
    height: 179.9,
    weight: 94.3,
    BMI: 22,
    bloodPressure: "124/84"
  }
  // Add more data for different days as needed
};

// Function to update form data based on selected date
function updateFormData() {
  var selectedDate = document.getElementById("datumTermina2").value;
  console.log(selectedDate);
  var selectedData = nizDana[selectedDate];
  console.log(selectedData);
  if (selectedData) {
    document.getElementById("height").value = selectedData.height;
    document.getElementById("weight").value = selectedData.weight;
    document.getElementById("BMI").value = selectedData.BMI;
    document.getElementById("bloodPressure").value = selectedData.bloodPressure;
  } else {
    // If no data is available for the selected date, clear the form fields
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("BMI").value = "";
    document.getElementById("bloodPressure").value = "";
  }
}

// var filterInput = document.getElementById('Filter');
// console.log(filterInput);
//     // Add event listener to filter input
//     filterInput.addEventListener('input', function () {
//         // Get the filter value
//         var filterValue = this.value.toLowerCase();
//         console.log(filterValue);
//         // Get all table rows
//         var rows = document.querySelectorAll('.table tbody tr');

//         // Loop through each row and hide/show based on filter value
//         rows.forEach(function (row) {
//             // Get the content of the second column (Opis)
//             var opis = row.cells[1].textContent.toLowerCase();

//             // Check if the filter value is contained in the opis
//             if (opis.includes(filterValue)) {
//                 row.style.display = ''; // Show the row
//             } else {
//                 row.style.display = 'none'; // Hide the row
//             }
//         });
//     });

// Get the filter input element
var filterInput = document.getElementById('Filter');

// Add event listener to filter input
filterInput.addEventListener('input', function () {
    // Get the filter value
    var filterValue = this.value.toLowerCase();

    // Get all table rows
    var rows = document.querySelectorAll('.table tbody tr');

    // Loop through each row
    rows.forEach(function (row) {
        // Get the content of the second column (Description) by ID
        var description = row.querySelector('td:nth-child(2)').textContent.toLowerCase();

        // Check if the filter value is contained in the description
        if (description.includes(filterValue)) {
            row.style.display = ''; // Show the row
        } else {
            row.style.display = 'none'; // Hide the row
        }
    });
});







































































































































































































































































































































































































































































































// dido




















































































































































































































































































































































































































































































































