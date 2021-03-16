input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    soundExpression.slide.playUntilDone()
    strip.clear()
    strip.show()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    soundExpression.giggle.playUntilDone()
    strip.clear()
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 12, NeoPixelMode.RGB)
