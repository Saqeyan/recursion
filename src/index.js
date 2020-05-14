const pow = (a , n) => n == 1 ? a : a * pow(a, n - 1);
console.log(pow(5, 4));