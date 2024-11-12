// 4번: 지도 통합 (Leaflet.js를 사용하여 지도에 위치 표시)
document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('map').setView([37.5665, 126.9780], 11); // 서울에 중심 설정

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

// 5번: 양식 처리 및 경고 표시
document.getElementById("food-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const foodType = document.getElementById("food-type").value;
    const quantity = parseFloat(document.getElementById("quantity").value);
    const threshold = 10; // 예시 기준값, 필요에 따라 변경

    if (quantity > threshold) {
        document.getElementById("purchase-warning").style.display = "block";
    } else {
        document.getElementById("purchase-warning").style.display = "none";
    }

    // 퇴비화/소각을 위한 입력 데이터 처리 (AI/ML 백엔드와 연결하여 확장 가능)
});
