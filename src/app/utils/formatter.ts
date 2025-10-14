export function formatarTitulo(title?: string, name?: string): string {
  const texto = title || name || '';
  const maxLength = 25;

  return texto.length > maxLength ? texto.slice(0, maxLength) + '...' : texto;
}

export function formatarData(data?: string): string {
  if (!data) return '';

  const date = new Date(data);

  if (isNaN(date.getTime())) {
    console.warn(`Data inválida recebida em formatarData: ${data}`);
    return data;
  }

  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}