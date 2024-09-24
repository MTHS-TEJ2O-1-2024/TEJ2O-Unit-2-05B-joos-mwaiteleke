/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jp
 * Created on: Sep 2024
 * This program says the temperature in Kelvin
*/



basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause (1000)

input.onButtonPressed(Button.A, function () {
    let temperatureC = input.temperature()
    let temperatureK = (temperatureC + 273.15)
    temperatureK = Math.round(temperatureK)
    
    basic.showString('The temperature is:'+ temperatureK.toString()+'K')
})