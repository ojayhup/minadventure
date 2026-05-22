function quest3 () {
    music.play(music.createSong(assets.song`to_the_ballroom`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`drago`)
    adventure.addToTextlog("you finally reach and get to the castle and you can ask for all the stuff you want but there are 2 guards asking to pay to enter or to be thrown to the dragon")
    adventure.addToTextlog("Press (A) to pay and enter")
    adventure.addToTextlog("Press (B) to be thrown to the dragon")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Yes we can pay and get what we want")
        adventure.changeScoreOverride(adventure.Currency.Coins, 40)
    } else {
        adventure.addToTextlog("you have been eaten by the dragon")
        info.changeLifeBy(-1)
    }
}
function quest1 () {
    music.play(music.createSong(assets.song`going_on_an_adventure`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`strum`)
    adventure.addToTextlog("A traveling minstrel approaches and asks you to join her adventure.")
    adventure.addToTextlog("Press (A) to join the fun.")
    adventure.addToTextlog("Press (B) to turn and run.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Great choice! Enjoy your adventure.")
        adventure.changeScoreOverride(adventure.Currency.Coins, 5)
        quest2()
    } else {
        adventure.addToTextlog("Your adventure is over before it has even begun.")
        info.changeLifeBy(-1)
    }
}
function quest2 () {
    music.play(music.createSong(assets.song`a_fairy_and_an_ogre`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`shipped`)
    adventure.addToTextlog("you see a travelling ship arriving to you asking if you want to get to overseas and go to your destination the castle")
    adventure.addToTextlog("Press (A) to board on the ship and travel to the castle")
    adventure.addToTextlog("Press (B) to swim to another island")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("ok lets go to the castle")
        adventure.changeScoreOverride(adventure.Currency.Coins, 5)
        quest3()
    } else {
        adventure.addToTextlog("You have drowned on your way to the castle with the minstrel.")
        info.changeLifeBy(-1)
    }
}
info.onLifeZero(function () {
    game.over(false)
})
info.onScore(50, function () {
    game.gameOver(true)
})
scene.setBackgroundImage(assets.image`horse`)
game.showLongText("Minadventure", DialogLayout.Bottom)
info.setLife(1)
quest1()
