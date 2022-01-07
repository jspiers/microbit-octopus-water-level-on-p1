let reading = 0
let shownumber = 0
let low_water_threshold = 100
loops.everyInterval(10000, function () {
    shownumber = 1
    if (reading < low_water_threshold) {
        soundExpression.sad.playUntilDone()
    }
})
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P1)
    led.plotBarGraph(
    reading,
    511
    )
    if (input.buttonIsPressed(Button.A) || shownumber) {
        shownumber = 0
        basic.showNumber(reading)
    }
})
