input.onButtonPressed(Button.A, function () {
    if (true) {
        basic.showIcon(IconNames.Yes)
        basic.pause(3000)
        pins.servoWritePin(AnalogPin.P1, 180)
        basic.pause(800)
        pins.servoSetPulse(AnalogPin.P1, 0)
        basic.showNumber(0)
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(800)
        pins.servoSetPulse(AnalogPin.P1, 0)
        basic.clearScreen()
        basic.showNumber(180)
        basic.showString("FIN")
    }
})
