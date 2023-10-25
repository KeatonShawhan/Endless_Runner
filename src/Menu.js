class Menu extends Phaser.Scene{
  constructor() {
    super("menuScene");
  }

  preload(){
    this.load.image('title_img', './assets/title_sprite.png');
    this.load.image('play_button', './assets/play_sprite.png');
    this.load.image('menu_border', './assets/menu_border.png');
    this.load.image('menu_character', './assets/sprite_stop_0.png');
  }

  create(){
    this.player = this.physics.add.sprite(width/2, height/2, 'menu_character').setScale(2);
    this.player.y = 505;
    this.player.x = 1000;

    this.centerX=game.config.width/2;
    this.centerY=game.config.height/2;
    this.cameras.main.setBackgroundColor(0xFFFFFF);

    this.menu_border = this.add.sprite(0, 0, "menu_border");
    this.menu_border.y = this.centerY;
    this.menu_border.x = this.centerX;

    this.play_button = this.physics.add.sprite(0, 0, "play_button");
    this.play_button.body.setSize(200, 70).setOffset(0, 40);


    this.play_button.y = this.centerY+100;
    this.play_button.x = this.centerX;
    this.play_button.setInteractive();
    this.input.on('gameobjectdown', this.playButtonClicked.bind(this));

    this.title_img = this.add.sprite(0, 0, "title_img");
    this.title_img.y = this.centerY-100;
    this.title_img.x = this.centerX;
  }

  update() {
    this.player.x -= 5;
    if (this.player.x < -100){
      this.player.x = 1000;
    }
  }

  playButtonClicked(pointer, gameObject){
    if (gameObject === this.play_button) {
        this.scene.start("playScene");
    }
  }

}