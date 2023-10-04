export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const newArray = Array.from(set).filter((x) => x.startsWith(startString));

  const slicedArray = [];

  for (let i = 0; i < newArray.length; i += 1) {
    slicedArray.push(newArray[i].slice(startString.length));
  }

  const joinedArray = slicedArray.join('-');
  return joinedArray;
}
