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
    function handleUpChore(index){
        if(index>0){
            const updatedList = [...ToDoList];
            [updatedList[index], updatedList[index-1]]=
            [updatedList[index-1],updatedList[index]];
            setToDoList(updatedList);

        }


    }
    function handleDownChore(index){
        if(index<ToDoList.length-1){
            const updatedList = [...ToDoList];
            [updatedList[index+1], updatedList[index]]=
            [updatedList[index],updatedList[index+1]];
            setToDoList(updatedList);
            
        }


    }
    function handleDelete(index){
        const UpdatedList = ToDoList.filter((element,i)=>i!==index);
        setToDoList(UpdatedList);


    }


    return(
        <div className="AppContainer">
            <h1 id="h1">To Do List</h1>
            <ul>
                {ToDoList.map((element, index)=><li key={index}>
                    {element} 
                    <button id="button1"className="ChoreButton"onClick={()=>handleUpChore(index)}>Up</button>
                    <button id="button2"className="ChoreButton"onClick={()=>handleDownChore(index)}>Down</button>
                    <button id="button3"className="ChoreButton"onClick={()=>handleDelete(index)}>Delete</button>
                    </li>)}
            </ul>
            <input id = "Input"type="text"  placeholder="Enter your thing to do" />
            <button id="AddButton" className="ChoreButton"onClick={handleAddChore}>Add</button>
        </div>
    );


}
export default ToDoApp