import {useState,React} from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Layout from "./Layout";
import Calender from "./Calender";
import Acara from "./Acara";
import Create from "./Create";
function NoteApp() {
  const [data, setData] = useState([])
  const inputData = (judul, catatan) => {
    setData([...data, {"judul": judul, "catatan" : catatan}])
  }
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/layout/" element={<Layout/>}>
        <Route index element={<Calender/>}/>
        <Route path="acara" element={<Acara data={data} setData={setData}/>}/>
        <Route path="createnote" element={<Create data={inputData}/>}/>
      </Route>
    </Routes>
  );
}
export default NoteApp;
