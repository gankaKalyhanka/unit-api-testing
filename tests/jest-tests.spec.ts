import assert from "assert"
import { Calculator } from "./calculator"

describe("Jest Test", function () {
    const calculator1 = new Calculator(6, 2)
    const calculator2 = new Calculator(5, 2)

    it("Check the sum of 6 and 2 positive ", function () {
        expect(calculator1.sum()).toBeCloseTo(8)
    })

    it("Check the sum of 6 and 2 negative", function () {
        expect(calculator1.sum()).toBeCloseTo(9)
    })

    it("Check the sum of 5 and 2  positive", function () {
        expect(calculator2.sum()).toBeCloseTo(7)
    })

    it("Check the sum of 5 and 2  negative", function () {
        expect(calculator1.sum()).toBeLessThan(9)
    })

    it("Check divition of 6 and 2 positive", function () {
        expect(calculator1.division()).toBeCloseTo(2)
    })

    it("Check divition of 6 and 2 negative", function () {
        expect(calculator1.division()).toBeLessThan(12)
    })

    it("Check substraction of 6 and 2 positive", function () {
        assert.equal(calculator1.substraction(), 4)
        expect(calculator1.substraction()).toBeCloseTo(4)
    })

    it("Check substraction of 6 and 2 negative", function () {
        expect(calculator1.substraction()).toBeCloseTo(9)
    })

    it("Check substraction of 6 and 2 positive", function () {
        expect(calculator2.substraction()).toBeCloseTo(3)
    })

    it("Check substraction of 6 and 2 negative", function () {
        expect(calculator2.substraction()).toBeLessThan(87)
    })

    it("Check substraction of 6 and 2 positive", function () {
        expect(calculator1.multiplication()).toBeCloseTo(12)
    })

    it("Check substraction of 6 and 2 negative", function () {
        expect(calculator1.multiplication()).toBeLessThan(80)
    })

    it("Check substraction of 6 and 2 positive", function () {
        expect(calculator1.exponentiation()).toBeCloseTo(12)
    })

    it("Check substraction of 6 and 2 negative", function () {
        expect(calculator1.exponentiation()).toBeLessThan(87)
    })

    it("Check exponentiation of 6 and 2 positive", function () {
        expect(calculator1.exponentiation()).toBeCloseTo(calculator1.multiplication())
    })

    it("Check exponentiation of 6 and 2 negative", function () {
        expect(calculator1.exponentiation()).toBeLessThan(calculator1.substraction())
    })

    it("Check exponentiation of 5 and 2 positive", function () {
        expect(calculator2.exponentiation()).toBeCloseTo(10)
    })

    it("Check exponentiation of 5 and 2 negative", function () {
        expect(calculator2.exponentiation()).toBeLessThan(80)
    })

    it("Check substraction of 6 and 2 positive", function () {
        expect(calculator1.exponentiation()).toBeCloseTo(calculator1.multiplication())
    })

    it("Check substraction of 6 and 2 positive", function () {
        expect(calculator1.exponentiation()).toBeCloseTo(calculator1.substraction())
    })
})
