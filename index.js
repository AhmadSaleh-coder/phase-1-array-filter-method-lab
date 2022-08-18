

function findMatching(arr, str) {
    return arr.filter((el) => el.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(arr, str) {
    return arr.filter((el) => el.substring(0, str.length) === str)
}

function matchName(arr, str) {
    return arr.filter((el) => el.name === str)
}

