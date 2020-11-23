function parseStringAsArray(arrayAsString: String) {
  return arrayAsString.split(',').map((tech) => tech.trim());
}

export default parseStringAsArray;
