// Create an Object to store Todo List
// const toDoList = { };

// // Take task input
// let taskInstruction = prompt("What would you like to do?");

// // Count the number of task entered
// let num = 0;


// // when the taskInstruction is "list", the App prints out the whole list
// // when the taskInstruction is "quit", the App quits and prints out 
// // when the taskInstruction is "delete", the App asks which Todo Item to be deleted and delete it
// // When the taskInstruction is "new", the App gets the user to enter new tasks

// // while taskInstruction is either "list" or "new" or anything else, the App will always ask "What to do"

// while (taskInstruction !== 'quit'){
//     if (taskInstruction === 'list') {
//         for (let toDoItem in toDoList) {
//             console.log(`${toDoItem}:${toDoList[toDoItem]}`);
//         }
//     } else if (taskInstruction === 'delete') {
//         let toDeleteIndex = parseInt(prompt("Enter index of todo to delete:"));
//         if (!toDoList[toDeleteIndex]) {
//             console.log(`${toDeleteIndex} does not exist, please re-enter!`);
//             toDeleteIndex = parseInt(prompt("Enter index of todo to delete:"));
//         }
//         delete toDoList[toDeleteIndex];
//         console.log(`Todo List Item ${toDeleteIndex} has been removed!`);
//     } else if (taskInstruction === 'new') {
//         let newTask = prompt("Enter new task:");
//         toDoList[num] = newTask;
//         console.log(`${newTask} added to list`);
//         num++;
//     } else {
//         console.log("Instruction is not recognized, please re-enter!")
//     }
//     taskInstruction = prompt("What would you like to do?");
// }

// console.log("ok, you quit the App.");

// delete a index, other index doesnt move up
// need to print out the added task


// **************
// The problem with the above code is that it is unable to reorder the toDoList key number once you delete any tasks before the final task

// Udemy used array list to store tasks to avoid having to change Object key value number later on
const toDoList = [ ];

// Take task input
let taskInstruction = prompt("What would you like to do?");

while (taskInstruction !== 'quit'){
    if (taskInstruction === 'list') {
        for (let toDoItem = 0; toDoItem < toDoList.length; toDoItem++) {
            console.log(`${toDoItem}: ${toDoList[toDoItem]}`);
        }
    } else if (taskInstruction === 'delete') {
        let toDeleteIndex = parseInt(prompt("Enter index of todo to delete:"));

        // Udemy used: Number.isNaN(toDeleteIndex) to test if the delete index exists
        if (!toDoList[toDeleteIndex]) {
            console.log(`${toDeleteIndex} does not exist, please re-enter!`);
            toDeleteIndex = parseInt(prompt("Enter index of todo to delete:"));
        } else {
            toDoList.splice(toDeleteIndex, 1);
            console.log(`Todo List Item ${toDeleteIndex} has been removed!`);
        }
    } else if (taskInstruction === 'new') {
        let newTask = prompt("Enter new task:");
        toDoList.push(newTask);
        console.log(`${newTask} added to list`);
    } else {
        console.log("Instruction is not recognized, please re-enter!")
    }
    taskInstruction = prompt("What would you like to do?");
}

console.log("ok, you quit the App.");