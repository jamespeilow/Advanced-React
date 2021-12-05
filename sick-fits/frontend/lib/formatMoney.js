export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: amount % 100 === 0 ? 0 : 2,
  };

  const formatter = new Intl.NumberFormat('en-GB', options);

  return formatter.format(amount / 100);
}
