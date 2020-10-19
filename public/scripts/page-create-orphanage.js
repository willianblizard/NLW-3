//cria o mapa
const map = L.map('mapid').setView([-27.2195425,-49.6494892], 15.17);
//cria o tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
//cria o icone
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});

let marker;
//create and add marker
map.on("click",(event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    //remove marker
    marker && map.removeLayer(marker);
    // add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map);
})

// adicionar campo de fotos
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se o cmapo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }
    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if(fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = ""
        return
    }
    span.parentNode.remove();
}

//select yes or no
function toggleSelect(event) {
    //pegar o botão clicados
    //verificar se é sim ou não
    //retirar a classe .active (dos botões)
    document.querySelectorAll('.button-select button').forEach((button) => {button.classList.remove('active')})
    //colocar a classe .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')
    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_wekends"]')
    input.value = button.dataset.value
}

function validate(event) {
    //validar se lat e lng estão preenchidos
    //desafio
    //if(lat !="", lng!="") {
    //alert('foi')
    //}else{
    //event.preventDefault()
    //alert('selecione um ponto no mapa')
    //}
    const needsLatAndLng = false;
    if(needsLatAndLng) {
        event.preventDefault()
        alert('selecione um ponto no mapa')
    }
}