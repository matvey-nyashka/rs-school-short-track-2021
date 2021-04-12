/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr = [];
  let index;
  let flag;
  let count;
  let test;
  for (let i = 0; i < names.length; i++) {
    count = 1;
    if (arr.includes(names[i])) {
      flag = false;
      index = arr.indexOf(names[i]);
    } else {
      arr.push(names[i]);
    }
    while (flag === false) {
      test = `${arr[index]}(${count})`;
      if (arr.includes(test)) {
        count++;
      } else {
        arr.push(test);
        flag = true;
      }
    }
  }
  return arr;
}

module.exports = renameFiles;
