let todo = [];

let req =prompt("Please Enter Your request");

while(true)
{
    if(req == "quit")
    {
        console.log("You quit the app");
        break;
    }

    if(req == "list")
    {
        console.log("-----------------");
        for(let i=0; i<todo.length; i++)
        {
            console.log(i,todo[i]);
        }
        console.log("-----------------");
    }
    else if(req == "add")
    {
        let task = prompt("Add the tasked");
        todo.push(task);
        console.log("Tasked add");
    }
    else if(req == "delete")
    {
        let idx = prompt("Remove the tasked");
        todo.splice(idx,1);
        console.log("Task Remove");
    }
    else
    {
        console.log("Wrong request");
    }
    req =prompt("Please Enter Your request");
}