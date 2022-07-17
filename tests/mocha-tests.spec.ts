import assert from "assert"
import { Calculator } from "./calculator"

describe("Mocha Test", function () {
    const calculator1 = new Calculator(6, 2)
    const calculator2 = new Calculator(5, 2)

    it("Check the sum of 6 and 2 positive ", function () {
        assert.equal(calculator1.sum(), 8)
    })

    it("Check the sum of 6 and 2 negative", function () {
        assert.notEqual(calculator1.sum(), 9)
    })

    it("Check the sum of 5 and 2  positive", function () {
        assert.equal(calculator2.sum(), 7)
    })

    it("Check the sum of 5 and 2  negative", function () {
        assert.notEqual(calculator1.sum(), 9)
    })

    it("Check divition of 6 and 2 positive", function () {
        assert.equal(calculator1.division(), 2)
    })

    it("Check divition of 6 and 2 negative", function () {
        assert.notEqual(calculator1.division(), 9)
    })

    it("Check substraction of 6 and 2 positive", function () {
        assert.equal(calculator1.substraction(), 4)
    })

    it("Check substraction of 6 and 2 negative", function () {
        assert.notEqual(calculator1.substraction(), 9)
    })

    it("Check substraction of 6 and 2 positive", function () {
        assert.equal(calculator2.substraction(), 3)
    })

    it("Check substraction of 6 and 2 negative", function () {
        assert.notEqual(calculator2.substraction(), 9)
    })

    it("Check substraction of 6 and 2 positive", function () {
        assert.equal(calculator1.multiplication(), 12)
    })

    it("Check substraction of 6 and 2 negative", function () {
        assert.notEqual(calculator1.multiplication(), 9)
    })

    it("Check substraction of 6 and 2 positive", function () {
        assert.equal(calculator1.exponentiation(), 12)
    })

    it("Check substraction of 6 and 2 negative", function () {
        assert.notEqual(calculator1.exponentiation(), 9)
    })

    it("Check exponentiation of 6 and 2 positive", function () {
        assert.equal(calculator1.exponentiation(), calculator1.multiplication())
    })

    it("Check exponentiation of 6 and 2 negative", function () {
        assert.notEqual(calculator1.exponentiation(), calculator1.substraction())
    })

    it("Check exponentiation of 5 and 2 positive", function () {
        assert.equal(calculator2.exponentiation(), 10)
    })

    it("Check exponentiation of 5 and 2 negative", function () {
        assert.notEqual(calculator2.exponentiation(), 6)
    })

    it("Check substraction of 6 and 2 positive", function () {
        assert.equal(calculator1.exponentiation(), calculator1.multiplication())
    })

    it("Check substraction of 6 and 2 positive", function () {
        assert.notEqual(calculator1.exponentiation(), calculator1.substraction())
    })
})
