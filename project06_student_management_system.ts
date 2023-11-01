interface Student {
    id: number;
    name: string;
    age: number;
    grade: string;
  }
  
  class StudentManagementSystem {
    private students: Student[] = [];
    private studentIdCounter: number = 1;
  
    addStudent(student: Student): void {
      student.id = this.studentIdCounter++;
      this.students.push(student);
    }
  
    getStudents(): Student[] {
      return this.students;
    }
  
    updateStudent(updatedStudent: Student): boolean {
      const index = this.students.findIndex((student) => student.id === updatedStudent.id);
      if (index !== -1) {
        this.students[index] = updatedStudent;
        return true;
      }
      return false;
    }
  
    deleteStudent(studentId: number): boolean {
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

  