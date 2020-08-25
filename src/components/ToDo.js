import React from "react";
import {Checkbox, IconButton, ListItem, Typography} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function ToDo({toDo, toggleComplete, removeToDo}){
	function handleCheckboxClick(){
		toggleComplete(toDo.id);
	}
	
	function handleRemoveClick(){
		removeToDo(toDo.id);
	}
		
	return(
	<ListItem style={{display:"flex"}}>
		<Checkbox 
		checked={toDo.completed}
		onClick={handleCheckboxClick} />
		<Typography 
		variant="body1"
		style={{
			textDecoration: toDo.completed ?
			"line-through": null}}
		>
		{toDo.task}
		</Typography>
		<IconButton onClick={handleRemoveClick}>
			<CloseIcon/>
		</IconButton>
	</ListItem>
	);
	}

export default ToDo;