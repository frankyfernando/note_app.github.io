import React, { useEffect, useState } from "react";
import style from "./Acara.module.css";
import {BiSearch} from "react-icons/bi";
import {MdDelete} from "react-icons/md";
import axios from "axios";
function Acara() {
  const [data, setData] = useState([])
  const getNote = async() => {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.post("http://localhost:3031/layout/acara", {token: token})
      setData(response.data.note)
      console.log(data)
    } catch (error) {
      console.log("gagal mengambil data", error.message)
    }
  }
  const [keyword, setKeyword] = useState("")
  const [filterNote, setFilterNote] = useState([])
  const limitTitle = (title) =>{
    return([...title.slice(0,20), "..."])
  }
  useEffect(()=> {
    getNote()
  },[])
  useEffect(() => {
    const filterContact = setTimeout(()=> {
      setFilterNote([...data.filter((filterNote) => {
        return filterNote.judul.toLowerCase().includes(keyword.toLowerCase())
      })])
    }, 1000)
    return () => {
      clearTimeout(filterContact);
    }
  }, [keyword,data])

  const removeHandler = (index) => {
    const newNotes = [...data]
    newNotes.splice(index, 1)
    setFilterNote(newNotes)
    setData(newNotes)
  }
  const styleSearch = {
    margin: "-38px 250px 0 0",
    fontSize: "20px",
  }
  const removeButton = {
    cursor: "pointer",
    marginRight: "10px",
    fontSize: "20px"
  }
  return (
    <div className={style.container}>
      <input className={style.input} type="text" placeholder="Search" onChange={(e) => {setKeyword(e.target.value)}}/>
      <BiSearch style={styleSearch}/>
      <div refresh={getNote} className={style.Ncontainer}>
        {filterNote.map((data, index) => (
          <div className={style.note} key={index}>
            <div className={style.bcontainer} key={index}>
              <MdDelete style={removeButton} onClick={removeHandler}/>
            </div>
            <h1 className={style.h1}>{data.judul.length >= 20? limitTitle(data.judul) : data.judul}</h1>
            <p className={style.p}>{data.catatan}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Acara;
