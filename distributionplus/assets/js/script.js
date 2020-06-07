// Initialize and add the map
function initMap() {
    // The location of DistributionPLUS
    var DistributionPLUS = {lat: 57.112277, lng: 9.852163};
    // The map, centered at DistributionPLUS
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: DistributionPLUS});
    // The marker, positioned at DistributionPLUS
    var marker = new google.maps.Marker({ position: DistributionPLUS, map: map });
};

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


// Her starter det rigitge popup //

const openPopupButtons = document.querySelectorAll('[data-popup-target]')
const closePopupButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.popupTarget)
        openPopup(popup)
    })
})

closePopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup')
        closePopup(popup)
    })
})

function openPopup(popup) {
    if (popup == null) return
    popup.classList.add('active')
    overlay.classList.add('active')
}

function closePopup(popup) {
    if (popup == null) return
    popup.classList.remove('active')
    overlay.classList.remove('active')
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
        window.alert("Navn* skal udfyldes"); // Hvis feltet er tomt, så popper der en alert op //
        name.focus();
        return false;
    }

    if (company.value == "")
    {
        window.alert("Virksomhed* skal udfyldes");
        company.focus();
        return false;
    }

    if (phonenumber.value == "")
    {
        window.alert("Telefonnummer* skal udfyldes");
        phonenumber.focus();
        return false;
    }
   
    if (email.value == "") // Samme som ovenstående //
    {
        window.alert("Email* skal udfyldes");
        email.focus();
        return false;
    }

    if (description.value == "")
    {
        window.alert("Beskrivelse* skal udfyldes");
        description.focus();
        return false;
    }

    return true; // Hvis felterne med stjerne er udfyldt, så kan man trykke på sendknappen //
}