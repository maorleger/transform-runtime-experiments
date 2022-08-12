console.warn("In manual.js - expecting errors below")

try {
  console.log([1, 2, 3].includes(3))

} catch (err) { console.log(err) }
try {
  console.log(Object.fromEntries([[1, 2], [3, 4]]))
} catch (err) { console.log(err) }

try {
  Promise.resolve(42).then(v => console.log(v))
} catch (err) { console.log(err) }
