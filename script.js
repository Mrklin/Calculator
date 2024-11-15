

let input = document.getElementById('display');
let output = document.getElementById('result');




function display(num) {
    
    input.value += num;
}


function clr() {
    // console.log('clear');
    input.value = input.value.slice(0, -1);
}

function del() {
    input.value = "";
    output.innerHTML='';
}

function cal() {
    
    try {
        // input.value = eval(input.value)
        output.innerHTML = `<h2>${eval(input.value)}</h2>`;
    } catch (error) {
        output.innerHTML = `<h1>Error</h1>`;
    }
}

