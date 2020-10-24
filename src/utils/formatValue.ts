const formatValue = (value: number): string => {
  if (!value) {
    return 'R$ 0,00';
  }

  const newValue = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return newValue;
};

export default formatValue;
