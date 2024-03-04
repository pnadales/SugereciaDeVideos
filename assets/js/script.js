const patronDeModulo = (() => {
    function privada(url, id) {
        id.setAttribute('src', url);

    }
    return {
        publica: (url, id) => privada(url, id)

    }
})();
console.log(patronDeModulo);
class Multimedia {
    constructor(url) {
        this._url = url;

    }
    get url() {
        return this._url;
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    playMultimedia() {
        patronDeModulo.publica(this._url, this.id)
    }
    setInicio(tiempo) {
        this._url += `&amp;start=${tiempo}`;
        console.log(this._url)
    }
}

let musicUrl = 'https://www.youtube.com/embed/LJKC99qj8EQ?si=tA6H9AQHL_HIWfZs';
let musicId = document.getElementById('musica');

let movieUrl = 'https://www.youtube.com/embed/tqdcLzM3ciQ?si=web5e1PTxIkcBVf7';
let movieId = document.getElementById('peliculas');

let seriesUrl = 'https://www.youtube.com/embed/Ohf1ZlVo3dU?si=Eh6NCEyB8_M65iSF';
let seriesId = document.getElementById('series');

let musicReproductor = new Reproductor(musicUrl, musicId);
let movieReproductor = new Reproductor(movieUrl, movieId);
let seriesReproductor = new Reproductor(seriesUrl, seriesId);

musicReproductor.playMultimedia();
movieReproductor.playMultimedia();
seriesReproductor.setInicio('62');
seriesReproductor.playMultimedia();
