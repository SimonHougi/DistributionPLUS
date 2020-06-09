// Initialize and add the map
function initMap() {
    // Lokationen af DistributionPLUS
    var DistributionPLUS = {lat: 57.112277, lng: 9.852163};
    // Kortet centreret ved DistributionPLUS
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: DistributionPLUS});
    // Markøren placeret ved DistributionPLUS
    var marker = new google.maps.Marker({ position: DistributionPLUS, map: map });
};

// Video preview i loesninger //

let videoContainerList = document.querySelectorAll(".video-container"); // Her findes alle div'er med classen .video-container //

videoContainerList.forEach(videoContainer => {
    videoContainer.addEventListener("mouseover", function () { // Dette afsnit gør, at når classen er blevet fundet, og der laves en mouseover på div'en, så afspilles videoen //
        this.querySelectorAll("video").forEach(video => {
            video.play()
        })
    })
    
    videoContainer.addEventListener("mouseout", function () { // Ligeledes stoppes videoen, når musen flyttes væk fra div'en igen //
        this.querySelectorAll("video").forEach(video => {
            video.pause()
        })
    })
})


// Her starter det rigitge popup //
const openPopupButtons = document.querySelectorAll('[data-popup-target]')
const closePopupButtons = document.querySelectorAll('[data-close-button]')

openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.popupTarget) // Dette script her er lavet for at åbne et popup vindue //
        openPopup(popup)
    })
})

closePopupButtons.forEach(button => {
    button.addEventListener('click', () => { // Scriptet her lukker popup vinduet //
        const popup = button.closest('.popup')
        closePopup(popup)
    })
})

// Script for at dropdownmenuen åbner popupmenuen på de respektive sider //

function openPopup(popup) {
    if (popup == null) return
    popup.classList.add('active');
    window.location.hash = popup.id;
}
function openPopupByHash(hash) {
    var popup = null;

    if (hash) {
        window.location.hash = hash;
    }

    let popupSelector = window.location.hash.substr(1); // Her findes Hashtagget og deler det, således at hashtagget og navnet står hver for sig, dette er gjort for at scriptet kan åbne de rigtige sider //
    popup = document.getElementById(popupSelector);

    if (popup) {
        openPopup(popup);
    }
}

function openPopupFromMenu(e) { // Dette stykke gør, at siden ikke reloades, hvis den tilgås fra samme side, som den står på, men derimod bare åbner popupvinduet //
    e.preventDefault();
    openPopupByHash(e.target.hash);
}

function closePopup(popup) {
    if (popup == null) return;
    popup.classList.remove('active');
    window.location.hash = '';
}

if (window.location.hash && window.location.hash.startsWith('#popup')) { // Hvis begge udfald er rigtige, at der er en lokation med hashtag, og hashtagget starter med #popup, så åbnes popupvinduet //
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

    if (company.value == "")
    {
        window.alert("Virksomhed* skal udfyldes"); // Hvis feltet er tomt, så popper der en alert op //
        company.focus();
        return false;
    }

    if (phonenumber.value == "")
    {
        window.alert("Telefonnummer* skal udfyldes"); // Hvis feltet er tomt, så popper der en alert op //
        phonenumber.focus();
        return false;
    }
   
    if (email.value == "") 
    {
        window.alert("E-mail* skal udfyldes"); // Hvis feltet er tomt, så popper der en alert op //
        email.focus();
        return false;
    }

    if (description.value == "")
    {
        window.alert("Beskrivelse* skal udfyldes"); // Hvis feltet er tomt, så popper der en alert op //
        description.focus();
        return false;
    }

    return true; // Hvis felterne med stjerne er udfyldt, så kan man trykke på sendknappen //
}


// Script til burgermenu - hentet inspiration og hjælp fra workshop med DAHG //

function toggleClass(selector, className){
    document.querySelector(selector).classList.toggle(className); // Dette script er en togglefunction, således nogle classer bliver aktive/inaktive //
}