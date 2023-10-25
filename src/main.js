// Exercise 01: Normalized Movement
// Name: Keaton Shawhan
// Date: 10/20/23

// Spritesheet by ElvGames: https://elv-games.itch.io/free-fantasy-dreamland-sprites

"use strict"

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    width: 1000,
    height: 600,
    // scene: [ Menu, Play ]
    scene: [ Play ]
}

let game = new Phaser.Game(config)

let cursors
let { height, width } = game.config
