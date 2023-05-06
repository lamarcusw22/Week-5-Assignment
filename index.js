class Student {
    constructor(name, major){
        this.name = name;
        this.major = major;
    }
    describe(){
        return '${this.name} major is ${this.major}.';
    }
}

class School {
    constructor(name) {
        this.name = name;
        this.Students = [];
    }

    addStudent(Student){
        if (Student instanceof Student){
            this.Students.push(Student);
        } else {
            throw new Error('You can only add an instance of Student. Argument is not a student: ${student}');
        }
    }

    describe(){
        return '${this.name} has ${this.Students.length} Students.';
    }

}

class Menu {
    constructor(){
        this.School = [];
        this.selectedSchool = null;
    }

    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch (selection) {
                case '1':
                this.createSchool();
                break;
                case '2':
                this.viewSchool();
                case '3':
                this.deleteSchool();
                case '4':
                this.displaySchool();
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
          0) Exit
          1) Create new School
          2) View School
          3) Delete School
          4) Display all Schools
        `);
      }

    showSchoolOptions(schoolInfo) {
        return prompt(`
          0) Back
          1) Create Student
          2) Delete Student
          -------------------------
          ${schoolInfo}
        `);
      }
      
    
    displaySchools(){
        let schoolString = '';
        for (let i = 0; i < this.schools.length; i++){
            schoolString += i + ')' + this.schools[i].name +'\n'
        }
        alert(schoolString);
    }
    createSchool(){
        let name = prompt('Enter name of new School:');
        this.schools.push(new School(name));
    }
    viewSchool(){
        let index = prompt('Enter the index of the School you would like to view:');
        if (index > -1 && index < this.schools.length){
            this.selectedSchool = this.schools[index];
            let description = 'School Name' + this.selectedSchool.name + '\n';
            for (let i = 0; i < this.selectedSchool.Students.length; i++){
                description += i + ')' + this.selectedSchool.Students[i].name + ' - ' + this.selectedSchool.Students[i].major + '\n';
            }
            
            let selection = this.showSchoolOptions(description)
            switch (selection) {
                case '1':
                    this.createStudent();
                    break;
                case '2':
                    this.deleteStudent();
            }
        }
    }
      
}

let menu = new Menu();
menu.start();