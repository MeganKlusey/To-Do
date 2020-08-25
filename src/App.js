import React, {useEffect, useState} from 'react';
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import Typography from "@material-ui/core/Typography";

/*
TO-DO LIST APP IDEAS:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
-Confetti when all tasks are complete
-Timer option, for each or all tasks, user tries to
complete tasks quicker each day
-Enter mobile mumber to get updates(?)
*/


const LOCAL_STORAGE_KEY = "react-toDo-list-toDos";

function App() {
	const[toDos, setToDos]=useState([]);
	
	useEffect(() => {
		const storageToDos = 
		JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if(storageToDos){
			setToDos(storageToDos);
		}
	}, []);
	
	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, 
		JSON.stringify(toDos));
	}, [toDos]);
	
	function addToDo(toDo){
		setToDos([toDo, ...toDos]);
	}
	
	function toggleComplete(id){
		setToDos(
		toDos.map(toDo => {
			if(toDo.id === id){
				return {
					...toDo,
					completed: !toDo.completed
			};
		}
			return toDo;
		})
	);
	}
	
	function removeToDo(id){
		setToDos(toDos.filter(toDo => toDo.id !== id));
	}
	
	return(
	<div className="App">
        <Typography style={{padding:16}} variant="h1">
			To-Do List
		</Typography>
		<ToDoForm addToDo={addToDo}/>
		<ToDoList 
		toDos={toDos}
		toggleComplete={toggleComplete}
		removeToDo={removeToDo}
		/>
    </div>
  );
}

export default App;