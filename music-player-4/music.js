class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title;
    }
}


const musicList = [
    new Music("Kusursuz", "Çakal","1.png","1.mp3"),    
    new Music("Fregoli", "ati242","2.png","2.mp3"),    
    new Music("Arabaya bin", "organize","3.png","3.mp3"),  
    new Music("Nerdeysen", "era7capone","4.png","4.mp3"), 
    new Music("Şarkılar sokaklara ait", "uzi","5.png","5.mp3"),
    new Music("Sprinter", "lvbelc5","6.png","6.mp3")   
];
