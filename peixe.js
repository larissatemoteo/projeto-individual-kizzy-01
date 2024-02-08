var config={
    type: Phaser.AUTO,
    width:800,
    height:600,

    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};
var game= new Phaser.Game(config);
var tart

function preload(){
    this.load.image('fundo', 'assets/mar2.png');
    this.load.image('tartaruga', 'assets/tartaruga.png');
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('baiacu', 'assets/baiacu.png');
    this.load.image('concha', 'assets/concha.png');
    this.load.image('peixinho', 'assets/peixinho_azul.png');
};
function create (){
    this.add.image(400,200,'fundo');
    this.add.image(250,500,'concha');
    this.add.image(120,420,'baiacu');
    this.add.image(750,400,'peixinho');
    this.add.image(400,75,'logo').setScale(0.5);
    tart = this.add.image(400,300,'tartaruga'). setOrigin(0.5,0.5). setFlip(true, false);

    tart.setFlip(true, false);

}
function update (){
    tart.x = this.input.x;
    tart.y = this.input.y;
}