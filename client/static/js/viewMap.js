export default function ViewKakaoMap() {
  let addrName, lat, lng;

  let mapContainer = document.querySelector('#map'), 
    mapOption = {
      center: new kakao.maps.LatLng(37.5642135, 127.0016985),
      level: 3
  }; 

  let map = new kakao.maps.Map(mapContainer, mapOption); 
  let geocoder = new kakao.maps.services.Geocoder();
  
  let placeAddr = document.querySelector('#placeAddr');

  placeAddr.addEventListener("change", (e) => {

    addrName = placeAddr.value;

    geocoder.addressSearch(addrName, function(result, status) {
      if (status === kakao.maps.services.Status.OK) {

        lat = result[0].y;
        lng = result[0].x;
  
        let coords = new kakao.maps.LatLng(lat, lng);
        let marker = new kakao.maps.Marker({
            map: map,
            position: coords
        });
          
        let infowindow = new kakao.maps.InfoWindow({
          content: '<div style="width:150px;text-align:center;padding:6px 0;">플레이스의 위치를 확인해주세요</div>'
        });
          
        infowindow.open(map, marker);
        map.setCenter(coords);

      } 
    });
  });

}


  