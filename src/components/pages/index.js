import React from 'react'
import {connect} from 'react-redux';
import {TAMBAH, KURANG, RESET} from './../store';

const Page = (props) => {
    const {nilaiAwal} = props;
    const tambahNilai = () =>{
        props.dispatch({type: TAMBAH})
    }
    const kurangNilai = () => {
        if (nilaiAwal <= 0 ){
            window.alert('tidak bisa minus')
        } else {
            props.dispatch({type: KURANG})
        }
       
    }
    const resetNilai = () => {
        props.dispatch({type: RESET})
    }

    return(
        <div className="container-fluid text-center">
               <button className="btn btn-secondary mr-3" onClick={tambahNilai}>+</button>
                <input value={nilaiAwal}></input>
               <button className="btn btn-secondary ml-3" onClick={kurangNilai}>-</button>
           <div>
           <button onClick={resetNilai}>RESET</button>
           </div>
           
        </div>
    )
}

const mapStatesToProps = state =>{
    return{
        nilaiAwal: state.nilaiAwal
    }
}

export default connect(mapStatesToProps)(Page);