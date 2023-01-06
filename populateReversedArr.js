//Convert number to reversed array of digits

console.log(digitize(123));
function digitize(n) {
    return Array.from(String(n), Number).reverse();
}