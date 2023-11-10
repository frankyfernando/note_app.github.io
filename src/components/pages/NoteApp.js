import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Layout from "./Layout";
import Calender from "./Calender";
import Note from "./Note";
import History from "./History";
function NoteApp() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/layout/" element={<Layout/>}>
        <Route index element={<Calender/>}/>
        <Route path="note" element={<Note/>}/>
        <Route path="history" element={<History/>}/>
      </Route>
    </Routes>
  );
}
export default NoteApp;
