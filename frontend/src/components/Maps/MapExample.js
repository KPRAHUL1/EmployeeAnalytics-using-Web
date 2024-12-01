import React from "react";

function MapExample() {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;

    // Updated location coordinates (change to your company's office location)
    let lat = "37.774929"; // Example: San Francisco latitude
    let lng = "-122.419418"; // Example: San Francisco longitude

    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 14, // Adjust zoom for a more zoomed-in view of the office
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [{ color: "#333" }],
        },
        {
          featureType: "administrative",
          elementType: "all",
          stylers: [{ color: "#757575" }],
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [{ saturation: -100 }, { lightness: 40 }],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [{ color: "#4A90E2" }, { visibility: "on" }],
        },
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    // Updated marker with a company-specific title
    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Company HQ", // Updated title for the marker
    });

    // Updated content for the info window
    const contentString =
      '<div class="info-window-content"><h2>Company Name</h2>' +
      "<p>Your trusted partner in providing top-notch services and solutions for businesses worldwide. Visit us to learn more.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  });

  return (
    <>
      <div className="relative w-full rounded h-600-px">
        <div className="rounded h-full" ref={mapRef} />
      </div>
    </>
  );
}

export default MapExample;
