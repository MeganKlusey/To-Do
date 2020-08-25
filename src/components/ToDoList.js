import React from "react";
import ToDo from "./ToDo";
import {List} from "@material-ui/core";

function ToDoList({toDos, toggleComplete, removeToDo}){
	
	return(
	<List>
		{toDos.map(toDo => (
	<ToDo 
		key={toDo.id} 
		toDo = {toDo} 
		toggleComplete={toggleComplete}
		removeToDo={removeToDo}
	/>
	))}
	</List>
	);
}

export default ToDoList;