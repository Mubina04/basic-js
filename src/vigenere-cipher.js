const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(text, key) {
    if (!text || !key) throw new Error("Incorrect arguments!");

    return this.process(text, key, "encrypt");
  }

  decrypt(text, key) {
    if (!text || !key) throw new Error("Incorrect arguments!");

    return this.process(text, key, "decrypt");
  }

  process(text, key, mode) {
    text = text.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      let textIndex = this.alphabet.indexOf(char);

      if (textIndex === -1) {
        result += char; // Belgilar (bo'sh joylar, tinish belgilar) o'zgarishsiz qoladi.
        continue;
      }

      let keyChar = key[keyIndex % key.length];
      let keyShift = this.alphabet.indexOf(keyChar);

      let newIndex;
      if (mode === "encrypt") {
        newIndex = (textIndex + keyShift) % this.alphabet.length;
      } else {
        newIndex =
          (textIndex - keyShift + this.alphabet.length) % this.alphabet.length;
      }

      result += this.alphabet[newIndex];
      keyIndex++;
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
