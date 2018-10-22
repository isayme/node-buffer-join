module.exports = (arr, separator) => {
  if (!separator) {
    separator = Buffer.alloc(0)
  } else {
    separator = Buffer.from(separator)
  }

  switch (arr.length) {
    case 0:
      return Buffer.alloc(0)
    case 1:
      return arr[0]
    case 2:
      return Buffer.concat([arr[0], separator, arr[1]])
    case 3:
      return Buffer.concat([arr[0], separator, arr[1], separator, arr[2]])
  }

  let result = Buffer.from(arr[0])
  for (let i = 1; i < arr.length; i++) {
    result = Buffer.concat([result, separator, arr[i]])
  }

  return result
}
