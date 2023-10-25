class Platform extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, pointValue, moveSpeed) {
    super(scene, x, y, 100, 20); // Fixed width and height for the platform
    scene.add.existing(this);
    this.points = pointValue;
    this.speed = moveSpeed;
    
    this.changeColor();  // Initial color
  }

  update() {
    this.x -= this.speed;
    if (this.x <= 0 - this.width) {
      this.x = game.config.width;
      this.changeColor();  // Change color each time it resets
    }
  }

  changeColor() {
    const newColor = this.getRandomColor();
    this.fillColor = newColor;  // Change the color of the platform
  }

  getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return Phaser.Display.Color.GetColor(r, g, b);
  }
}
