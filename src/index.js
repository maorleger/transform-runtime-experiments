console.warn("in index.js - expecting no errors as it is transformed")
console.log("[1, 2, 3].includes(3)", [1, 2, 3].includes(3))
console.log("Object.fromEntries([[1, 2], [3, 4]])", Object.fromEntries([[1, 2], [3, 4]]))
console.log("null?.undefined?.toString()", null?.undefined?.toString())

async function main() {
  await new Promise(resolve => setTimeout(resolve, 5000))
}

main().then(() => console.log("done"))
