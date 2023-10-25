class Platform extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, pointValue, moveSpeed) {
      super(scene, x, y, 'platform');
      
      scene.add.existing(this).setScale(0.7);
      scene.physics.add.existing(this);
      scene.physics.add.existing(this, true); // true makes it a static body

      this.points = pointValue;
      this.speed = moveSpeed;
      this.color = this.randomColor();
      // For coloring, you can now use setTint since your sprite is white
      this.setTint(this.color);
      this.random_array = [];
      for (var i = 100; i < 550; i++) {
        this.random_array.push(i); 
      }
  }
  update() {
      this.x -= this.speed;
      if (this.x <= 0 - this.width) {
          //this.randomHeight()
          this.x = game.config.width;
          this.randomColor();
      }
  }

  randomHeight(){
    let randomHeight = Phaser.Math.RND.pick(this.random_array);
    this.y = randomHeight;
  }

  randomColor(){
    const r = Phaser.Math.Between(100, 255);
    const g = Phaser.Math.Between(100, 255);
    const b = Phaser.Math.Between(100, 255);
    this.color = Phaser.Display.Color.GetColor(r, g, b);
    this.setTint(this.color);
    return this.color;
  }
}
