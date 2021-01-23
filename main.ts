namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (bingo.vy == 0) {
        bingo.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`portal`, function (sprite, location) {
    game.over(true)
})
let coin: Sprite = null
let bingo: Sprite = null
bingo = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . . . d d d d . . . . . . . 
    . . 7 . . 1 d d 1 . . 7 . . . . 
    . . . 7 . d d d d . 7 . . . . . 
    . . . . 7 7 7 7 7 7 . . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e . . . e . . . . . . 
    . . . . . f . . . f . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(15)
controller.moveSprite(bingo, 100, 0)
tiles.setTilemap(tilemap`chapter 1the escape`)
bingo.ay += 200
scene.cameraFollowSprite(bingo)
for (let value of tiles.getTilesByType(assets.tile`tile0`)) {
    coin = sprites.create(assets.image`Magic Coin`, SpriteKind.Coin)
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
