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
    } catch (error) {
      console.log("gagal mengambil data", error.message)
    }
  }
  const [keyword, setKeyword] = useState("")
  const [filterNote, setFilterNote] = useState([])
  const limitTitle = (title) =>{
    return([...title.slice(0,20), "..."])
  }
  const removeHandler = async(id) => {
    try {
      const response = await axios.delete(`http://localhost:3031/layout/acara/${id}`)
      console.log(id)
      getNote()
    } catch (error) {
      console.log("delete gagal", error.message)
    }
  }
  useEffect(()=> {
    getNote()
  },[])
  useEffect(()=>{
    setFilterNote(data)
  },[data])
  useEffect(() => {
    const filterContact = setTimeout(()=> {
      setFilterNote([...data.filter((filterNote) => {
        return filterNote.judul.toLowerCase().includes(keyword.toLowerCase())
      })])
    }, 1000)
    return () => {
      clearTimeout(filterContact);
    }
  }, [keyword, data])
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
      <div className={style.Ncontainer}>
        {filterNote.map((data) => (
          <div className={style.note} key={data.id_note}>
            <div className={style.bcontainer} key={data.id_note}>
              <MdDelete style={removeButton} onClick={() => {
                removeHandler(data.id_note)
              }}/>
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
