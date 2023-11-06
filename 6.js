const list = {
    defPrice: [10000, 10000, 500],
    radio: {
        r0: 1,
        r1: 2,
        r2: 3
    },
    check: 1000
};


function update() {
    console.log("changed");
    let select = document.getElementById("select");
    let result = 0;
    let radioD = document.getElementById("radios");
    let checkD = document.getElementById("checkD");

    switch (select.value) {
        case "0":
            radioD.style.display = "block";
            checkD.style.display = "flex";
            result = list.defPrice[Number(select.value)];
            break;
        case "1":
            radioD.style.display = "block";
            checkD.style.display = "none";
            result = list.defPrice[Number(select.value)];
            break;
        case "2":
            radioD.style.display = "none";
            checkD.style.display = "flex";
            result = list.defPrice[Number(select.value)];
            break;
        default:
            alert("нет таких значений");
    }


    let radio = document.getElementsByName("radio");
    radio.forEach((e) => {
        if (radioD.style.display === "block"){
            if (e.checked) {
                let price = list.radio[e.value];
                result *= price;
            }
        }
    });

    let check = document.getElementById("checkbox");

    if(checkD.style.display === "flex") {
        if (check.checked) {
            result += list.check;
        }
    }

    const count = document.getElementById('Count');
    result = result*count.value;

    let endPrice = document.getElementById("result");
    endPrice.value = result;
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded and parsed");
    let select = document.getElementById("select");
    select.addEventListener("change", update);

    const count = document.getElementById('Count');
    count.addEventListener('change', update)

    let radio = document.getElementsByName("radio");
    radio.forEach((e) => {
        e.addEventListener("change", update);
    });

    let check = document.getElementById("checkbox");
    check.addEventListener("change", update);

});

update();
