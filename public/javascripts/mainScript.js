function viewChain() {
    console.log("fuck");
    fetch("http://localhost:3000/api/v1/getChain")
        .then((res) => res.json())
        .then((data) => console.log(data.chain))
        .catch((err) => console.log(err));
}

function mineCoin() {
    console.log("fuck");
    fetch("http://localhost:3000/api/v1/mineCoin")
        .then((res) => res.json())
        .then((data) => console.log(data.chain))
        .catch((err) => console.log(err));
}

function newTransaction() {
    const fromKey = document.getElementById("from-key-input").value;
    const destinationKey = document.getElementById("destination-key-input")
        .value;
    const transValue = document.getElementById("amount-input").value;
    console.log(fromKey, destinationKey, transValue);
    console.log("fuck");
    fetch("http://localhost:3000/api/v1/newTransaction", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            sender: fromKey,
            receiver: destinationKey,
            amount: transValue,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data.chain);
            document.getElementById("from-key-input").value = "";
            document.getElementById("destination-key-input").value = "";
            document.getElementById("amount-input").value = "";
        })
        .catch((err) => console.log(err));
}
