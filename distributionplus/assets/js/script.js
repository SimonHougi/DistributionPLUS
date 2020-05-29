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

// Dette er javascript for pop up vindue //

const overlay1 = "overlay1"
const overlay2 = "overlay2"
const overlay3 = "overlay3"

function on(overlay) {
  document.getElementById(overlay).style.display = "block";
}

function off(overlay) {
  document.getElementById(overlay).style.display = "none";
}