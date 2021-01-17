class ButtonClicks {
    constructor() {}

    restartChain() {
        window.location.reload();
    }

    viewChain() {
        fetch("http://localhost.com/chain")
            .then((res) => res.json())
            .then((data) => console.log(data));
    }

    mineCoin() {
        fetch("http://localhost.com/mine")
            .then((res) => res.json())
            .then((data) => console.log(data));
    }
}
