const intersection = (...arrs) => {
  const rtn = []
  for (let i = 0; i < arrs.length; i++) {
    for (let j = i + 1; j < arrs.length; j++) {
      const matches = arrs[i].filter(x => arrs[j].find(y => y === x))
      rtn.push(...matches.filter(m => rtn.indexOf(m) === -1))
    }
  }
  return rtn
}

const flattenDeep = (arr) => {
  return arr.reduce((rtn, next) => {
    return Array.isArray(next)
      ? rtn.concat(flattenDeep(next))
      : rtn.concat(next)
  }, [])
}

const flipArguments = (func) => {
  return (...args) => {
    return func(...args.reverse())
  }
}

const invert = (obj) => {
  const rtn = {}
  for (let key in obj) {
    const val = obj[key]
    rtn[val] = key
  }
  return rtn
}

const camelCase = (str) => {
  const arr = str
    .replace(/_+/gi, ' ')
    .split(/\s+/gi)
    .filter(i => i)
  return arr.reduce((s, n, i) => {
    return i === 0
      ? `${n[0].toLowerCase()}${n.slice(1)}`
      : `${s}${n[0].toUpperCase()}${n.slice(1)}`
  }, '')
}

module.exports = {
  intersection,
  flattenDeep,
  flipArguments,
  invert,
  camelCase
}
