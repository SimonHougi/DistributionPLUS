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