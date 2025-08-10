module.exports = function toReadable(n) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (n < 10) return ones[n];
  if (n >= 10 && n < 20) return teens[n - 10];
  if (n < 100) {
    const firstN = Math.floor(n / 10);
    const secondN = n % 10;
    if (secondN === 0) return tens[firstN];
    return `${tens[firstN]} ${ones[secondN]}`;
  }
  if (n < 1000) {
    const firstN = Math.floor(n / 100);
    const secondN = n % 100;
    return `${ones[firstN]} hundred${secondN ? ` ${toReadable(secondN)}` : ''}`;
  }

  return n;
};
