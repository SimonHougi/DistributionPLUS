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