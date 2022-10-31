function TURN_LEFT () {
    pins.servoSetPulse(AnalogPin.P13, 1300)
    pins.servoSetPulse(AnalogPin.P8, 1300)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        MOVE_BACKWARD()
    }
    if (receivedNumber == 2) {
        FORWARD()
    }
    if (receivedNumber == 3) {
        STOP()
    }
    if (receivedNumber == 4) {
        TURN_RIGHT()
    }
    if (receivedNumber == 5) {
        TURN_LEFT()
    }
})
input.onButtonPressed(Button.A, function () {
    FORWARD()
})
function STOP () {
    pins.servoSetPulse(AnalogPin.P8, 0)
    pins.servoSetPulse(AnalogPin.P13, 0)
    control.waitMicros(20000)
}
function MOVE_BACKWARD () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
input.onButtonPressed(Button.AB, function () {
    STOP()
})
input.onButtonPressed(Button.B, function () {
    MOVE_BACKWARD()
})
function TURN_RIGHT () {
    pins.servoSetPulse(AnalogPin.P13, 1700)
    pins.servoSetPulse(AnalogPin.P8, 1700)
}
function FORWARD () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
function sensor () {
    DISTANCE = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
let DISTANCE = 0
radio.setGroup(12)
basic.showLeds(`
    # # . . .
    . # # . .
    . # # # .
    # # # # #
    # . . # #
    `)
DISTANCE = 0
basic.forever(function () {
    sensor()
    basic.showNumber(DISTANCE)
    if (DISTANCE < 5) {
        MOVE_BACKWARD()
        control.waitMicros(5000)
        TURN_LEFT()
    }
})
