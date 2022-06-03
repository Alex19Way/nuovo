import React,{useState} from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Category=()=>{

//State
const [categoryActive,setCategoryActive]=useState(false);

//Functions
const categoryHandler=(string)=>{
    setCategoryActive(true);
}


    return(
        <div className="category" id="category">
            <div className="category-container">

                <button className="btn-intra" onClick={()=>categoryHandler("intra")}>
                    <h5 class="category-text">Intrattenimento</h5></button>


                <button className="btn-spiaggia"
                name="spiagge"
                onClick={()=>categoryHandler("spiagge")}>
                    <h5 class="category-text"
                    >Spiagge e Lidi</h5></button>


                <button className="btn-monu"
                name="monumenti"
                onClick={()=>categoryHandler("monu")}>
                    <h5 className="category-text"
                    >Monumenti</h5></button>


                <button className="btn-risto"
                name="ristoro"
                onClick={()=>categoryHandler("risto")}>
                    <h5 className="category-text"
                    >Ristoro</h5></button>


                <button className="btn-att"
                name="attivita"
                onClick={()=>categoryHandler("att")}>
                    <h5 className="category-text"
                    >Attività Commerciali</h5></button>
                <div className="btn-open"></div>

            </div>
            <div className={categoryActive ? "category-active" : "hide"}>
                    <div>
                        <h1>Risultati</h1>
                        <h1>Risultati</h1>
                        <h1>Risultati</h1>
                    </div>
                    <FontAwesomeIcon icon={faXmark} size="2x" className="close-icon"
                    onClick={()=>setCategoryActive(false)}/>
            </div>
        </div>
        
    )
}

export default Category;