# automation:bit

 [![Build Status](https://travis-ci.org/pimoroni/pxt-automationbit.svg?branch=master)](https://travis-ci.org/pimoroni/pxt-automationbit)

This package adds support for the Pimoroni automation:bit to makecode.microbit.org.

An automation:bit is required to use this package, grab yours here: https://shop.pimoroni.com/products/automation-bit

To use this package, go to https://makecode.microbit.org/, click "Advanced" then "Add Package" and search for automation:bit. 

## JavaScript Reference

### Using the relay

The relay has three connections:

* Common
* Normally Open
* Normally Closed

When the relay is off, Common and Normally Closed are connected.

When the relay is on, Common and Normally Open are connected, and the connection between Common and Normally Closed is broken.

You can set, get or toggle the relay using the following methods:

```typescript
automationbit.setRelay(state: number)
automationbit.getRelay()
automationbit.toggleRelay()
```

* `state` is the value to set, this must be either `1` or `0`

### Using digital outputs

automation:bit has two digital outputs which *sink* to ground. This means they connect your load - be it an LED or a buzzer or otherwise - to ground and do not supply power the way you might normally expect an output to.

* `output` is the output to set, one of `Output.One` or `Output.Two`
* `state` is the value to write, this must either be `1` or `0`

```typescript
automationbit.setOutput(output: Output, state:number)
```

### Using digital inputs

automation:bit has two 24v-tolerant digital inputs, anything above ~2v will be read as HIGH/ON. The inputs are floating by default and you should add an appropriate pull resistor if you're connecting a button for prototyping.

* `input` is the input to read, one of `Input.One`, `Input.Two`

```typescript
automationbit.getInput(input: Input)
```

### Using analog inputs

automation:bit has three analog inputs. These use a voltage divider to convert the 0-24v input range into the 0-3v that micro:bit can tolerate.

The micro:bit has a 10-bit ADC, which means it ranges from 0 to 1023. To map these values to voltage you must divide the maximum input (24v) by 1023 and multiply your reading by the result: `reading * (24/1023)`.

The voltage divider isn't perfect, though, so don't expect super accurate readings. Additionally the smallest change you can measure is about 2.3mV.

Read an analog input on automation:bit.

* `analog` is the analog input to read, one of: `Analog.One` or `Analog.Two`

```typescript
automationbit.getAnalog(analog: Analog)
```

## License

MIT License

Copyright (c) 2018 Pimoroni Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Supported targets

* for PXT/microbit

```package
scrollbit=github:pimoroni/pxt-automationbit
```