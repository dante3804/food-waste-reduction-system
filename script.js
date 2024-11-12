// script.js
document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('map').setView([37.5665, 126.9780], 11); // 예시로 서울에 중심 설정

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // 예시 위치 마커
    const incineratorLocations = [
        { lat: 37.555, lng: 126.970, name: '소각장 A' },
        { lat: 37.565, lng: 126.985, name: '소각장 B' }
    ];

    incineratorLocations.forEach(location => {
        L.marker([location.lat, location.lng]).addTo(map)
            .bindPopup(`<b>${location.name}</b>`);
    });
});


document.getElementById("food-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const foodType = document.getElementById("food-type").value;
    const quantity = document.getElementById("quantity").value;

    if (quantity > threshold) { // 데이터에 기반한 기준값 설정 필요
        document.getElementById("purchase-warning").style.display = "block";
    } else {
        document.getElementById("purchase-warning").style.display = "none";
    }

    // 퇴비화/소각을 위한 입력 데이터 처리 (AI/ML 백엔드와 연결하여 확장 가능)
});