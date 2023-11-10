import React from "react";
import { BrowserRouter } from "react-router-dom";
import NoteApp from "./components/pages/NoteApp";
function App() {
  return(
    <BrowserRouter>
      <NoteApp/>
    </BrowserRouter>
  );
}

export default App;
