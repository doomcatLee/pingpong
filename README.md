
# Ping Pong Project

#### February 24, 2017 v1.0.0
#### By _Alex Lee_

## Specifications
Specs | Input | Output
--- | --- | ---
 When user inputs a number, populate all the numbers equal to and below into an array of numbers | 10 | [1,2,3,4,5,6,7,8,9,10]
Function that will loop through the array to replace current element if divisible by 3/5/15 with ping/pong/ping-pong | [3,4,5,6,7,8,9] | ["ping",4,"pong",6,7,8,9]
Function that can spit out the final array into a list in html | ["ping",4,"pong",6,7,8,9]| Displayed in html
Function that will insert array items into the li tag in HTML | function(array) | <li> item1 </li> <li>item2</li>
Function that will validate userinput. If less than zero, throw an alert | function(input)| Alert("Number must be bigger than or equal to 0 ")

## Description

PingPong game is a web application that will display 0 to number that user has inputted. Numbers that are divisible by 3 will display ping, numbers that are divisible by 5 will display pong, and numbers that are divisible by 15 will display pingpong instead.

## Setup/Installation Requirements
```
cd /desiredLocation
```
```
git clone https://github.com/doomcatlee/pingpong
```
```
cd pingpong
```
```
open index.html
```


## Support and contact details

Contact Alex at doomcat9167@gmail.com for any reported bugs

## Technologies Used

* HTML
* CSS
* jQuery/jQuery UI
* javaScript

### License

*This software is licensed under the MIT license.*

Copyright (c) 2017 Alex Lee
