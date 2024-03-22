let choisir = 0
input.onButtonPressed(Button.A, function () {
    choisir = randint(0, 6)
    if (choisir == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (choisir == 2) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (choisir == 3) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (choisir == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (choisir == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (choisir == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})

