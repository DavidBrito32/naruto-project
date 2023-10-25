/* eslint-disable no-useless-escape */
import folha from './assets/konoha.svg';
import areia from './assets/areia.png';
import pedra from './assets/pedra.png';
import nuvem from './assets/nuvem.svg';
import cachoeira from './assets/cachoeira.png';
import som from './assets/som.png';
import nevoa from './assets/nevoa.png';
import kara from './assets/kara.webp';
import lua from './assets/lua.png';
import yugakure from './assets/yugakure.png';


export const aldeiaIMG = (aldeia) => {
    switch(aldeia.toLowerCase()){
        case "konohagakure":
            return folha;
        case "sunagakure":
            return areia;
        case "iwagakure":
            return pedra;
        case "monte myōboku":
            return folha
        case "kumogakure":
            return nuvem;
        case "cachoeira":
            return cachoeira;
        case "otogakure":
            return som;
        case "kirigakure":
            return nevoa;
        case "takigakure":
            return cachoeira;
        case "kara":
            return kara;
        case "tsukigakure":
            return lua;
        case "yugakure":
            return yugakure;
        default:
            return folha;
    }    
}