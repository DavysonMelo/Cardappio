export function parseStringAsArray(arrayAsString: String) {
  return arrayAsString.split(',').map((item) => item.trim());
}

export function parseObsAsArray(arrayAsString: String) {
  return arrayAsString.split(';').map((item) => item.trim());
}
