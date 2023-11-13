import React, { useEffect, useState } from "react";
import style from "./Acara.module.css";
function Acara(props) {
  const [keyword, setKeyword] = useState("")
  const [filterJd, setFilterJd] = useState([])
  const limitTitle = (title) =>{
    return([...title.slice(0,20), "..."])
  }
  useEffect(() => {
    const filter = setTimeout(()=> {
      setFilterJd([...props.data.filter((filterNote) => {
        return filterNote.judul.toLowerCase().includes(keyword.toLowerCase())
      })])
    }, 500)
    return () => {
      clearTimeout(filter);
    }
  }, [keyword,props.data])

  const removeHandler = (index) => {
    const newNotes = [...filterJd]
    newNotes.splice(index, 1)
    setFilterJd(newNotes)
    props.setData(newNotes)
  }
  return (
    <div className={style.container}>
      <input className={style.input} type="text" placeholder="Search" onChange={(e) => {setKeyword(e.target.value)}}/>
      <div className={style.Ncontainer}>
        {filterJd.map((data, index) => (
          <div className={style.note} key={index}>
            <div className={style.bcontainer} key={index}>
              <button className={style.button} onClick={removeHandler}>x</button>
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
