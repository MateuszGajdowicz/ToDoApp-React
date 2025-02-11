import React, {useState} from "react";

function ToDoApp(){

    const [ToDoList, setToDoList]=useState(["Do Dishes", "Clean the car","Mop the floor"]);

    function handleAddChore(){
        let Chore = document.getElementById("Input").value;
        if(Chore!==""){
            setToDoList(ToDo=>[...ToDo, Chore]);
            document.getElementById("Input").value = "";
            
        }

    }


    return(
        <div className="AppContainer">
            <h1 id="h1">To Do List</h1>
            <ul>
                {ToDoList.map(element=><li>{element} 
                    <button className="ChoreButton">Up</button>
                    <button className="ChoreButton">Down</button>
                    <button className="ChoreButton">Delete</button>
                    </li>)}
            </ul>
            <input id = "Input"type="text"  placeholder="Enter your thing to do" />
            <button id="AddButton" onClick={handleAddChore}>Add</button>
        </div>
    );


}
export default ToDoApp