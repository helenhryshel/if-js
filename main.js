class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const User1 = new User('Ann', 'Hint');

console.log(User1.fullName);

console.log('---------------');

class Student extends User {
  constructor(
    firstName,
    lastName,
    admissionYear,
    courseName,
    currentYear = 2023)
  {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.currentYear = currentYear;
    this.courseName = courseName;
  }
  get course() {
    return this.currentYear - this.admissionYear;
  }
}

const student1 = new Student('Василий', 'Петров', 2019, 'Java');

console.log(student1);

console.log('---------------');

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

class Students {
  constructor(array) {
    this.array = array;
  }
  getInfo() {
    const sortStList = [];
    this.array.forEach((element) => {
      const student = new Student(
        element.firstName,
        element.lastName,
        element.admissionYear,
        element.courseName,
      );
      sortStList.push(student);
    });
    sortStList.sort(function (a, b) {
      return a['course'] - b['course'];
    });
    const result = [];
    sortStList.forEach((element) => {
      result.push(`${element.fullName} - ${element.courseName}, ${element.course} курс`);
    });

    return result;
  }
}

const students = new Students(studentsData);
console.log(students.getInfo());
