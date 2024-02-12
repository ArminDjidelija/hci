function infoDetaljiHelp1() {
    document.getElementById("popupInfo1").style.display = "block";
    // document.getElementById("pregledi").style.opacity = "0.2";
    // document.getElementById("header").style.opacity = "0";
    // document.getElementById("header").style.display = "none";

    document.getElementById("popupInfo1").style.opacity = "1";
}
function infoDetaljiHelp2() {
    document.getElementById("popupInfo2").style.display = "block";
    // document.getElementById("pregledi").style.opacity = "0.2";
    // document.getElementById("header").style.opacity = "0";
    // document.getElementById("header").style.display = "none";

    document.getElementById("popupInfo2").style.opacity = "1";
}
function ugasiPopup1() {
    document.getElementById("popupInfo1").style.display = "none";
    document.getElementById("popupInfo1").style.opacity = "0";
    // document.getElementById("pregledi").style.opacity = "1";
    // document.getElementById("header").style.opacity = "1";
    // document.getElementById("header").style.display = "block";
}
function ugasiPopup2() {
    document.getElementById("popupInfo2").style.display = "none";
    document.getElementById("popupInfo2").style.opacity = "0";
    // document.getElementById("pregledi").style.opacity = "1";
    // document.getElementById("header").style.opacity = "1";
    // document.getElementById("header").style.display = "block";
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === "") {
        document.getElementById("emailWarning1").style.display = "block";
        document.getElementById("emailWarning2").style.display = "none";
        //document.getElementById("emailWarning").value="Niste unijeli email"
        document.getElementById("email").style.border = "3px solid red";
    }
    else if (email != "pacijent@ebolnica.ba" && email != "doktor@ebolnica.ba" && email != "apotekar@ebolnica.ba") {
        document.getElementById("emailWarning1").style.display = "none";

        document.getElementById("emailWarning2").style.display = "block";
        document.getElementById("emailWarning").value = "Pogrešan email"
    }
    else {
        document.getElementById("emailWarning1").style.display = "none";
        document.getElementById("email").style.border = "1px solid black";

        document.getElementById("emailWarning2").style.display = "none";
    }

    console.log("presjek");
    if (password === "") {
        document.getElementById("passwordWarning1").style.display = "block";
        document.getElementById("passwordWarning2").style.display = "none";
        //document.getElementById("emailWarning").value="Niste unijeli email"
        document.getElementById("password").style.border = "3px solid red";
    }
    else if (password != "pass") {
        document.getElementById("passwordWarning1").style.display = "none";

        document.getElementById("passwordWarning2").style.display = "block";
        document.getElementById("passwordWarning1").value = "Pogrešan email"
    }
    else {
        document.getElementById("passwordWarning1").style.display = "none";
        document.getElementById("password").style.border = "1px solid black";

        document.getElementById("passwordWarning2").style.display = "none";

        if(email==="pacijent@ebolnica.ba"){
            window.location.href = "PocetnaPacijent.html";
        }
        else if(email==="doktor@ebolnica.ba"){
            window.location.href = "PocetnaDoktor.html";
        }
        else if(email==="apotekar@ebolnica.ba"){
            window.location.href = "PocetnaApotekar.html";
        }
        else{
            window.location.href="Pocetna.html";
        }
    }
}

function dodajPacijentaApotekar() {
    console.log("usli smo u funkciju");
    //infoDetalji();
    if (document.getElementById("idPacijenta").value == "123456") {
        document.getElementById("nemaPodataka").style.display = "none";

        console.log("usli smo u if");
        //document.getElementById("prviRed").style.opacity=1;
        document.getElementById("imePrezime").style.display = "block";
        document.getElementById("tbodyId").innerHTML = `
        <tr id="prviRed" >
            <td scope="row">
            Paracetamol 500mg, 30 tableta, 3x na dan maksimalno <br>
            Acipan 40mg, 30 tableta, 2x na dan poslije jela <br>

            </td>
            <td class="align-middle">Dr. Adnan Humačkić</td>
            <td class="align-middle">12.02.2024.</td>
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
            <td class="align-middle">Dr. Adnan Humačkić</td>
            <td class="align-middle">16.8.2023.</td>
            <td class="align-middle">Da</td>
            <td id="show-login" class="align-middle">
            
            
            </td>

          </tr>
        `;
    }
    else {
        document.getElementById("prviRed").style.opacity = 0;
        document.getElementById("imePrezime").style.display = "none";
    }

}

function potvrdiKupovinu() {
    infoDetalji();
    document.getElementById("tbodyId").innerHTML = `
        <tr id="prviRed" >
            <td scope="row">
              Paracetamol 500mg, 30 tableta, 3x na dan maksimalno <br>
              Acipan 40mg, 30 tableta, 2x na dan poslije jela <br>

            </td>
            <td class="align-middle">Dr. Adnan Humačkić</td>
            <td class="align-middle">12.02.2024.</td>
            <td class="align-middle">Ne</td>
            <td id="show-login" class="align-middle">
            
             
            </td>

          </tr>
          <tr id="prviRed">
            <td scope="row">
              Controloc 20mg, 1x na dan, pola sata prije doručka <br>
              Medrol 16mg, 1x na dan, pola tablete poslije doručka <br>

            </td>
            <td class="align-middle">Dr. Adnan Humačkić</td>
            <td class="align-middle">16.8.2023.</td>
            <td class="align-middle">Da</td>
            <td id="show-login" class="align-middle">
            
            
            </td>

          </tr>
        `;
}

function ugasiPopup() {
    document.getElementById("popupInfo").style.display = "none";
    document.getElementById("popupInfo").style.opacity = "0";
    document.getElementById("pregledi").style.opacity = "1";
    document.getElementById("header").style.opacity = "1";
    document.getElementById("header").style.display = "block";
}

function resetujPrviKorak() {
    localStorage.setItem('naslov', "");
    localStorage.setItem('dijagnoza', "");
    document.getElementById("naslov").value="";
    document.getElementById("dijagnoza").value="";


    window.alert("Uspješno ste poništili naslov i opis");
    //window.location.href = "Pocetna.html";

}

function resetujDrugiKorak() {
    document.getElementById("datumTermina").value="";
    document.getElementById("vrijemeTerminaMinute").value="";
    document.getElementById("vrijemeTerminaSati").value="";
    document.getElementById('prviPregled').checked=false;
    document.getElementById('kontrola').checked=false;
    document.getElementById('hitnostDa').checked=false;
    document.getElementById('hitnostNe').checked=false;

    localStorage.setItem('datumTermina', "");
    localStorage.setItem('vrijemeTerminaMinute', "");
    localStorage.setItem('vrijemeTerminaSati', "");
    localStorage.setItem('tipPregledaPrvi', "");
    localStorage.setItem('tipPregledaKontrola', "");
    localStorage.setItem('hitnostPregledaDa', "");
    localStorage.setItem('hitnostPregledaNe', "");


    window.alert("Uspješno ste datum i detalje");
    //window.location.href = "Pocetna.html";

}

function resetujRezervaciju(){
    upaliPrompt();
}

function upaliPrompt(){
    document.getElementById("popupInfo3").style.display = "block";
    // document.getElementById("header").style.opacity = "0";
    // document.getElementById("header").style.display = "none";
  
    document.getElementById("popupInfo3").style.opacity = "1";}
function ugasiPopup3(){
    document.getElementById("popupInfo3").style.display="none";
}

