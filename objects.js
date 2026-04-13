const book = {
  title: "«Мастер и Маргарита»",
  author: "Булгаков М.А.",
  year: 1967,
  pages: 480,
  available: true,
 info() {
    return `${this.title}, ${this.author}, ${this.year} г., ${this.pages} стр.`
  }
}
const { title, author, rating = 0} = book
const students = [
  { name: "Анна", grade: 4.8, passed: true },
  { name: "Борис", grade: 2.9, passed: false },
  { name: "Вера", grade: 3.5, passed: true },
  { name: "Григорий", grade: 4.1, passed: true },
  { name: "Дарья", grade: 2.5, passed: false },
]
const passedStudentsNames = students
  .filter(student => student.passed === true)
  .map(student => student.name);
  const highAchiever = students.find(student => student.grade > 4.5);
const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
const averageGrade = totalGrade / students.length;

function mergeUsers(user1, user2) {
  return { ...user1, ...user2 };
}
const u1 = { name: "Иван", age: 20, city: "Казань" }
const u2 = { name: "Иван Петров", email: "ivan@mail.ru", city: "Москва" }
const merged = mergeUsers(u1, u2);

function countByField(arr, field) {
  return arr.reduce((counter, item) => {
    const value = item[field];
    counter[value] = (counter[value] || 0) + 1;
    return counter;
  }, {});
}
const passedCount = countByField(students, "passed");
console.log("Название:", title)
console.log("Автор:", author)
console.log("Рейтинг:", rating)
console.log(book.info())
console.log("Сдавшие студенты:", passedStudentsNames);
console.log("Студент с оценкой выше 4.5:", highAchiever);
console.log("Средний балл группы:", averageGrade.toFixed(2));
console.log(merged);
console.log(passedCount);