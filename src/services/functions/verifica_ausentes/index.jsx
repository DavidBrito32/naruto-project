import akahoshi from './assets/akakoshi.webp';
import zaku from './assets/zaku abumi.webp';
import shikuro from './assets/shikuro_aburame.webp';
export const vfp = (image) => {
    switch(image){
        case image.includes("https://static.wikia.nocookie.net/naruto/images/a/a3/Akahoshi_newshot.png"):
            return akahoshi
        case image.includes("https://static.wikia.nocookie.net/naruto/images/4/40/Zaku_Abumi.png"):
            return zaku        
        default:
            return image
    }
} 