import { expect } from "chai"
import { Calculator } from "./calculator"

describe("Chai Test", function () {
    const calculator1 = new Calculator(6, 2)
    const calculator2 = new Calculator(5, 2)

    it("Check the sum of 6 and 2 positive ", function () {
        expect(calculator1.sum()).to.equal(8)
    })

    it("Check the sum of 6 and 2 negative", function () {
        expect(calculator1.sum()).to.equal(9)
    })

    it("Check the sum of 5 and 2  positive", function () {
        expect(calculator2.sum()).to.equal(7)
    })

    it("Check the sum of 5 and 2  negative", function () {
        expect(calculator1.sum()).not.equal(9)
    })

    it("Check division of 6 and 2 positive", function () {
        expect(calculator1.division()).to.equal(2)
    })

    it("Check division of 6 and 2 negative", function () {
        expect(calculator1.division()).not.equal(9)
    })

    it("Check substraction of 6 and 2 positive", function () {
        expect(calculator1.substraction()).to.equal(4)
    })

    it("Check substraction of 6 and 2 negative", function () {
        expect(calculator1.substraction()).not.equal(9)
    })

    it("Check substraction of 6 and 2 positive", function () {
        expect(calculator2.substraction()).to.equal(3)
    })

    it("Check substraction of 6 and 2 negative", function () {
        expect(calculator2.substraction()).not.equal(9)
    })

    it("Check substraction of 6 and 2 positive", function () {
        expect(calculator1.multiplication()).to.equal(12)
    })

    it("Check substraction of 6 and 2 negative", function () {
        expect(calculator1.multiplication()).not.equal(9)
    })

    it("Check substraction of 6 and 2 positive", function () {
        expect(calculator2.exponentiation()).to.equal(12)
    })

    it("Check substraction of 6 and 2 negative", function () {
        expect(calculator1.exponentiation()).not.equal(9)
    })

    it("Check exponentiation of 6 and 2 positive", function () {
        expect(calculator1.exponentiation()).to.equal(calculator1.multiplication())
    })

    it("Check exponentiation of 6 and 2 negative", function () {
        expect(calculator1.exponentiation()).not.equal(calculator1.substraction())
    })

    it("Check exponentiation of 5 and 2 positive", function () {
        expect(calculator2.exponentiation()).to.equal(10)
    })

    it("Check exponentiation of 5 and 2 negative", function () {
        expect(calculator2.exponentiation()).not.equal(6)
    })

    it("Check substraction of 6 and 2 positive", function () {
        expect(calculator1.exponentiation()).to.equal(calculator1.multiplication())
    })

    it("Check substraction of 6 and 2 positive", function () {
        expect(calculator1.exponentiation()).to.equal(calculator1.substraction())
    })
})
