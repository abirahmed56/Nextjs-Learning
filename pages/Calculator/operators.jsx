function add(a, b){
    let sum = Number(a)+Number(b);

    return sum;
}
function sub(a, b){
    let minus = a-b;

    return minus;
}
function mul(a, b){
    let multiply = a*b;

    return multiply;
}
function div(a, b){
    let division = a/b;

    division = division.toFixed(2);

    return division;
}

export default {add, sub, mul, div};