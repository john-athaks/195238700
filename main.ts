input.onGesture(Gesture.EightG, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C D E G C5 F B B ", 120)
    music.playTone(165, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        `)
})
input.onGesture(Gesture.SixG, function () {
    basic.showIcon(IconNames.StickFigure)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C D E - C5 F B A ", 120)
    music.playTone(147, music.beat(BeatFraction.Half))
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showIcon(IconNames.Yes)
})
