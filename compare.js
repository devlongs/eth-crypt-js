const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

const a = "apple";
const b = "banana";

// converting a string to bytes
const aBytes = utf8ToBytes(a);
const bBytes = utf8ToBytes(b);

// hashing the bytes
const aHash = sha256(aBytes);
const bHash = sha256(bBytes);

// comparing two hashes
console.log(toHex(aHash) === toHex(aHash)); 
console.log(toHex(aHash) === toHex(bHash)); 