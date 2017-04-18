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
