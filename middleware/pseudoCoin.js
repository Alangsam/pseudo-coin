const PseudoChain = require("./pseudoChain");
const { validationResult } = require("express-validator");

class PseudoCoin {
    constructor() {
        this.pseudoChain = new PseudoChain();
        this.getChain = this.getChain.bind(this);
        this.mine = this.mine.bind(this);
        this.newTransaction = this.newTransaction.bind(this);
    }
    //on request, returns the current hashed chain(linked list)
    getChain(req, res, next) {
        req.responseValue = {
            message: "Get Chain",
            chain: this.pseudoChain.chain,
        };
        return next();
    }

    mine(req, res, next) {
        const lastBlock = this.pseudoChain.lastBlock();
        const lastProof = lastBlock.proof;
        const proof = this.pseudoChain.proofOfWork(lastProof);

        this.pseudoChain.newTransaction("0", "recipient_name", 1);

        const prevHash = this.pseudoChain.hash(lastBlock);
        const newBlock = this.pseudoChain.newBlock(proof, prevHash);

        const responseValue = Object.assign(
            {
                message: "New Block mined",
            },
            newBlock
        );
        req.responseValue = responseValue;
        return next();
    }

    newTransaction(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() });
        }
        const transaction = req.body;
        const index = this.pseudoChain.newTransaction(
            transaction.sender,
            transaction.receiver,
            transaction.amount
        );
        const responseValue = {
            message: `transaction will be added to Block ${index}`,
        };
        console.log(req.body);
        req.responseValue = responseValue;
        return next();
    }
}

module.exports = new PseudoCoin();
