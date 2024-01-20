import {useState, React} from "react";
import style from "./Create.module.css";
import axios from "axios";
function Create(props) {
    const [judul, setJudul] = useState("")
    const [catatan, setCatatan] = useState("")
    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        const token = localStorage.getItem("token")
        const response = await axios.post("http://localhost:3031/layout/createnote", {
          token: token,
          judul: judul,
          catatan: catatan,
        })
      } catch (error) {
        console.log("gagal input", error.message)
      }
      setJudul("")
      setCatatan("")
    }
    const simpan = () =>{
      props.data(judul, catatan)
    }
    const batal = () =>{
      setJudul("")
      setCatatan("")
    }
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input className={style.input} value={judul} onChange={(e) => {setJudul(e.target.value)}} type="text" placeholder="Judul"/>
        <textarea className={style.textarea} value={catatan} onChange={(e) => {setCatatan(e.target.value)}} placeholder="Catatan" name="catatan" cols="30" rows="10"></textarea>
        <div className={style.bcontainer}>
            <button className={style.button} onClick={batal}>Batal</button>
            <button className={style.button} onClick={simpan} type="submit">Simpan</button>
        </div>
      </form>
    </div>
  );
}
export default Create;
