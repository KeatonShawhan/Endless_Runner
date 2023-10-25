class Play extends Phaser.Scene {
  constructor() {
      super('playScene')
  }

  preload() {
      this.load.spritesheet('character', './assets/spritesheets/spritesheet.png', {
          frameWidth: 100
      })
      this.load.image('platform', './assets/platform_sprite.png');
  }

  create() {
      this.cameras.main.setBackgroundColor(0xDDDDDD);

      cursors = this.input.keyboard.createCursorKeys();

      this.anims.create({
          key: 'idle',
          frameRate: 0,
          repeat: -1,
          frames: this.anims.generateFrameNumbers('character', {
              start: 0,
              end: 0
          })
      })
      this.anims.create({
          key: 'walk-left',
          frameRate: 5,
          repeat: -1,
          frames: this.anims.generateFrameNumbers('character', {
              start: 3,
              end: 4
          })
      })
      this.anims.create({
          key: 'walk-right',
          frameRate: 5,
          repeat: -1,
          frames: this.anims.generateFrameNumbers('character', {
              start: 1,
              end: 2
          })
      })
      this.anims.create({
          key: 'jump',
          frameRate: 5,
          repeat: -1,
          frames: this.anims.generateFrameNumbers('character', {
              start: 5,
              end: 6
          })
      })
      width = game.config.width;
      height = game.config.height;
      this.player = this.physics.add.sprite(width/2, height/2, 'character', 1).setScale(1);
      this.player.body.setGravityY(2000);

      this.player.body.setCollideWorldBounds(true);
      this.player.body.setSize(30, 73).setOffset(37, 20);
      this.PLAYER_VELOCITY = 350;
      this.player.setDragX(1000); // Adjust this value to your liking for the desired amount of drag/friction
      
      this.floor = this.physics.add.staticGroup();

      // Create a black rectangle
      let floorRect = this.add.rectangle(width/2, height - 25, width, 50, 0x000000).setOrigin(0.5, 0.5);

      // Add the rectangle to the static physics group so it acts as a solid object
      this.floor.add(floorRect);
      this.physics.add.collider(this.player, this.floor);

      // initialize score
      this.playerScore = 0;
      this.scoreBoard = this.physics.add.staticGroup();

      // Create a black rectangle
      let scoreRect = this.add.rectangle(width/2, 25, width, 50, 0x000000).setOrigin(0.5, 0.5);

      // Add the rectangle to the static physics group so it acts as a solid object
      this.scoreBoard.add(scoreRect);
      this.physics.add.collider(this.player, this.scoreBoard);

      // Platforms group
      this.platforms = this.physics.add.group();

      this.platform1 = new Platform(this, width, 0, 1, 2);
      this.platform1.randomHeight();
      this.platforms.add(this.platform1);

      this.platform2 = new Platform(this, width+500, 0, 1, 2);
      this.platform2.randomHeight();
      this.platforms.add(this.platform2);

      this.platform3 = new Platform(this, width+1000, 0, 1, 2);
      this.platform3.randomHeight();
      this.platforms.add(this.platform3);

      this.physics.add.collider(this.player, this.platforms, this.onPlatformCollided, null, this);
      
      // Detect when the player jumps on a platform
  }

  update() {
    const ACCELERATION = 1500;

    if (cursors.left.isDown) {
        this.player.setAccelerationX(-ACCELERATION);
        this.player.play("walk-left", true);
    } 
    else if (cursors.right.isDown) {
        this.player.setAccelerationX(ACCELERATION);
        this.player.play("walk-right", true);
    } 
    else {
        // When no left/right arrow key is pressed, stop accelerating the player
        this.player.setAccelerationX(0);
        this.player.play("idle", true);
    }

    // Jumping
    if (cursors.up.isDown && this.player.body.touching.down) {
        this.player.setVelocityY(-1300);
    }

    if (!this.player.body.touching.down) {
        this.player.play("jump", true);
    }
    this.platform1.update();
    this.platform2.update();
    this.platform3.update();

  }
  onPlatformCollided(player, platform) {
    if (player.body.touching.down) {
        this.cameras.main.setBackgroundColor(platform.color); 
    }
}

}