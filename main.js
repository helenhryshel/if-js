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
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    return new Date().getFullYear() - this.admissionYear;
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
  constructor(studentsData) {
    this.students = studentsData.reduce((acc, item) => {
      acc.push(
        new Student(
          item.firstName,
          item.lastName,
          item.admissionYear,
          item.courseName,
        ),
      );

      return acc;
    }, []);
  }

  getInfo() {
    return this.students
      .sort((a, b) => a.course - b.course)
      .map(
        (student) =>
          `${student.fullName} - ${student.courseName}, ${student.course}`,
      );
  }
}

const students = new Students(studentsData);
console.log(students.getInfo());
