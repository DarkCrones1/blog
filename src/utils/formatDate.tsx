export function formatDate(date: Date | string): string {
  // Si el valor no es un objeto Date, intenta convertirlo
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  // Verifica si la conversión fue exitosa
  if (isNaN(date.getTime())) {
    throw new Error("El argumento proporcionado no es una fecha válida");
  }

  const year = date.getFullYear();
  const monthIndex = date.getMonth(); // 0-11
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const monthName = monthNames[monthIndex];

  const pad = (num: number) => (num < 10 ? "0" + num : num);

  return `${day} de ${monthName} de ${year} a las ${pad(hours)}:${pad(
    minutes
  )}:${pad(seconds)}`;
}
