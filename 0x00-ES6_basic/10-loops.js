export default function appendToEachArrayValue(array, appendString) {
  const arrayCopy = [...array];
  let i = 0;
  for (const el of array) {
    arrayCopy[i] = appendString + el;
    i += 1;
  }

  return arrayCopy;
}
