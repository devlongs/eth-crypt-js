const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash'
function findColor(hash) {
    return COLORS.find(x => toHex(sha256(utf8ToBytes(x))) === toHex(hash));
}

console.log(findColor("b1f51a511f1da0cd348b8f8598db32e61cb963e5fc69e2b41485bf99590ed75a"))