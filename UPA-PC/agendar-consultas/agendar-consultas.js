
const buttonLocalizacao = document.getElementById("button-localizacao");
const permissaoLocalizacao = document.getElementById("permissao-localizacao");
const buttonPermitir = document.getElementById("button-permitir");
const buttonNegar = document.getElementById("button-negar");

const resultadoLocalizacao = document.getElementById("resultado-localizacao");
const mensagemLocalizacao = document.getElementById("mensagem-localizacao");

const unidades = [
    {
        nome: "UPA Sul",
        endereco: "Rua João da Costa Júnior, Joinville - SC",
        latitude: -26.3400,
        longitude: -48.8300
    },
    {
        nome: "UPA Leste",
        endereco: "Rua José Francisco Vieira, Joinville - SC",
        latitude: -26.2900,
        longitude: -48.8200
    }
];

let unidadeSelecionada = null;

buttonLocalizacao.addEventListener("click", function () {
    permissaoLocalizacao.hidden = false;
    resultadoLocalizacao.hidden = true;
    mensagemLocalizacao.textContent = "";
});

buttonNegar.addEventListener("click", function () {
    permissaoLocalizacao.hidden = true;

    mensagemLocalizacao.textContent =
        "Localização não autorizada. Você pode escolher sua unidade manualmente.";
});

buttonPermitir.addEventListener("click", function () {

    if (!navigator.geolocation) {
        mensagemLocalizacao.textContent =
            "Seu navegador não suporta localização.";

        return;
    }

    mensagemLocalizacao.textContent =
        "Obtendo sua localização...";

    buttonPermitir.disabled = true;

    navigator.geolocation.getCurrentPosition(

        function (posicao) {

            const latitudeUsuario = posicao.coords.latitude;
            const longitudeUsuario = posicao.coords.longitude;

            let unidadeMaisProxima = null;
            let menorDistancia = Infinity;

            unidades.forEach(function (unidade) {

                const distancia = calcularDistancia(
                    latitudeUsuario,
                    longitudeUsuario,
                    unidade.latitude,
                    unidade.longitude
                );

                if (distancia < menorDistancia) {
                    menorDistancia = distancia;
                    unidadeMaisProxima = unidade;
                }

            });

            unidadeSelecionada = unidadeMaisProxima;

            document.getElementById("nome-upa-proxima").textContent =
                unidadeMaisProxima.nome;

            document.getElementById("endereco-upa-proxima").textContent =
                unidadeMaisProxima.endereco;

            document.getElementById("distancia-upa").textContent =
                "Distância em linha reta: " + menorDistancia.toFixed(2) + " km";

            permissaoLocalizacao.hidden = true;
            resultadoLocalizacao.hidden = false;

            mensagemLocalizacao.textContent =
                "Unidade mais próxima identificada!";

            buttonPermitir.disabled = false;

        },

        function (erro) {

            buttonPermitir.disabled = false;

            if (erro.code === 1) {
                mensagemLocalizacao.textContent =
                    "Você não autorizou o acesso à localização.";
            } else if (erro.code === 2) {
                mensagemLocalizacao.textContent =
                    "Não foi possível identificar sua localização.";
            } else {
                mensagemLocalizacao.textContent =
                    "O tempo para obter sua localização terminou. Tente novamente.";
            }

        },

        {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0
        }

    );

});

function calcularDistancia(lat1, lon1, lat2, lon2) {

    const raioTerra = 6371;

    const diferencaLat = (lat2 - lat1) * Math.PI / 180;
    const diferencaLon = (lon2 - lon1) * Math.PI / 180;

    const a =
        Math.sin(diferencaLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(diferencaLon / 2) ** 2;

    const c = 2 * Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
    );

    return raioTerra * c;

}

document.getElementById("button-abrir-rota")
.addEventListener("click", function () {

    if (!unidadeSelecionada) return;

    const destino = encodeURIComponent(
        unidadeSelecionada.endereco
    );

    window.open(
        "https://www.google.com/maps/dir/?api=1&destination=" + destino,
        "_blank"
    );

});

document.getElementById("button-escolher-upa")
.addEventListener("click", function () {

    if (!unidadeSelecionada) return;

    alert("Unidade selecionada: " + unidadeSelecionada.nome);

});
