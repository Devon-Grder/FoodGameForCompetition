namespace SpriteKind {
    export const Location = SpriteKind.create()
    export const VegLettuceKind = SpriteKind.create()
    export const VegTomatoKind = SpriteKind.create()
    export const ClearItems = SpriteKind.create()
    export const VegWhiteBreadKind = SpriteKind.create()
    export const VegCarrotKind = SpriteKind.create()
    export const VegOnionKind = SpriteKind.create()
    export const VegHamKind = SpriteKind.create()
    export const VegTurkeyKind = SpriteKind.create()
    export const VegReturnItemsKind = SpriteKind.create()
    export const VegPotatoesKind = SpriteKind.create()
    export const VegWheatBreadKind = SpriteKind.create()
    export const VegRyeBread = SpriteKind.create()
    export const DoorLabel = SpriteKind.create()
    export const FruitSprite = SpriteKind.create()
    export const Cows = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    VegHero,
    [img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f e e e e e e f e f 
        f f f f e e e e f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 f b b b b b b f 4 e 
        4 d f d d d d d d c d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f e e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f e e e e e e e f e f 
        f f f e e e e f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        . 4 f b b b b b f e 4 e 
        . 4 f d d d d d e d d 4 
        . e f f f f f f e e 4 . 
        . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f f e e e e e f e f 
        f f f f f e e e e f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 e f b b b b b f 4 . 
        4 d d e d d d d d f 4 . 
        . 4 e e f f f f f f e . 
        . . . . . . . f f f . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    scene.cameraFollowSprite(VegHero)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FruitSprite, function (sprite, otherSprite) {
    FruitsCollected += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`VegSpawnHeroTile1`, function (sprite, location) {
    StartDairyGame()
})
function CheckDairyAnswer (Healthy: boolean) {
    if (Healthy == true) {
        if (ChosenDairy == "2% Low-fat") {
            game.splash("Correct")
            Correct_Answers += 1
        } else if (ChosenDairy == "Skim Milk") {
            game.splash("Correct")
            Correct_Answers += 1
        } else if (ChosenDairy == "Cheese") {
            game.splash("Correct")
            Correct_Answers += 1
        } else if (ChosenDairy == "Yogurt") {
            game.splash("Correct")
            Correct_Answers += 1
        } else {
            game.splash("Incorrect")
            Correct_Answers += -1
        }
    }
    if (Healthy == false) {
        if (ChosenDairy == "Whole Milk") {
            game.splash("Correct")
            Correct_Answers += 1
        } else if (ChosenDairy == "Ice Cream") {
            game.splash("Correct")
            Correct_Answers += 1
        } else if (ChosenDairy == "Milk and Cereal") {
            game.splash("Correct")
            Correct_Answers += 1
        } else if (ChosenDairy == "Butter") {
            game.splash("Correct")
            Correct_Answers += 1
        } else {
            game.splash("Incorrect")
            Correct_Answers += -1
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
    CheckDairyAnswer(false)
    if (Correct_Answers >= 5) {
        game.splash("Well Done!")
        DairyGameCompleted = true
    }
    if (DairyGameCompleted == true && FruitGameCompleted == true) {
        StartProtienGame()
    }
})
function SpawnVegHero () {
    VegHero = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    VegHero.scale = 0.9
    tiles.placeOnTile(VegHero, tiles.getTileLocation(5, 17))
    scene.cameraFollowSprite(VegHero)
    controller.moveSprite(VegHero)
    VegHero.ay = 0
}
function StartProtienGame () {
    ClearScreen()
    SpawnVegHero()
    scene.setBackgroundImage(img`
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
        7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
        7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
        6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
        6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
        6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
        6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
        6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
        66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
        66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
        66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
        66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
        66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
        6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
        6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
        6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
        bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
        bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
        bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
        bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
        bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
        bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
        bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
        bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
        bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
        bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
        b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
        b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
        b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
        b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
        dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
        9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
        9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
        9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
        9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
        99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
        99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
        9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
        9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
        999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
        d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
        dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
        dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
        9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
        ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
        dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
        dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
        dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
        dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
        d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
        d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
        d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
        999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
        999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
        999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
        999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
        999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
        999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
        9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
        d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
        ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
        dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
        ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
        ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
        ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
        dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
        dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
        ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
        dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
        ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    SpawnProtienFoods()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`VegSpawnHeroTile0`, function (sprite, location) {
    StartFruitGame()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    VegHero,
    [img`
        . . . f f f f f . . . . 
        . . f e e e e e f f . . 
        . f e e e e e e e f f . 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        f f e 4 4 f f 4 e 4 f f 
        . f f d d d d 4 d 4 f . 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e e f . . 
        . . f 1 1 1 e d d 4 . . 
        . . f 1 1 1 e d d e . . 
        . . f 6 6 6 f e e f . . 
        . . . f f f f f f . . . 
        . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f . 
        . . f b b d e e f f f . 
        . . f e 4 e d d 4 f . . 
        . . f 1 1 e d d e f . . 
        . f f 6 6 f e e f f f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f f 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e d d 4 . 
        . . f 1 1 1 1 e d d e . 
        . f f 6 6 6 6 f e e f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    scene.cameraFollowSprite(VegHero)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    VegHero,
    [img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        f f 4 d 4 d d d d f . . 
        . f f f 4 d d b b f . . 
        . 4 d d e 4 4 4 e f . . 
        . e d d e 1 1 1 1 f . . 
        . f e e f 6 6 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        . f 4 d 4 d d d d f . . 
        . f f f e e d b b f . . 
        . . f 4 d d e 4 e f . . 
        . . f e d d e 1 1 f . . 
        . f f f e e f 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `,img`
        . . . . f f f f f . . . 
        . . f f e e e e e f . . 
        . f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f f 
        . f 4 d 4 d d d d f f . 
        . f f f 4 d d b b f . . 
        . . f e e 4 4 4 e f . . 
        . . 4 d d e 1 1 1 f . . 
        . . e d d e 1 1 1 f . . 
        . . f e e f 6 6 6 f . . 
        . . . f f f f f f . . . 
        . . . . f f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    scene.cameraFollowSprite(VegHero)
})
function StartDairyGame () {
    Correct_Answers = 0
    ClearScreen()
    SpawnVegHero()
    tiles.placeOnTile(VegHero, tiles.getTileLocation(3, 7))
    tiles.setCurrentTilemap(tilemap`level7`)
    MilkCowSprite = sprites.create(img`
        ................................
        ................................
        ................................
        ..............ffffff............
        ...........fffeeee11fff.........
        ...........fffeeee11fff.........
        ........fff111eeee11111fff......
        .......f1111eeeeeee11111eef.....
        ......feeeeefffeeeefffeeeeef....
        ......feeeef55feeeef55feeeef....
        ......feeeef55feeeef55feeeef....
        ....ffefffff55ffffff55fffffeff..
        ....fffeeeeeeeeeeeeeeeeeeeefff..
        ....fffe3333eeeeeeeeee3333efff..
        ....fffe3333eeeeeeeeee3333efff..
        ....fffe3333eeeeeeeeee3333efff..
        ....fffeeeeeeeee11eeeeeeeeefff..
        ....ffeffffeeefe11efeeeffffeff..
        ....ffeeeefeeef1111feeefeeeeff..
        ....ffeeeefeeef1111feeefeeeeff..
        ....ffeeff12221111112221ffeeff..
        ......feff13333333333331ffef....
        ......feff13333333333331ffef....
        ......feff13333333333331ffef....
        .......fff1333f3333f3331fff.....
        ........fff333333333333fff......
        ........ffffffffffffffffff......
        ..........feeef....feeef........
        ..........feeef....feeef........
        ...........ffff....ffff.........
        ................................
        ................................
        `, SpriteKind.Cows)
    IceCreamCowSprite = sprites.create(img`
        ................................
        ................................
        ................................
        ..............ffffff............
        ...........fffeeee11fff.........
        ...........fffeeee11fff.........
        ........fff111eeee11111fff......
        .......f1111eeeeeee11111eef.....
        ......feeeeefffeeeefffeeeeef....
        ......feeeef55feeeef55feeeef....
        ......feeeef55feeeef55feeeef....
        ....ffefffff55ffffff55fffffeff..
        ....fffeeeeeeeeeeeeeeeeeeeefff..
        ....fffe3333eeeeeeeeee3333efff..
        ....fffe3333eeeeeeeeee3333efff..
        ....fffe3333eeeeeeeeee3333efff..
        ....fffeeeeeeeee11eeeeeeeeefff..
        ....ffeffffeeefe11efeeeffffeff..
        ....ffeeeefeeef1111feeefeeeeff..
        ....ffeeeefeeef1111feeefeeeeff..
        ....ffeeff12221111112221ffeeff..
        ......feff13333333333331ffef....
        ......feff13333333333331ffef....
        ......feff13333333333331ffef....
        .......fff1333f3333f3331fff.....
        ........fff333333333333fff......
        ........ffffffffffffffffff......
        ..........feeef....feeef........
        ..........feeef....feeef........
        ...........ffff....ffff.........
        ................................
        ................................
        `, SpriteKind.Cows)
    RandomCowSprite = sprites.create(img`
        ................................
        ................................
        ................................
        ..............ffffff............
        ...........fffeeee11fff.........
        ...........fffeeee11fff.........
        ........fff111eeee11111fff......
        .......f1111eeeeeee11111eef.....
        ......feeeeefffeeeefffeeeeef....
        ......feeeef55feeeef55feeeef....
        ......feeeef55feeeef55feeeef....
        ....ffefffff55ffffff55fffffeff..
        ....fffeeeeeeeeeeeeeeeeeeeefff..
        ....fffe3333eeeeeeeeee3333efff..
        ....fffe3333eeeeeeeeee3333efff..
        ....fffe3333eeeeeeeeee3333efff..
        ....fffeeeeeeeee11eeeeeeeeefff..
        ....ffeffffeeefe11efeeeffffeff..
        ....ffeeeefeeef1111feeefeeeeff..
        ....ffeeeefeeef1111feeefeeeeff..
        ....ffeeff12221111112221ffeeff..
        ......feff13333333333331ffef....
        ......feff13333333333331ffef....
        ......feff13333333333331ffef....
        .......fff1333f3333f3331fff.....
        ........fff333333333333fff......
        ........ffffffffffffffffff......
        ..........feeef....feeef........
        ..........feeef....feeef........
        ...........ffff....ffff.........
        ................................
        ................................
        `, SpriteKind.Cows)
    CowArray = [MilkCowSprite, IceCreamCowSprite, RandomCowSprite]
    for (let value of tiles.getTilesByType(assets.tile`myTile23`)) {
        CowArrayIndex = 0
        tiles.placeOnTile(CowArray[CowArrayIndex], value)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Cows, function (sprite, otherSprite) {
    ChosenDairy = ""
    if (otherSprite == MilkCowSprite) {
        MilkList = ["2% Low-fat", "Whole Milk", "Skim Milk"]
        ChosenDairy = MilkList[randint(0, MilkList.length)]
        game.splash(ChosenDairy)
    } else if (otherSprite == IceCreamCowSprite) {
        ChosenDairy = "Ice Cream"
        game.splash("Ice Cream")
    } else if (otherSprite == RandomCowSprite) {
        RandomDairyList = [
        "Milk and Cereal",
        "Cheese",
        "Yogurt",
        "Butter"
        ]
        ChosenDairy = RandomDairyList[randint(0, RandomDairyList.length)]
        game.splash(ChosenDairy)
    }
})
function StartScreen () {
    FruitGameCompleted = false
    DairyGameCompleted = false
    game.showLongText("Welcome to Food Fest!", DialogLayout.Center)
    pause(100)
    game.showLongText("You will be partaking in 4 games to learn about how different foods affect your body", DialogLayout.Center)
    pause(100)
    game.showLongText("First You will learn about Grains and vegetables in a sandwich building mini-game", DialogLayout.Center)
    pause(100)
    game.showLongText("Then you will have to catch the correct fruits to learn about each one", DialogLayout.Center)
    pause(100)
    game.showLongText("Following you will milk cows and place the corresponding dairy food in healthy or unhealthy categories", DialogLayout.Center)
    pause(100)
    game.showLongText("Finally you will have to chose the correct protein source in a Scavenger hunt for the 5 Proteins", DialogLayout.Center)
    pause(100)
    game.showLongText("Good Luck!", DialogLayout.Center)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    VegHero,
    [img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d 4 e f e 
        f f f e 4 4 4 4 d d 4 e 
        e 4 f b 1 1 1 e d d e . 
        . . f 6 6 6 6 f e e . . 
        . . f f f f f f f . . . 
        . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        e f e 4 d b b d d e f . 
        e 4 d d 4 4 4 4 e f f f 
        . e d d e 1 1 1 b f 4 e 
        . . e e f 6 6 6 6 f . . 
        . . . f f f f f f f . . 
        . . . . . . . f f f . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingDown)
    )
    scene.cameraFollowSprite(VegHero)
})
function SpawnFruits () {
    WaterMelonSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f 7 . . . . 
        . . . . . . . . . 2 3 f 7 . . . 
        . . . . . . . . 2 2 3 3 f 7 . . 
        . . . . . . . 2 2 2 2 1 f 7 . . 
        . . . . . . 2 2 f 2 2 1 f 7 . . 
        . . . . . 2 2 2 2 2 2 1 f 7 . . 
        . . . . . 2 2 2 f 2 2 1 f 7 . . 
        . . . . 2 2 2 2 2 2 3 1 f 7 . . 
        . . . 2 2 2 f 2 2 2 1 f 7 . . . 
        . . f 3 3 2 2 2 3 1 f 7 7 . . . 
        . . 7 f 3 1 1 1 1 f 7 7 . . . . 
        . . . 7 f f f f f 7 7 . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.FruitSprite)
    AppleSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 7 . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . 2 2 2 7 7 2 2 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . . 2 2 . . 2 2 . . . . . 
        `, SpriteKind.FruitSprite)
    BananaSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . e . 
        . . . . . . . . . . . . . 5 e . 
        . . . . . . . . . . . . 5 5 e . 
        . . . . . . . . . . . . 5 5 e . 
        . . . . . . . . . . . 5 5 5 . . 
        . . . . . . . . . . 5 5 5 5 . . 
        . . . . . . . 5 5 5 5 5 5 5 . . 
        . . . . . . 5 5 5 5 5 5 5 . . . 
        . . . . . . 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        e e 5 5 5 5 5 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.FruitSprite)
    StrawBerrySprite = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.FruitSprite)
    GrapeSprite = sprites.create(img`
        . f 3 3 a a f 7 7 7 7 7 7 7 7 7 
        . f 3 a a a a f 7 f 7 7 7 7 7 f 
        . f a a a a a f 7 f f 7 7 7 f f 
        f f f a a a f a f a f 7 7 7 f . 
        3 3 a f f f f f f a a f 7 f . . 
        3 a a a f 3 3 a f f f f f f f . 
        a a a a f 3 a a a a f a a a a f 
        a a a a f 3 a a a a f a a a a a 
        a a a f f a a a a e f a a a a a 
        f f f f f f a a e f f a a a a e 
        . f 3 3 a f f f f f f f a a e f 
        f 3 3 a a a f a a a a f f f f . 
        f 3 a a a a f a a a a a f . . . 
        f a a a a a f a a a a a f . . . 
        . f a a a f f a a a a e f . . . 
        . . f f f f f f a a e f . . . . 
        `, SpriteKind.FruitSprite)
    FruitsArray = [
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f 7 . . . . 
        . . . . . . . . . 2 3 f 7 . . . 
        . . . . . . . . 2 2 3 3 f 7 . . 
        . . . . . . . 2 2 2 2 1 f 7 . . 
        . . . . . . 2 2 f 2 2 1 f 7 . . 
        . . . . . 2 2 2 2 2 2 1 f 7 . . 
        . . . . . 2 2 2 f 2 2 1 f 7 . . 
        . . . . 2 2 2 2 2 2 3 1 f 7 . . 
        . . . 2 2 2 f 2 2 2 1 f 7 . . . 
        . . f 3 3 2 2 2 3 1 f 7 7 . . . 
        . . 7 f 3 1 1 1 1 f 7 7 . . . . 
        . . . 7 f f f f f 7 7 . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.FruitSprite),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 7 . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . 2 2 2 7 7 2 2 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . . 2 2 . . 2 2 . . . . . 
        `, SpriteKind.FruitSprite),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . e . 
        . . . . . . . . . . . . . 5 e . 
        . . . . . . . . . . . . 5 5 e . 
        . . . . . . . . . . . . 5 5 e . 
        . . . . . . . . . . . 5 5 5 . . 
        . . . . . . . . . . 5 5 5 5 . . 
        . . . . . . . 5 5 5 5 5 5 5 . . 
        . . . . . . 5 5 5 5 5 5 5 . . . 
        . . . . . . 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        e e 5 5 5 5 5 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.FruitSprite),
    sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.FruitSprite),
    sprites.create(img`
        . f 3 3 a a f 7 7 7 7 7 7 7 7 7 
        . f 3 a a a a f 7 f 7 7 7 7 7 f 
        . f a a a a a f 7 f f 7 7 7 f f 
        f f f a a a f a f a f 7 7 7 f . 
        3 3 a f f f f f f a a f 7 f . . 
        3 a a a f 3 3 a f f f f f f f . 
        a a a a f 3 a a a a f a a a a f 
        a a a a f 3 a a a a f a a a a a 
        a a a f f a a a a e f a a a a a 
        f f f f f f a a e f f a a a a e 
        . f 3 3 a f f f f f f f a a e f 
        f 3 3 a a a f a a a a f f f f . 
        f 3 a a a a f a a a a a f . . . 
        f a a a a a f a a a a a f . . . 
        . f a a a f f a a a a e f . . . 
        . . f f f f f f a a e f . . . . 
        `, SpriteKind.FruitSprite)
    ]
    while (TimeGoingVariable == true) {
        FuitSpritePickerVariable = randint(1, 5)
        FruitSpawnLocationNumber = randint(0, tiles.getTilesByType(assets.tile`myTile23`).length)
        FallingFruit = FruitsArray[FuitSpritePickerVariable]
        FallingFruit.ay = 10
        tiles.placeOnTile(FallingFruit, tiles.getTilesByType(assets.tile`myTile23`)[FruitSpawnLocationNumber])
        pause(1000)
    }
}
function SpawnProtienFoods () {
    BeefCowSprite = sprites.create(img`
        ................................
        ................................
        ................................
        ..............ffffff............
        ...........fffeeee11fff.........
        ...........fffeeee11fff.........
        ........fff111eeee11111fff......
        .......f1111eeeeeee11111eef.....
        ......feeeeefffeeeefffeeeeef....
        ......feeeef55feeeef55feeeef....
        ......feeeef55feeeef55feeeef....
        ....ffefffff55ffffff55fffffeff..
        ....fffeeeeeeeeeeeeeeeeeeeefff..
        ....fffe3333eeeeeeeeee3333efff..
        ....fffe3333eeeeeeeeee3333efff..
        ....fffe3333eeeeeeeeee3333efff..
        ....fffeeeeeeeee11eeeeeeeeefff..
        ....ffeffffeeefe11efeeeffffeff..
        ....ffeeeefeeef1111feeefeeeeff..
        ....ffeeeefeeef1111feeefeeeeff..
        ....ffeeff12221111112221ffeeff..
        ......feff13333333333331ffef....
        ......feff13333333333331ffef....
        ......feff13333333333331ffef....
        .......fff1333f3333f3331fff.....
        ........fff333333333333fff......
        ........ffffffffffffffffff......
        ..........feeef....feeef........
        ..........feeef....feeef........
        ...........ffff....ffff.........
        ................................
        ................................
        `, SpriteKind.Player)
    ChickenSprite = sprites.create(img`
        . . . . . . e e e e . . . . . . 
        . . . . . e 2 2 2 e . . . . . . 
        . . . . e 2 2 e e . . . . . . . 
        . . . e d d d d e . . . . . . . 
        . . e d f e f d d e . e e e e . 
        . . e d f e f e d e e d d d d e 
        . e 5 5 d e d e e e d d d d d e 
        . . e d d e e e e d e e e d e . 
        . e d d d e e e e d d e e d d e 
        e d d e d d d e e e d d e d d e 
        e d d e e d d e e d e e d d e . 
        e d d d e d d d e d d d d d e . 
        . e d d e e d d d d d d d e . . 
        . . e e d d d d d d d d e e . . 
        . . . e e d d d e e d e e . . . 
        . . e 5 5 5 e 5 5 5 e . . . . . 
        `, SpriteKind.Player)
    FishSprte = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . . . 
        . . . c 4 d 4 4 4 4 4 1 c . c c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
        . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
        f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
        . f 4 4 4 4 1 c 4 f 4 d f f f f 
        . . f f 4 d 4 4 f f 4 c f c . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `, SpriteKind.Player)
    BeefCowSprite.setVelocity(randint(-50, 50), randint(-50, 50))
    ChickenSprite.setVelocity(randint(-50, 50), randint(-50, 50))
    FishSprte.setVelocity(randint(-50, 50), randint(-50, 50))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    CheckDairyAnswer(false)
    if (Correct_Answers >= 5) {
        game.splash("Well Done!")
        DairyGameCompleted = true
    }
    if (DairyGameCompleted == true && FruitGameCompleted == true) {
        StartProtienGame()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    CheckDairyAnswer(true)
})
function ClearScreen () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Location)
    sprites.destroyAllSpritesOfKind(SpriteKind.VegLettuceKind)
    sprites.destroyAllSpritesOfKind(SpriteKind.VegTomatoKind)
    sprites.destroyAllSpritesOfKind(SpriteKind.ClearItems)
    sprites.destroyAllSpritesOfKind(SpriteKind.VegWhiteBreadKind)
    sprites.destroyAllSpritesOfKind(SpriteKind.VegCarrotKind)
    sprites.destroyAllSpritesOfKind(SpriteKind.VegOnionKind)
    sprites.destroyAllSpritesOfKind(SpriteKind.VegHamKind)
    sprites.destroyAllSpritesOfKind(SpriteKind.VegTurkeyKind)
    sprites.destroyAllSpritesOfKind(SpriteKind.VegReturnItemsKind)
    sprites.destroyAllSpritesOfKind(SpriteKind.VegPotatoesKind)
    sprites.destroyAllSpritesOfKind(SpriteKind.VegWheatBreadKind)
    sprites.destroyAllSpritesOfKind(SpriteKind.VegRyeBread)
    sprites.destroyAllSpritesOfKind(SpriteKind.DoorLabel)
}
function StartFruitGame () {
    ClearScreen()
    scene.setBackgroundImage(img`
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
        7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
        7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
        6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
        6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
        6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
        6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
        6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
        66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
        66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
        66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
        66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
        66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
        6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
        6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
        6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
        bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
        bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
        bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
        bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
        bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
        bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
        bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
        bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
        bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
        bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
        b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
        b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
        b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
        b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
        dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
        9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
        9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
        9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
        9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
        99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
        99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
        9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
        9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
        999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
        d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
        dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
        dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
        9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
        ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
        dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
        dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
        dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
        dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
        d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
        d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
        d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
        999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
        999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
        999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
        999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
        999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
        999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
        9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
        d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
        ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
        dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
        ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
        ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
        ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
        dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
        dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
        ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
        dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
        ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    tiles.setCurrentTilemap(tilemap`level4`)
    SpawnVegHero()
    tiles.placeOnTile(VegHero, tiles.getTileLocation(8, 14))
    controller.moveSprite(VegHero, 100, 0)
    VegHero.ay = 1
    info.startCountdown(60)
    TimeGoingVariable = true
    FruitsCollected = 0
    SpawnFruits()
    game.showLongText("Did you know that you should eat 2 cups of fruit a day or 400 grams of fruit", DialogLayout.Bottom)
    if (FruitsCollected >= 5) {
        game.showLongText("You collected enough for a healthy day!", DialogLayout.Bottom)
    }
    FruitGameCompleted = true
    ClearScreen()
    StartDairyGame()
}
let FishSprte: Sprite = null
let ChickenSprite: Sprite = null
let BeefCowSprite: Sprite = null
let FallingFruit: Sprite = null
let FruitSpawnLocationNumber = 0
let FuitSpritePickerVariable = 0
let TimeGoingVariable = false
let FruitsArray: Sprite[] = []
let GrapeSprite: Sprite = null
let StrawBerrySprite: Sprite = null
let BananaSprite: Sprite = null
let AppleSprite: Sprite = null
let WaterMelonSprite: Sprite = null
let RandomDairyList: string[] = []
let MilkList: string[] = []
let CowArrayIndex = 0
let CowArray: Sprite[] = []
let RandomCowSprite: Sprite = null
let IceCreamCowSprite: Sprite = null
let MilkCowSprite: Sprite = null
let FruitGameCompleted = false
let DairyGameCompleted = false
let Correct_Answers = 0
let ChosenDairy = ""
let FruitsCollected = 0
let VegHero: Sprite = null
StartScreen()
StartFruitGame()
