// Api Meteo 
let api_key = 'f781d969fc0abdae456c5f7227c3772f'

function changerVille(ville) {

    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
    let url = baseUrl + "&q=" + ville + "&appid=" + api_key;
    
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                document.getElementById('ville').textContent = reponse.name;
                document.getElementById('temperature_label').textContent = reponse.main.temp;
            }
        }
    }
}

changerVille("Paris");

let btn = document.querySelector("#changer");

btn.addEventListener("click", () => {
   let ville = prompt("Quel est la ville choisie ?");
   changerVille(ville);
})

