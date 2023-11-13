import {useState, React} from "react";
import style from "./Create.module.css"
function Create(props) {
    const [judul, setJudul] = useState("")
    const [catatan, setCatatan] = useState("")
    const handleSubmit = (e) => {
      e.preventDefault();
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
