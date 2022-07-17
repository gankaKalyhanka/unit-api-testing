export class Calculator {
    arg1: number
    arg2: number

    constructor(arg1: number, arg2: number) {
        this.arg1 = arg1
        this.arg2 = arg2

    }

    sum() {
        return this.arg1 + this.arg2
    }

    substraction() {
        return this.arg1 - this.arg2
    }

    multiplication() {
        return this.arg1 * this.arg2
    }

    division() {
        return this.arg1 / this.arg2
    }

    exponentiation() {
        return this.arg1 ** this.arg2
    }

    checkResult(operation: string, expectedResult: number) {
        let result: number
        switch (operation) {
            case 'sum': {
                result = this.sum()
                if (expectedResult === result) {
                    return "Test has passed"
                } else {
                    return "Test has failed"
                }
                
            }
            case 'substraction': {
                result = this.substraction()
                if (expectedResult === result) {
                    return "Test has passed"
                } else {
                    return "Test has failed"
                }
                
            }
            case 'multiplication': {
                result = this.multiplication()
                if (expectedResult === result) {
                    return "Test has passed"
                } else {
                    return "Test has failed"
                }
                
            }
            case 'division': {
                result = this.division()
                if (expectedResult === result) {
                    return "Test has passed"
                } else {
                    return "Test has failed"
                }
                
            }
            case 'exponentiation': {
                result = this.exponentiation() 
                if (expectedResult === result) {
                    return "Test has passed"
                } else {
                    return "Test has failed"
                }
                
            }
        }

      
    }


}