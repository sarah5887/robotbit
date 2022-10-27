function TURN_LEFT () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
}
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
	
})
input.onButtonPressed(Button.B, function () {
    MOVE_BACKWARD()
})
function TURN_RIGHT () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
}
function FORWARD () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
