let todo = [];

let req = prompt("Please enter your request: ");

while(true) {

    if (req == 'quit') {
        console.log("Quitting App...");
        break;
    }

    if (req == 'list') {
        console.log('--------------');
        for (let i = 0; i<todo.length; i++) {
            console.log(i+1, todo[i]);
        }
        console.log('--------------');
    }
    else if (req == 'add') {
        let task = prompt("Please enter your task you want to add: ");
        todo.push(task);
        console.log(`${task} added successfully!`);
    }
    else if(req == 'delete'){
        let num = prompt("Please enter your task number: ");
        let del = todo.splice(num-1, 1);
        console.log(`${del} deleted successfully!`)
    }
    else{
        console.log("You've entered wrong request!")
    }

    req = prompt("Please enter your request: ");
}