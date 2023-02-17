const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes, toHex } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    return toHex(keccak256(utf8ToBytes(message)));
}

let hashedValue = hashMessage("Hello washington!")
console.log(hashedValue)