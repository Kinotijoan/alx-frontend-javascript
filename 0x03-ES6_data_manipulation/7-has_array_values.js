export default function hasValuesFromArray(set, arr1) {
  return arr1.every((item) => set.has(item));
}
