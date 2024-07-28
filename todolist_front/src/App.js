import { Global } from '@emotion/react';
import './App.css';
import { reset } from "./styles/global";
import MainLayout from './components/MainLayout/MainLayout';
import MainContainer from './components/MainContainer/MainContainer';
import Header from './components/Header/Header';
import AllTodolist from './components/AllTodolist/AllTodolist';
import TodolistInput from './components/TodolistInput/TodolistInput';
import CheckedTodolist from './components/CheckedTodolist/AllTodolist';
import { useState } from 'react';

function App() {
  const [ checkedId, setCheckedId ] = useState(0);
  const [ todolists, setTodolists ] = useState([]);
  return (
    <>
      <Global styles={reset}/>
      <MainLayout>
        <Header checkedId={checkedId} setCheckedId={setCheckedId} setTodolists={setTodolists}  />
        <TodolistInput />
        <MainContainer>
          <AllTodolist todolists={todolists} setTodolists={setTodolists}/>
          <CheckedTodolist todolists={todolists} setTodolists={setTodolists}/>
        </MainContainer>
      </MainLayout>
    </>
  );
}

export default App;
