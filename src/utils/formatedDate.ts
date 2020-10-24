const formatedDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('pt-br');
};

export default formatedDate;
