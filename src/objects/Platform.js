class Platform extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, pointValue, moveSpeed) {
      super(scene, x, y, 'platform');
      
      scene.add.existing(this).setScale(0.7);
      scene.physics.add.existing(this, true); // true makes it a static body

      this.initRandomArray();
      this.initPlatform(pointValue, moveSpeed);
  }

  update() {
    this.x -= this.speed;
    if (this.x <= 0 - this.width) {
        this.x = game.config.width;
        this.randomColor();
        this.randomHeight();
    }
    this.body.x = this.x - this.width * 0.33;
    this.body.y = this.y - this.height * 0.35;
  }

  initRandomArray() {
      this.random_array = [];
      for (var i = 150; i < 400; i++) {
          this.random_array.push(i);
      }
  }

  randomHeight() {
    let randomHeight = Phaser.Math.RND.pick(this.random_array);
    this.y = randomHeight;
  }

  randomColor() {
    const r = Phaser.Math.Between(100, 255);
    const g = Phaser.Math.Between(100, 255);
    const b = Phaser.Math.Between(100, 255);
    this.color = Phaser.Display.Color.GetColor(r, g, b);
    this.setTint(this.color);
    return this.color;
  }

  initPlatform(pointValue, moveSpeed) {
    this.points = pointValue;
    this.speed = moveSpeed;
    this.randomColor();
  }

  setWhite() {
    let temp = Phaser.Display.Color.GetColor(255, 255, 255); // RGB values for white
    this.setTint(temp);
  }
}
