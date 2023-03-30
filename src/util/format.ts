export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
});

export const { format: formatDecimal } = new Intl.NumberFormat('pt-br', {
  style: 'decimal',
  minimumFractionDigits: 2,
});
