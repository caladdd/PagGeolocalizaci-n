function initMap(){
    //options
    var options = {
        zoom:8,
        center: new google.maps.LatLng(6.27053,-75.57211999999998)
    }
    //new map
    var map = new 
    google.maps.Map(document.getElementById('map'), options);
}

function addMaker(props){
    var marker = new google.maps.Maker({
        position:props.coords,
        map:map,
    })
}





























