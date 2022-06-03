import React,{useRef, useState} from "react";
import logo from '../immagini/logo.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass,faXmark} from '@fortawesome/free-solid-svg-icons';

const Hero=()=>{
    //State
    const [inputActive,setInputActive]=useState(false);
    const [searchActive,setSearchActive]=useState(false);
    //Ref
    const searchRef=useRef(null);

    //FUNCTIONS
    const searchHandler=(e)=>{
        let string=e.target.value;
        if(string!="")
            setSearchActive(true);
        
        else{setSearchActive(false);}
    }

    const closeAll=(e)=>{
        setSearchActive(false);
        setInputActive(false);
        searchRef.current.value="";
    }


return(
<div className="hero" id="hero">
    <div className="hero-container">
        <img src={logo} className="logo" alt="AroundBisceglie"/>
        <h5 className="intro">Esplora tutti gli angoli della citta di Bisceglie
            e ritrova il piacere della scoperta</h5>
        <input type="search" placeholder="Cerca..."
        className={inputActive ? searchActive ? "input-active search-active" : "input-active" : "input"}  
        ref={searchRef}
        onChange={searchHandler}
        onClick={()=>setInputActive(true)}/>
                




        <div className={inputActive ? "search-container" : "hide"}> 
        
            <div className={searchActive ? "search-area" : "hide"}>
                <h1>Risultati</h1>
                <h1>Risultati</h1>
                <h1>Risultati</h1>
            </div>
            <FontAwesomeIcon icon={faXmark} size="2x" className="close-icon"
            onClick={closeAll}/>
        </div>
                
    </div>
</div>
)
}

export default Hero;