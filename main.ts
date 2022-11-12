input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Yes)
})
basic.showNumber(0)
basic.forever(function () {
    led.plot(1, 1)
})
