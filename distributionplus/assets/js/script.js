// Video preview i loesninger //

let videoContainerList = document.querySelectorAll(".video-container");

videoContainerList.forEach(videoContainer => {
    videoContainer.addEventListener("mouseover", function () {
        this.querySelectorAll("video").forEach(video => {
            video.play()
        })
    })

    videoContainer.addEventListener("mouseout", function () {
        this.querySelectorAll("video").forEach(video => {
            video.pause()
        })
    })
})

// Script for at dropdownmenuen åbner popupmenuen på de respektive sider //

function openPopup(popup) {
    if (popup == null) return
    popup.classList.add('active');
    window.location.hash = popup.id;
}
function openPopupByHash(hash) {
    let popup = null;

    if (hash) {
        window.location.hash = hash;
    }

    let popupSelector = window.location.hash.substr(1);
    popup = document.getElementById(popupSelector);

    if (popup) {
        openPopup(popup);
    }
}

function openPopupFromMenu(e) {
    e.preventDefault();
    openPopupByHash(e.target.hash);
}

function closePopup(popup) {
    if (popup == null) return;
    popup.classList.remove('active');
    window.location.hash = '';
}

if (window.location.hash && window.location.hash.startsWith('#popup')) {
    openPopupByHash();
}



// Script til udfyldning af formular //

function validate() // Funktion der tjekker, om vigtige oplysninger er indtastet //
{
    let name = document.forms["info"]["Navn"]; // Variabler oprettet for hver af inputfelterne //
    let company = document.forms["info"]["Virksomhed"];
    let phonenumber = document.forms["info"]["Telefonnummer"];
    let email = document.forms["info"]["Email"];
    let description = document.forms["info"]["Beskrivelse"];

    if (name.value == "") // Hvis feltet er tomt //
    {
        window.alert("Fulde navn* skal udfyldes"); // Hvis feltet er tomt, så popper der en alert op //
        name.focus();
        return false;
    }

    if (company.value == "") {
        window.alert("Virksomhed* skal udfyldes"); // Hvis feltet er tomt, så popper der en alert op //
        company.focus();
        return false;
    }

    if (phonenumber.value == "") {
        window.alert("Telefonnummer* skal udfyldes"); // Hvis feltet er tomt, så popper der en alert op //
        phonenumber.focus();
        return false;
    }

    if (email.value == "") {
        window.alert("E-mail* skal udfyldes"); // Hvis feltet er tomt, så popper der en alert op //
        email.focus();
        return false;
    }

    if (description.value == "") {
        window.alert("Beskrivelse* skal udfyldes"); // Hvis feltet er tomt, så popper der en alert op //
        description.focus();
        return false;
    }

    return true; // Hvis felterne med stjerne er udfyldt, så kan man trykke på sendknappen //
}


// Script til udfyldning af afmelding på ATE //

function validateAte() // Funktion der tjekker, om vigtige oplysninger er indtastet //
{
     // Variabler oprettet for hver af inputfelterne //
    let company = document.forms["info"]["Virksomhed"];
    let adress = document.forms["info"]["Adresse"];
    let city = document.forms["info"]["By"];
    let email = document.forms["info"]["Email"];


    if (company.value == "") {
        window.alert("Virksomhed* skal udfyldes"); // Hvis feltet er tomt, så popper der en alert op //
        company.focus();
        return false;
    }

    if (adress.value == "") {
        window.alert("Adresse* skal udfyldes"); // Hvis feltet er tomt, så popper der en alert op //
        adress.focus();
        return false;
    }

    if (city.value == "") {
        window.alert("Postnr. og by* skal udfyldes"); // Hvis feltet er tomt, så popper der en alert op //
        city.focus();
        return false;
    }

    if (email.value == "") {
        window.alert("E-mail* skal udfyldes"); // Hvis feltet er tomt, så popper der en alert op //
        email.focus();
        return false;
    }


    return true; // Hvis felterne med stjerne er udfyldt, så kan man trykke på sendknappen //
}


// Script til burgermenu - hentet inspiration og hjælp fra workshop med DAHG //

function toggleClass(selector, className) {
    document.querySelector(selector).classList.toggle(className); // Dette script er en togglefunction, således nogle classer bliver aktive/inaktive //
}

function handleOverlay(showOverlay) {

    // Find body //
    var body = document.body;
    if (showOverlay) {
        body.classList.add('showmenu');
    } else {
        body.classList.remove('showmenu');

        // samme bare remove show menu //
    }
}


// Script til filtersystem på case.html starts here //

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}