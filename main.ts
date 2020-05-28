let duck = sprites.create(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 d 1 f 5 5 d f . .
    . . . . b 5 5 1 f f 5 d 4 c . .
    . . . . b 5 5 d f b d d 4 4 . .
    . b b b d 5 5 5 5 5 4 4 4 4 4 b
    b d d d b b d 5 5 4 4 4 4 4 b .
    b b d 5 5 5 b 5 5 5 5 5 5 b . .
    c d c 5 5 5 5 d 5 5 5 5 5 5 b .
    c b d c d 5 5 b 5 5 5 5 5 5 b .
    . c d d c c b d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
duck.ay = 200
info.setScore(-1)


scene.setBackgroundColor(9)

controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    duck.vy = -100
})


game.onUpdate(function () {
    if (duck.y() < 0 || duck.y() > scene.screenHeight()) {
        game.over()
    }
})




game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)    
})

game.onUpdateInterval(2000, function () {
    if(Math.random() < 0.5){
        spawnbottomtree()
    } else {
        spawntoptree()
    }
})

function spawntoptree(){
    let obsticletop = sprites.create(img`
        . . . . . 6 f c e e e e e e e e e e 6 . . . . .
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
        . . . 6 7 7 7 6 6 6 e e e e 6 6 6 6 7 7 6 . . .
        . . 6 7 7 6 8 e 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . e e 7 7 e e e e 7 7 e c e e . . . .
        . . . . . . e e 6 e e e e e e 6 e e f . . . . .
        . . . . . . e e e e e e e e e e e e f . . . . .
        . . . . . . e e e e e e e e e e e e f . . . . .
        . . . . . . e e e e e e e e e e e c f . . . . .
        . . . . . . c e e e e e e e e e e c f . . . . .
        . . . . . . c e e e e e e e e e e f f . . . . .
        . . . . . . f e e e e e e e e e e f e . . . . .
        . . . . . 6 f e e e e e e e e e e f 6 . . . . .
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
        . . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . .
        . . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . e e 7 7 e e e e 6 7 e e e e . . . .
        . . . . . . e e 6 e e e e e e 6 c e f . . . . .
        . . . . . . e e e e e e e e e e e e f . . . . .
        . . . . . . e e e e e e e e e e e e f . . . . .
        . . . . . . e e e e e e e e e e e c f . . . . .
        . . . . . . e e e e e e e e e e e c f . . . . .
        . . . . . . e e e e e e e e e e e f f . . . . .
        . . . . . . f e e e e e e e e e e f e . . . . .
        . . . . . 6 f e e e e e e e e e e f 6 . . . . .
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
        . . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . .
        . . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . e e 7 7 e e e e 6 7 e e . . . . . .
        . . . . . . e e 6 e e e e e e 6 c e . . . . . .
        . . . . . . e e f e e e e e e e c e . . . . . .
        . . . . . . e e c e e e e e e e c e . . . . . .
        . . . . . . e e c e e e e e e e f e . . . . . .
        . . . . . . e e c e e e e e e e f e . . . . . .
        . . . . . . e e e e e e e e e e f e . . . . . .
        . . . . . . e e e e e e e e e e c e . . . . . .
        . . . . . 6 e e e e e e e e e e c e 6 . . . . .
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
        . . . 6 7 7 6 6 6 6 e e e e 6 7 6 6 7 7 6 . . .
        . . 6 7 7 6 e e 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 c e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . c e 7 7 e e e e 6 7 e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . b e e e e e e e e e e b . . . . . .
        . . . . . . . b e e e e e e e e b . . . . . . .
        . . . . . . . . b e e e e e e b . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
    `, SpriteKind.Projectile)
    obsticletop.setPosition(scene.screenWidth(), 25)
    obsticletop.vx = -25
}

function spawnbottomtree() {
    let obsticlebottom = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . b b b b . . . . . . . . . .
        . . . . . . . . b b d d d d b b . . . . . . . .
        . . . . . . . b d d b b b b d d b . . . . . . .
        . . . . . . b d b b d d d d b b d b . . . . . .
        . . . . . b d b b d b b b b d b b d b . . . . .
        . . . . . b d b d b d d d d b d b d b . . . . .
        . . . . . c d b b d b b b b d b b d c . . . . .
        . . . . . c b d b b d d d d b b d b c . . . . .
        . . . . . e f b d d b b b b d d b c e . . . . .
        . . . . . e e f f b d d d d b c c e e . . . . .
        . . . . . e e e e f f c c c c e e e . . . . . .
        . . . . . c e e e e e e e e e e e e . . . . . .
        . . . . . c e e e e e e e e e e e e . . . . . .
        . . . . . f e e e e e e e e e e e e . . . . . .
        . . . . . c c e e e e e e e e e e e . . . . . .
        . . . . . . f e e e e e e e e e e e . . . . . .
        . . . . . 6 f c e e e e e e e e e e 6 . . . . .
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
        . . . 6 7 7 7 6 6 6 e e e e 6 6 6 6 7 7 6 . . .
        . . 6 7 7 6 8 e 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . e e 7 7 e e e e 7 7 e c e e . . . .
        . . . . . . e e 6 e e e e e e 6 e e f . . . . .
        . . . . . . e e e e e e e e e e e e f . . . . .
        . . . . . . e e e e e e e e e e e e f . . . . .
        . . . . . . e e e e e e e e e e e c f . . . . .
        . . . . . . c e e e e e e e e e e c f . . . . .
        . . . . . . c e e e e e e e e e e f f . . . . .
        . . . . . . f e e e e e e e e e e f e . . . . .
        . . . . . 6 f e e e e e e e e e e f 6 . . . . .
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
        . . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . .
        . . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . e e 7 7 e e e e 6 7 e e . . . . . .
        . . . . . . e e 6 e e e e e e 6 c e . . . . . .
        . . . . . . e e f e e e e e e e c e . . . . . .
        . . . . . . e e c e e e e e e e c e . . . . . .
        . . . . . . e e c e e e e e e e f e . . . . . .
        . . . . . . e e c e e e e e e e f e . . . . . .
        . . . . . . e e e e e e e e e e f e . . . . . .
        . . . . . . e e e e e e e e e e c e . . . . . .
        . . . . . 6 e e e e e e e e e e c e 6 . . . . .
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
        . . . 6 7 7 6 6 6 6 e e e e 6 7 6 6 7 7 6 . . .
        . . 6 7 7 6 e e 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 c e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . c e 7 7 e e e e 6 7 e e . . . . . .
        . . . . . . c e 6 e e e e e e 6 e e . . . . . .
        . . . . . . c e e e e e e e e e e e . . . . . .
        . . . . . . f c c e e e e e e c e e . . . . . .
        . . . . . . f c c c e e e c e c c e . . . . . .
        . . . . . . f c c e e e c c e c c c . . . . . .
        . . . . . . f c c c e e c c e c c c . . . . . .
        . . . . . . f c c c c c e c e e c c . . . . . .
        . . . . . 6 f c c c c c c c c c c f 6 . . . . .
        . . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . .
        . . . 6 7 7 6 6 7 6 c c c c 6 7 6 6 7 7 6 . . .
        . . 6 7 7 6 c c 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . c c 7 7 c c c c 6 7 c f . . . . . .
        . . . . . . c c 6 c c c c c c 6 c f . . . . . .
    `, SpriteKind.Projectile)
    obsticlebottom.setPosition(scene.screenWidth(), 90)
    obsticlebottom.vx = -25
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, projectile) {
    game.over()
})
