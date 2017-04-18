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
  checkOperands([operand])
  if (typeof operand === 'boolean') {
    return !operand
  } else if (operand === undefined) {
    return undefined
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
  checkOperands([operand])
  if (operand === true) {
    return true
  } else {
    return false
  }
}

Decode.false = function(operand) {
  checkOperands([operand])
  if (operand === false) {
    return true
  } else {
    return false
  }
}

Decode.undefined = function(operand) {
  checkOperands([operand])
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
  checkOperands([operand])
  if (operand === false) {
    return undefined
  } else if (operand === undefined) {
    return true
  } else if (operand === true) {
    return false
  }
}

Unary.decrement = function(operand) {
  checkOperands([operand])
  if (operand === false) {
    return true
  } else if (operand === undefined) {
    return false
  } else if (operand === true) {
    return undefined
  }
}

var Didadic = new Object()

/**
 * And, or, xor
 */
Didadic.and = function(A, B) {
  checkOperands([A, B])
  if (typeof A === 'boolean') {
    return A && B
  } else {
    return B && A
  }
}

Didadic.or = function(A, B) {
  checkOperands([A, B])
  if (typeof A === 'boolean') {
    return A || B
  } else {
    return B || A
  }
}

Didadic.xor = function(A, B) {
  checkOperands([A, B])
  if (A === undefined || B === undefined) {
    return undefined
  } else {
    return Boolean(A ^ B)
  }
}

/**
 * Helpers
 */
function checkOperands(operands) {
  if (operands.length <= 0) return
  var op = operands[0]
  if (!(typeof op === 'boolean' || op === undefined)) {
    throw("Impropers operand types")
  }
  checkOperands(operands.slice(1))
}

module.exports = { Didadic, Unary }
