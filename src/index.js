module.exports = function reverse (n) {
    n = n.toString(10).split('').reverse().join('');
  
    return parseInt(n, 10);
}
