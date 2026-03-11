import * as error from './error.js'
import * as utils from './common.js'

import { POWER } from './../math-trig.js'
import Decimal from 'decimal.js'

/**
 * Following functions are part of Formula.js only and not found in Excel.
 * Purpose of these functions is to implement an Excel like behaviour for fundamental math symbols such as +, -, /, *, etc.
 */

/**
 * Formula.js only.
 *
 * @param {*} num1
 * @param {*} num2
 * @returns
 */
export function ADD(num1, num2) {
  if (arguments.length !== 2) {
    return error.na
  }

  num1 = utils.parseDecimal(num1)
  num2 = utils.parseDecimal(num2)
  const anyError = utils.anyError(num1, num2)

  if (anyError) {
    return anyError
  }

  return Decimal.add(num1, num2).toNumber()
}

/**
 * Formula.js only
 *
 * @param {*} dividend
 * @param {*} divisor
 * @returns
 */
export function DIVIDE(dividend, divisor) {
  if (arguments.length !== 2) {
    return error.na
  }

  dividend = utils.parseDecimal(dividend)
  divisor = utils.parseDecimal(divisor)
  const anyError = utils.anyError(dividend, divisor)

  if (anyError) {
    return anyError
  }

  if (divisor.isZero()) {
    return error.div0
  }

  return Decimal.div(dividend, divisor).toNumber()
}

/**
 * Formula.js only
 *
 * @param {*} value1
 * @param {*} value2
 * @returns
 */
export function EQ(value1, value2) {
  if (arguments.length !== 2) {
    return error.na
  }

  if (value1 instanceof Error) {
    return value1
  }

  if (value2 instanceof Error) {
    return value2
  }

  if (value1 === null) {
    value1 = undefined
  }

  if (value2 === null) {
    value2 = undefined
  }

  if (value1 instanceof global.BlankValue) {
    value1 = undefined
  }

  if (value2 instanceof global.BlankValue) {
    value2 = undefined
  }

  if (typeof value1 === 'string') {
    value1 = value1.toLowerCase()
  }

  if (typeof value2 === 'string') {
    value2 = value2.toLowerCase()
  }

  if (typeof value1 === 'number' && typeof value2 === 'number') {
    value1 = utils.parseDecimal(value1)
    value2 = utils.parseDecimal(value2)

    return value1.eq(value2)
  } else {
    return value1 === value2
  }
}

/**
 * Formula.js only
 *
 * @param {*} num1
 * @param {*} num2
 * @returns
 */
export function GT(num1, num2) {
  if (arguments.length !== 2) {
    return error.na
  }

  if (utils.anyIsString(num1, num2)) {
    num1 = utils.parseString(num1)
    num2 = utils.parseString(num2)

    const anyError = utils.anyError(num1, num2)

    if (anyError) {
      return anyError
    }

    num1 = num1.toLowerCase()
    num2 = num2.toLowerCase()

    return num1 > num2
  } else {
    num1 = utils.parseDecimal(num1)
    num2 = utils.parseDecimal(num2)

    const anyError = utils.anyError(num1, num2)

    if (anyError) {
      return anyError
    }

    return num1.gt(num2)
  }
}

/**
 * Formula.js only
 *
 * @param {*} num1
 * @param {*} num2
 * @returns
 */
export function GTE(num1, num2) {
  if (arguments.length !== 2) {
    return error.na
  }

  if (utils.anyIsString(num1, num2)) {
    num1 = utils.parseString(num1)
    num2 = utils.parseString(num2)

    const anyError = utils.anyError(num1, num2)

    if (anyError) {
      return anyError
    }

    num1 = num1.toLowerCase()
    num2 = num2.toLowerCase()

    return num1 >= num2
  } else {
    num1 = utils.parseDecimal(num1)
    num2 = utils.parseDecimal(num2)

    const anyError = utils.anyError(num1, num2)

    if (anyError) {
      return anyError
    }

    return num1.gte(num2)
  }
}

/**
 * Formula.js only
 *
 * @param {*} num1
 * @param {*} num2
 * @returns
 */
export function LT(num1, num2) {
  if (arguments.length !== 2) {
    return error.na
  }

  if (utils.anyIsString(num1, num2)) {
    num1 = utils.parseString(num1)
    num2 = utils.parseString(num2)

    const anyError = utils.anyError(num1, num2)

    if (anyError) {
      return anyError
    }

    num1 = num1.toLowerCase()
    num2 = num2.toLowerCase()

    return num1 < num2
  } else {
    num1 = utils.parseDecimal(num1)
    num2 = utils.parseDecimal(num2)

    const anyError = utils.anyError(num1, num2)

    if (anyError) {
      return anyError
    }

    return num1.lt(num2)
  }
}

/**
 * Formula.js only
 *
 * @param {*} num1
 * @param {*} num2
 * @returns
 */
export function LTE(num1, num2) {
  if (arguments.length !== 2) {
    return error.na
  }

  if (utils.anyIsString(num1, num2)) {
    num1 = utils.parseString(num1)
    num2 = utils.parseString(num2)

    const anyError = utils.anyError(num1, num2)

    if (anyError) {
      return anyError
    }

    num1 = num1.toLowerCase()
    num2 = num2.toLowerCase()

    return num1 <= num2
  } else {
    num1 = utils.parseDecimal(num1)
    num2 = utils.parseDecimal(num2)

    const anyError = utils.anyError(num1, num2)

    if (anyError) {
      return anyError
    }

    return num1.lte(num2)
  }
}

/**
 * Formula.js only
 *
 * @param {*} num1
 * @param {*} num2
 * @returns
 */
export function MINUS(num1, num2) {
  if (arguments.length !== 2) {
    return error.na
  }

  num1 = utils.parseDecimal(num1)
  num2 = utils.parseDecimal(num2)
  const anyError = utils.anyError(num1, num2)

  if (anyError) {
    return anyError
  }

  return Decimal.sub(num1, num2).toNumber()
}

/**
 * Formula.js only
 *
 * @param {*} factor1
 * @param {*} factor2
 * @returns
 */
export function MULTIPLY(factor1, factor2) {
  if (arguments.length !== 2) {
    return error.na
  }

  factor1 = utils.parseDecimal(factor1)
  factor2 = utils.parseDecimal(factor2)
  const anyError = utils.anyError(factor1, factor2)

  if (anyError) {
    return anyError
  }

  return Decimal.mul(factor1, factor2).toNumber()
}

/**
 * Formula.js only
 *
 * @param {*} value1
 * @param {*} value2
 * @returns
 */
export function NE(value1, value2) {
  if (arguments.length !== 2) {
    return error.na
  }

  if (value1 instanceof Error) {
    return value1
  }

  if (value2 instanceof Error) {
    return value2
  }

  if (value1 === null) {
    value1 = undefined
  }

  if (value2 === null) {
    value2 = undefined
  }

  if (value1 instanceof global.BlankValue) {
    value1 = undefined
  }

  if (value2 instanceof global.BlankValue) {
    value2 = undefined
  }

  if (typeof value1 === 'string') {
    value1 = value1.toLowerCase()
  }

  if (typeof value2 === 'string') {
    value2 = value2.toLowerCase()
  }

  if (typeof value1 === 'number' && typeof value2 === 'number') {
    value1 = utils.parseDecimal(value1)
    value2 = utils.parseDecimal(value2)

    return !value1.eq(value2)
  } else {
    return value1 !== value2
  }
}

/**
 * Formula.js only
 *
 * @param {*} base
 * @param {*} exponent
 * @returns
 */
export function POW(base, exponent) {
  if (arguments.length !== 2) {
    return error.na
  }

  return POWER(base, exponent)
}
