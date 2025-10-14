export function formatarTitulo(title?: string, name?: string): string {
  const texto = title || name || '';
  const maxLength = 25;

  return texto.length > maxLength ? texto.slice(0, maxLength) + '...' : texto;
}
