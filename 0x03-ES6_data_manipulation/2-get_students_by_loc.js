export default function getStudentsByLocation(students, city) {
  const location = students.filter((student) => (student.location === city));
  return location;
}
