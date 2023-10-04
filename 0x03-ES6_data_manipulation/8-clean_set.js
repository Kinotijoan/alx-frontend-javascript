export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  return Array.from(set)
    .filter((word) => word.startsWith(startString))
    .map((word) => word.slice(startString.length))
    .join('-');
}
