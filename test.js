var d = require('./main.js').Didadic

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
    d.or(true, true) === true) ? 'PASS' : 'FAIL');
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
    d.and(true, true) === true) ? 'PASS' : 'FAIL');
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
    d.xor(true, true) === false) ? 'PASS' : 'FAIL');
}

testXOR()
testAND()
testOR()
