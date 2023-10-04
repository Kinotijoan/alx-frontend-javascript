export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const newArray = Array.from(set).filter(x => x.startsWith(startString));

  let slicedArray = [];

  for (let i=0; i < newArray.length; i++) {
    slicedArray.push(newArray[i].slice(startString.length));
  };
  
  const joinedArray = slicedArray.join('-');
  return joinedArray;
}
