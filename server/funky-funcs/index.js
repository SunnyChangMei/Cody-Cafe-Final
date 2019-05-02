const intersection = (arr1, arr2) => {
  const uniqueArr = [];
  for (let i = 0; i < arr1.length; i++) {
    const element1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const element2 = arr2[j];
      if (element1 !== element2) {
        uniqueArr.push(element2);
      } else {
        return uniqueArr;
      }
    }
  }
  return uniqueArr;
};

const flattenDeep = arr => {};

const flipArguments = func => {};

const invert = obj => {};

const camelCase = str => {};

module.exports = {
  intersection,
  flattenDeep,
  flipArguments,
  invert,
  camelCase
};
