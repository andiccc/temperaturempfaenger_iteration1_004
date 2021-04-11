radio.onReceivedNumber(function (receivedNumber) {
    if (ausgabe == 1) {
        Temperaturliste.push(receivedNumber)
        serial.writeLine("" + (receivedNumber))
    }
})
input.onButtonPressed(Button.B, function () {
    for (let zeilennummer = 0; zeilennummer <= 9; zeilennummer++) {
        indexinarray = Temperaturliste.length - (10 - zeilennummer)
        zeileninhalt = Temperaturliste[indexinarray]
        serial.writeString("Temp: ")
        serial.writeNumber(zeileninhalt)
        serial.writeString(" Diagramm:")
        for (let index = 0; index < zeileninhalt; index++) {
            serial.writeString("#")
        }
        serial.writeLine("")
    }
})
let zeileninhalt = 0
let indexinarray = 0
let ausgabe = 0
let Temperaturliste: number[] = []
radio.setGroup(0)
Temperaturliste = []
ausgabe = 1
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (ausgabe == 1) {
            ausgabe = 0
            basic.pause(1000)
        } else {
            ausgabe = 1
            basic.pause(1000)
        }
    }
    basic.clearScreen()
    if (ausgabe == 1) {
        basic.showIcon(IconNames.Yes)
    } else if (ausgabe == 0) {
        basic.showIcon(IconNames.No)
    }
})
