var Unary = new Object()

/**
 * Trivial
 */
Unary.false = function(operand) {
  return false
}

Unary.true = function(operand) {
  return true
}

Unary.undefined = function(operand) {
  return undefined
}

/**
 * Simple
 */
Unary.not = function(operand) {
  if (typeof operand === 'boolean') {
    return !operand
  } else if (operand === undefined) {
    return undefined
  } else {
    throw("illegal ternary expression.")
  }
}

Unary.identity = function(operand) {
  return operand
}

/**
 * Decoder
 */
var Decode = new Object()
Decode.true = function(operand) {
  if (operand === true) {
    return true
  } else {
    return false
  }
}

Decode.false = function(operand) {
  if (operand === false) {
    return true
  } else {
    return false
  }
}

Decode.undefined = function(operand) {
  if (operand === undefined) {
    return true
  } else {
    return false
  }
}

Unary.decode = Decode

/**
 * Increment/Decrement
 */
Unary.increment = function(operand) {
  if (operand === false) {
    return undefined
  } else if (operand === undefined) {
    return true
  } else if (operand === true) {
    return false
  }
}

Unary.decrement = function(operand) {
  if (operand === false) {
    return true
  } else if (operand === undefined) {
    return false
  } else if (operand === true) {
    return undefined
  }
}

module.exports = Unary
