export default function updateStudentGradeByCity(studentList, city, newGrades) {
    return studentList
      .filter((student) => student.location === city)
      .map((student) => {
        newGrades.forEach((gradeObject) => {
          if (gradeObject.studentId === student.id) {
            student.grade = gradeObject.grade;
          } else {
            student.grade = 'N/A';
          }
        });
      });
  }
  