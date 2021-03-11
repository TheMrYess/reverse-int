module.exports = function reverse (n) {
    n=Math.abs(n);
    n=String(n);
    n=n.split("").reverse().join("");
    return Number(n);
}
