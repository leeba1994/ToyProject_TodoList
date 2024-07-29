import { Global } from '@emotion/react';
import './App.css';
import { reset } from "./styles/global";
import MainLayout from './components/MainLayout/MainLayout';
import MainContainer from './components/MainContainer/MainContainer';
import Header from './components/Header/Header';
import AllTodolist from './components/AllTodolist/AllTodolist';
import TodolistInput from './components/TodolistInput/TodolistInput';
import CheckedTodolist from './components/CheckedTodolist/CheckedTodolist';
import { useState } from 'react';

function App() {
  const [ todolists, setTodolists ] = useState([]);
  const [ filterTodolists, setFilterTodolists ] = useState([]);
  return (
    <>
      <Global styles={reset}/>
      <MainLayout>
        <Header setTodolists={setTodolists} />
        <TodolistInput todolists={todolists} setTodolists={setTodolists} setFilterTodolists={setFilterTodolists} />
        <MainContainer>
          <AllTodolist setTodolists={setTodolists} filterTodolists={filterTodolists}/>
          <CheckedTodolist setTodolists={setTodolists} filterTodolists={filterTodolists}/>
        </MainContainer>
      </MainLayout>
    </>
  );
}

export default App;
