"use strict";
class StudentManagementSystem {
    constructor() {
        this.students = [];
        this.studentIdCounter = 1;
    }
    addStudent(student) {
        student.id = this.studentIdCounter++;
        this.students.push(student);
    }
    getStudents() {
        return this.students;
    }
    updateStudent(updatedStudent) {
        const index = this.students.findIndex((student) => student.id === updatedStudent.id);
        if (index !== -1) {
            this.students[index] = updatedStudent;
            return true;
        }
        return false;
    }
    deleteStudent(studentId) {
        const index = this.students.findIndex((student) => student.id === studentId);
        if (index !== -1) {
            this.students.splice(index, 1);
            return true;
        }
        return false;
    }
}
// Example usage:
const sms = new StudentManagementSystem();
sms.addStudent({ name: 'John', age: 20, grade: 'A' });
sms.addStudent({ name: 'Jane', age: 22, grade: 'B' });
console.log(sms.getStudents()); // List of students
