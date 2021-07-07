function getLargest(array) {
  return array
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join('');
}

console.log(getLargest([1, 3, 34, 44, 4, 45, 100, 76, 9, 98, 23]));
