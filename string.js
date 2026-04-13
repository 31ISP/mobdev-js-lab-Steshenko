const sentence = "   javascript - Это просто!   "
const name = "Артём"
const gruppa = "31ИСП"
const ball = "4.75"
const date = "2025-03-15"
const text = "Node.js разработчик"
console.log(sentence.trim().toUpperCase()[0] + sentence.trim().slice(1))
console.log(`Студент Стешенко ${name}, группа:${gruppa}, средний балл: ${ball}`)
const datanash = date.split('-')
console.log(`${datanash[2]}.${datanash[1]}.${datanash[0]}`)
console.log(text.startsWith("Node"),text.endsWith("разработчик"))
console.log("42".padStart(8, "0"))
