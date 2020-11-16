max7219_matrix.setup(
4,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
max7219_matrix.for_4_in_1_modules(
rotation_direction.counterclockwise,
true
)
basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        max7219_matrix.scrollText(
        "L' association RC Drift 974",
        0,
        20
        )
        basic.pause(500)
        max7219_matrix.scrollText(
        "Presente:",
        0,
        20
        )
        basic.pause(500)
        max7219_matrix.scrollText(
        "Le salon du modelisme 2020",
        0,
        500
        )
        basic.pause(1000)
    }
    max7219_matrix.scrollText(
    "Fredo... si tu nous regarde....!",
    0,
    20
    )
    basic.pause(1000)
})
