//% weight=100 color=#000000 icon="\uf085" block="Automation:Bit"
namespace automationbit {
    let RELAY: DigitalPin = DigitalPin.P16

    //% block
    export enum Output {
        One = DigitalPin.P14,
        Two = DigitalPin.P15
    }

    //% block
    export enum Input {
        One = DigitalPin.P8,
        Two = DigitalPin.P13
    }

    //% block
    export enum Analog {
        One = DigitalPin.P2,
        Two = DigitalPin.P1,
        Three = DigitalPin.P0
    }

    /**
     * Set automation:bit relay,
     * setting to 1 will close the NO side
     * and open the NC side of the relay.
     */
    //% blockId=automationbit_set_relay
    //% block="Set relay to %state"
    //% state.min=0 state.max=1 state.defl=0
    export function setRelay(state: number): void {
        pins.digitalWritePin(RELAY, state)
    }

    /**
     * Get automation:bit relay,
     * Returns the current relay state
     */
    //% blockId=automationbit_get_relay
    //% block="Get relay" advanced
    export function getRelay(): number {
        return pins.digitalReadPin(RELAY)
    }

    /**
     * Toggle automation:bit relay,
     * Toggles the relay
     */
    //% blockId=automationbit_toggle_relay
    //% block="Toggle relay"
    export function toggleRelay(): void {
        setRelay(getRelay() == 1 ? 0 : 1)
    }

    /**
     * Set automation:bit output
     */
    //% blockId=automationbit_set_output
    //% block="Set output %output| to %state"
    //% state.min=0 state.max=1 state.defl=0
    export function setOutput(output: Output, state: number): void {
        let pin: number = output
        pins.digitalWritePin(pin, state)
    }

    /**
     * Toggle automation:bit output
     */
    //% blockId=automationbit_toggle_output
    //% block="Toggle output %output"
    export function toggleOutput(output: Output): void {
        let pin: number = output
        pins.digitalWritePin(pin, pins.digitalReadPin(pin) == 1 ? 0 : 1)
    }

    /**
     * Get automation:bit output
     */
    //% blockId=automationbit_get_output
    //% block="Get output %output" advanced
    export function getOutput(output: Output): number {
        let pin: number = output
        return pins.digitalReadPin(pin)
    }

    /**
     * Get automation:bit input
     */
    //% blockId=automationbit_get_input
    //% block="Get input %input"
    export function getInput(input: Input): number {
        let pin: number = input
        return pins.digitalReadPin(pin)
    }

    /**
     * Get automation:bit analog input
     */
    //% blockId=automationbit_get_analog
    //% block="Get analog %input"
    export function getAnalog(analog: Analog): number {
        let pin: number = analog
        return pins.analogReadPin(pin)
    }
}