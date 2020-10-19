const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
// get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng
//cria o mapa
const map = L.map('mapid', options).setView([lat, lng], 15.17);
//cria o tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
//cria o icone
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});
//cria o marker
L.marker([lat, lng], {icon}).addTo(map);

//image galery

function selectImage(event) {
    const button = event.currentTarget
    // remover classes .active
const buttons = document.querySelectorAll(".images button")
buttons.forEach((button) => {button.classList.remove("active")})
    // selecionar a imagem clicada
const image = button.children[0]
const imageContainer = document.querySelector(".orphanage-details > img")
    //atualizar o container de imagem
imageContainer.src = image.src
    //adicionar a classe .active para o botao selecionado
    button.classList.add("active")
}