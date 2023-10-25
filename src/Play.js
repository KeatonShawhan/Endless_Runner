class Play extends Phaser.Scene {
  constructor() {
      super('playScene')
  }

  preload() {
      this.load.spritesheet('character', './assets/spritesheets/spritesheet.png', {
          frameWidth: 100
      })
  }

  create() {
      this.cameras.main.setBackgroundColor(0xDDDDDD);

      this.player = this.physics.add.sprite(width/2, height/2, 'character', 1).setScale(2);
      this.player.body.setGravityY(1000);

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
  }

  update() {
    const ACCELERATION = 1000; // Adjust this to your liking for the desired acceleration speed

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
        // The jump force can be adjusted as needed
        this.player.setVelocityY(-900);
    }

    if (!this.player.body.touching.down) {
        this.player.play("jump", true);
    }

  }

}