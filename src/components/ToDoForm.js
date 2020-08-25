import React, {useState} from 'react';
import uuid from "uuid";
import {Button, TextField} from "@material-ui/core";

function ToDoForm({addToDo}){
	const[toDo, setToDo]=useState({
		id: "",
		task: "",
		completed: false
	});
	
	function handlesTaskInputChange(e){
		setToDo({...toDo, task: e.target.value});
	}
	
	function handleSubmit(e){
		e.preventDefault();
		if(toDo.task.trim()){
			addToDo({...toDo, id: uuid.v4()});
			setToDo({...toDo, task: ""});
		}
	}
			
	return(
		<form className="ToDo-Form" onSubmit={handleSubmit}>
			<TextField
			label="Task"
			name="task"
			type="text"
			value={toDo.task}
			onChange={handlesTaskInputChange}
			/>
			<Button id="button" type="submit">Submit</Button>
		</form>
	);
}

export default ToDoForm;