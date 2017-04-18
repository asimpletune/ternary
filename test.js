var Ternary = require('./main.js')
var u = Ternary.Unary
var d = Ternary.Didadic

testUnary()
testDidadic()

function testUnary() {
  falseTest()
  trueTest()
  undefinedTest()
  notTest()
  identityTest()
  incrementTest()
  decrementTest()
}

function falseTest() {
  console.log('false test:', Boolean(
    u.false(false) === false &
    u.false(undefined) === false &
    u.false(true) === false
  ) ? 'PASS' : 'FAIL')
}

function trueTest() {
  console.log('true test:', Boolean(
    u.true(false) === true &
    u.true(undefined) === true &
    u.true(true) === true
  ) ? 'PASS' : 'FAIL')
}

function undefinedTest() {
  console.log('undefined test:', Boolean(
    u.undefined(false) === undefined &
    u.undefined(undefined) === undefined &
    u.undefined(true) === undefined
  ) ? 'PASS' : 'FAIL')
}

function notTest() {
  console.log('not test:', Boolean(
    u.not(false) === true &
    u.not(undefined) === undefined &
    u.not(true) === false
  ) ? 'PASS' : 'FAIL')
}

function identityTest() {
  console.log('identity test:', Boolean(
    u.identity(false) === false &
    u.identity(undefined) === undefined &
    u.identity(true) === true
  ) ? 'PASS' : 'FAIL')
}

function incrementTest() {
  console.log('increment test:', Boolean(
    u.increment(false) === undefined &
    u.increment(undefined) === true &
    u.increment(true) === false
  ) ? 'PASS' : 'FAIL')
}

function decrementTest() {
  console.log('decrement test:', Boolean(
    u.decrement(false) === true &
    u.decrement(undefined) === false &
    u.decrement(true) === undefined
  ) ? 'PASS' : 'FAIL')
}

function testDidadic() {
  testXOR()
  testAND()
  testOR()
}

function testOR() {
  console.log('OR Test:', Boolean(
    d.or(false, false) === false &
    d.or(undefined, false) === undefined &
    d.or(true, false) === true &
    d.or(false, undefined) === undefined &
    d.or(undefined, undefined) === undefined &
    d.or(true, undefined) === true &
    d.or(false, true) === true &
    d.or(undefined, true) === true &
    d.or(true, true) === true) ? 'PASS' : 'FAIL')
}

function testAND() {
  console.log('AND Test:', Boolean(
    d.and(false, false) === false &
    d.and(undefined, false) === false &
    d.and(true, false) === false &
    d.and(false, undefined) === false &
    d.and(undefined, undefined) === undefined &
    d.and(true, undefined) === undefined &
    d.and(false, true) === false &
    d.and(undefined, true) === undefined &
    d.and(true, true) === true) ? 'PASS' : 'FAIL')
}

function testXOR() {
  console.log('XOR Test:', Boolean(
    d.xor(false, false) === false &
    d.xor(undefined, false) === undefined &
    d.xor(true, false) === true &
    d.xor(false, undefined) === undefined &
    d.xor(undefined, undefined) === undefined &
    d.xor(true, undefined) === undefined &
    d.xor(false, true) === true &
    d.xor(undefined, true) === undefined &
    d.xor(true, true) === false) ? 'PASS' : 'FAIL')
}

function testDidadic() {
  testXOR()
  testAND()
  testOR()
}
