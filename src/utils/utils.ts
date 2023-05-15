export const expresiones = {
  onlyLetters: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{10}$/, // 10 numeros.
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/, // 8 a 15 digitos.
  numerosPositivos: /^\d*$/, // Solo números positivos
  soloLetrasYNumeros: /^[a-zA-Z0-9À-ÿ.,\s]+$/, // Solo letras y numeros
  curp: /^[A-Z]{4}\d{6}[H,M][A-Z]{5}[0-9,A-Z]{2}$/,
  rfc: /^([A-ZÑ&]{3,4})(\d{6})((\D|\d){3})?$/,
  cedulaProfesional: /^[A-Z]{4}\d{6}[A-Z]?\d{2}$/,
  onlyNumbers: /^\d{1,5}$/
}

/**
 * Convierte un tamaño en bytes a una cadena de texto con su equivalente en KB, MB, GB o TB.
 * @param {number} bytes - Tamaño en bytes.
 * @param {number} [decimals=2] - Número de decimales a mostrar en el resultado. Por defecto es 2.
 * @returns {string} Cadena de texto con el tamaño formateado y su unidad correspondiente.
 */
export const formatBytes = (
  bytes: number | undefined,
  decimals: number = 2
): string => {
  if (bytes === undefined) return ''
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}
