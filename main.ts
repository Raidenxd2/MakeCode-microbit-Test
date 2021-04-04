led.setDisplayMode(DisplayMode.BlackAndWhite)
let Player__Y = 4
let Player__X = 2
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Player__X += -1
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.B)) {
        Player__X += 1
        basic.pause(100)
    }
    if (Player__X > 4) {
        Player__X = 4
    }
    if (Player__X < 0) {
        Player__X = 0
    }
})
basic.forever(function () {
    basic.pause(100)
    basic.clearScreen()
})
basic.forever(function () {
    led.plot(Player__X, Player__Y)
})
