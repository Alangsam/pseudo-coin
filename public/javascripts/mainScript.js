class ButtonClicks {
    constructor() {
        this.viewChain = this.viewChain.bind(this);
    }

    restartChain() {
        window.location.reload();
    }

    viewChain() {}

    mineCoin() {
        fetch("http://localhost.com/mine")
            .then((res) => res.json())
            .then((data) => console.log(data));
    }
}

function viewChain() {
    console.log("fuck");
    fetch("http://localhost:3000/api/v1/getChain")
        .then((res) => res.json())
        .then((data) => console.log(data.chain))
        .catch((err) => console.log(err));
}
