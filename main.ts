let lightLevel = 0
// Set the radio group to ensure communication between micro:bits
radio.setGroup(1)
// Set the radio group to ensure communication between micro:bits
basic.forever(function () {
    lightLevel = input.lightLevel()
    if (lightLevel < 50) {
        // Adjust threshold based on your bin's behavior (e.g., when it's full and blocking light)
        radio.sendString("Bin Full")
        basic.showString("Bin Full")
        // Beep sound (Middle C note)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.clearScreen()
    }
})
