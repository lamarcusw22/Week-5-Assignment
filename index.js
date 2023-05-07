class Student {                  //I created a class called student.
    constructor(name, major){    //I used two arguement for the constructor method being name and major as the properties of the object.
        this.name = name;
        this.major = major;
    }
    describe(){    //I then defined a method called describe that would return a string that has the name and the major of the student.
        return '${this.name} major is ${this.major}.';  
    }
}

class School {         // I created a class called school with a constructor method that has one parameter.
    constructor(name) {
        this.name = name; // I set the name property to the value passed in the arguement.
        this.Students = []; // I created an empty array called students in the object.
    }

    addStudent(Student){  //I defined a method called addStudent that accepts one parameter.
        if (Student instanceof Student){  // Check if the parameter is an instance of the 'student' class
            this.Students.push(Student); //If it is, it will add to the "Students" array.
        } else { // If it's not then it will throw an error.
            throw new Error('You can only add an instance of Student. Argument is not a student: ${student}');
        }
    }

    describe(){    // Defined another method called 'describe'
        return '${this.name} has ${this.Students.length} Students.'; // Return a string that includes the name of the school and the number of students in the "students" array.
    }

}

class Menu { //I then created a class called 'menu'
    constructor(){ 
        this.schools = [];  //Created an empty array for schools and then set selectedschool to null.
        this.selectedSchool = null;
    }

    start(){    //I defined a method called 'start'.
        let selection = this.showMainMenuOptions();   //called this showMainMenuOption and store the result in a var called selection.
        while (selection != 0){  //I created a loop that runs as long as the var 'selection' is not equal to 0
            switch (selection) {  //Used a switch statement to perform different acctions depending on the value in the variable.
                case '1':
                this.createSchool();            //created each case for the menu items on the html page.
                break;
                case '2':
                this.viewSchool();
                break;
                case '3':
                this.deleteSchool();
                break;
                case '4':
                this.displaySchool();
                break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions(); //call the method to store the result in the variable.
        }
        alert('Goodbye!');  //Alert message when the loop ends.
    }

    showMainMenuOptions() {  //defined a method call showMainMenuOptions and used the prompt function to show a menu and to get user input.
        return prompt(`
          0) Exit
          1) Create new School
          2) View School
          3) Delete School
          4) Display all Schools
        `);
      }

    showSchoolOptions(schoolInfo) {  //Created a function to display the option for a school to create or delete a student.
        return prompt(`
          0) Back
          1) Create Student
          2) Delete Student
          -------------------------
          ${schoolInfo}
        `);
      }
      
    
    displaySchools(){    // Created a function to display the list of all the schools created.
        let schoolString = '';   // created an empty string for the list of schools.
        for (let i = 0; i < this.schools.length; i++){   // Created a loop to go through the array of schools and add schools to the string.
            schoolString += i + ')' + this.schools[i].name +'\n'
        }
        alert(schoolString); //Show the list of schools using alert.
    }
    createSchool(){  // create a function to create a school.
        let name = prompt('Enter name of new School:'); // User ability to enter a name of the new school.
        this.schools.push(new School(name)); // push the new school to the array of schools.
    }
    viewSchool(){ // function to view the schools and additional options.
        let index = prompt('Enter the index of the School you would like to view:'); //User ability to enter the index to find a school.
        if (index > -1 && index < this.schools.length){  //Check to see if the index is valid and set the school and display the info pertaining to the school.
            this.selectedSchool = this.schools[index];
            let description = 'School Name' + this.selectedSchool.name + '\n';
            for (let i = 0; i < this.selectedSchool.Students.length; i++){
                description += i + ')' + this.selectedSchool.Students[i].name + ' - ' + this.selectedSchool.Students[i].major + '\n';
            }
            
            let selection = this.showSchoolOptions(description)  //Within the view of the school give the user an ability to create or delete a student.
            switch (selection) {
                case '1':
                    this.createStudent();
                    break;
                case '2':
                    this.deleteStudent();
            }
        }
    }
    deleteSchool(){ //Create a function to delete schools using the splice method.
        let index = prompt('Enter the index of the school you would like to delete:');
        if (index > -1 && index < this.schools.length){
            this.schools.splice(index,1);
        }
    }

    createStudent(){ //created a function to create a student and to assign the student a major.
        let name = prompt('Enter name for new student:');
        let major = prompt('Enter major for new student:');
        this.selectedSchool.Students.push(new Student(name,major));
    }

    deleteStudent(){ //Created another function to delete a student from the array.
        let index = prompt('Enter the index of the student you would like to delete:');
        if (index > -1 && index < this.selectedSchool.Students.length){
            this.selectedSchool.Students.splice(index,1);
        }
    }

      
}

let menu = new Menu(); //Assign the variable Menu and the properties of it.
menu.start(); //Call the function.