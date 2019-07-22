//initialize and add the map
function initMap(){
    //your location (deland, fl)
    const loc = { 
        lat: 29.022030, 
        lng: -81.341700
    };
    //Centered map on location
    const map = new google.maps.Map(
            document.querySelector(".map"),
            {
                zoom: 14,
                center: loc 
            }
    );
    //The Marker, positioned at location
    const marker = new google.maps.Marker(
        {
            position: loc, 
            map: map 
        }
    );
}


//smooth scrolling
$("#navbar a").on("click", function(event){
    //if # has a value, then prevent default function
    if(this.hash !== ""){
        event.preventDefault();

        const hash = this.hash; 

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top-125
            },
            800
        );
    }
});

window.addEventListener("scroll", function(){
    if(this.window.scrollY > 25){
        this.document.querySelector("#navbar")
            .style
            .opacity = 0.9;
    }
    else{
        this.document.querySelector("#navbar")
            .style
            .opacity = 1;
    }
    
});



