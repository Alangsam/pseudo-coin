const crypto = require("crypto");

class PseudoChain {
  constructor() {
    this.chain = [];
    this.current_transactions = [];

    this.newBlock = this.newBlock.bind(this);
    this.newTransaction = this.newTransaction.bind(this);
    this.lastBlock = this.lastBlock.bind(this);
    this.proofOfWork = this.proofOfWork.bind(this);

    this.newBlock(
      100,
      "733e94fcb44e5efce185f8f3560d67412b5ff4de063e256a02914cf7b6bc1757"
    );
  }
  //takes a proof, and a previous hash,
  //create new block in the chain
  //add new block to chain
  //reset current_transactions
  //return new block
  newBlock(proof, previousHash) {
    const block = {
      index: this.chain.length + 1,
      timeStamp: new Date(),
      transactions: this.current_transactions,
      proof,
      previousHash,
    };
    this.current_transactions = [];
    this.chain.push(block);
    return block;
  }

  //create a new transaction, to be saved in next block
  newTransaction(sender, receiver, amount) {
    this.current_transactions.push({
      sender,
      receiver,
      amount,
    });
    return this.lastBlock()["index"] + 1;
  }

  //hash function that hashes block
  hash(block) {
    const blockString = JSON.stringify(block);
    const hash = crypto
      .createHmac("sha256", "420")
      .update(blockString)
      .digest("hex");

    return hash;
  }

  //returns hashed previous block in the chain
  lastBlock() {
    return this.chain.slice(-1)[0];
  }
  //determines whether attempted solution hash matches pattern
  //hash key is 420
  //solution hash is made up of previous block hashed, then combined with new number
  //pattern is first character must match a
  validProof(lastProof, proof) {
    const guessHash = crypto
      .createHmac("sha256", "420")
      .update(`${lastProof}${proof}`)
      .digest("hex");
    return guessHash.substr(0, 1) === "a";
  }

  //start at 0, increment until hashes match
  //then return hash that matched
  proofOfWork(lastProof) {
    let proof = 0;
    while (true) {
      if (!this.validProof(lastProof, proof)) {
        proof++;
      } else {
        break;
      }
    }
    return proof;
  }
}

module.exports = PseudoChain;
