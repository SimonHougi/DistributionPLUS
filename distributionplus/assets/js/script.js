// Initialize and add the map
function initMap() {
    // The location of DistributionPLUS
    var DistributionPLUS = {lat: 57.112277, lng: 9.852163};
    // The map, centered at DistributionPLUS
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: DistributionPLUS});
    // The marker, positioned at DistributionPLUS
    var marker = new google.maps.Marker({position: DistributionPLUS, map: map});
  }