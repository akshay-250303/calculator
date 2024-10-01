"use client";
import React,{useState} from "react";
import { linkedin } from 'bootstrap-icons';


function Calc(){
    const[result,setResult] = useState('');

    const handleClick = (value:any) => {
        if(value === '='){
            try{
                setResult(eval(result) || '');
            }catch (error){
                setResult('Error');
            }
            }else if(value === 'C'){
                setResult('');
            }else{
                setResult(result + value);
            }
    };
    return(
        <div align="center"><br />
            <div className="row">
                <center>
                <div className="col-md-4" >
                <div className="card shadow-lg p-3 mb-5 bg-white rounded " style={{width:'18rem'}} >
  <div className="card-header">
    <img className="card-title" style={{marginLeft:"160px",height:'10px'}} src="https://edu.casio.com/assets/images/logo.png"></img>
<input type="text" className="form-control" placeholder="0" value={result} style={{textAlign:'end', boxShadow:'100px'}} disabled />
</div><hr />
<div className="card-body">
    <div className="box shadow" ><br />
<div className="row">
    <div className="col-md-3  ">
        <button className="btn btn-secondary shadow-lg rounded-pill" onClick={() => handleClick('7')} id="buu">7</button>
    </div>
    <div className="col-md-3">
        <button className="btn btn-secondary shadow-lg rounded-pill" onClick={() => handleClick('8')}>8</button>
    </div>    <div className="col-md-3">
        <button className="btn btn-secondary shadow-lg rounded-pill" onClick={() => handleClick('9')}>9</button>
    </div>    <div className="col-md-3">
        <button className="btn btn-danger shadow-lg rounded-pill" onClick={() => handleClick('C')}>C</button>
    </div>
</div><br />
<div className="row">
    <div className="col-md-3">
        <button className="btn btn-secondary shadow-lg rounded-pill" onClick={() => handleClick('4')}>4</button>
    </div>
    <div className="col-md-3">
        <button className="btn btn-secondary shadow-lg rounded-pill" onClick={() => handleClick('5')}>5</button>
    </div>    <div className="col-md-3">
        <button className="btn btn-secondary shadow-lg rounded-pill" onClick={() => handleClick('6')}>6</button>
    </div>    <div className="col-md-3">
        <button className="btn btn-primary shadow-lg rounded-pill" onClick={() => handleClick('+')}>+</button>
    </div>
</div>
<br /><div className="row">
    <div className="col-md-3">
        <button className="btn btn-secondary shadow-lg rounded-pill" onClick={() => handleClick('1')}>1</button>
    </div>
    <div className="col-md-3">
        <button className="btn btn-secondary shadow-lg rounded-pill" onClick={() => handleClick('2')}>2</button>
    </div>    <div className="col-md-3">
        <button className="btn btn-secondary shadow-lg rounded-pill" onClick={() => handleClick('3')}>3</button>
    </div>    <div className="col-md-3">
        <button className="btn btn-primary shadow-lg rounded-pill" onClick={() => handleClick('-')} style={{width:"35px"}}>-</button>
    </div>
</div>
<br /><div className="row">
    <div className="col-md-3">
        <button className="btn btn-secondary shadow-lg rounded-pill" onClick={() => handleClick('0')}>0</button>
    </div>
    <div className="col-md-3">
        <button className="btn btn-primary shadow-lg rounded-pill" onClick={() => handleClick('/')}  style={{width:"35px"}}>/</button>
    </div>    <div className="col-md-3">
        <button className="btn btn-primary shadow-lg rounded-pill" onClick={() => handleClick('*')}>X</button>
    </div>    <div className="col-md-3">
        <button className="btn btn-primary shadow-lg rounded-pill" onClick={() => handleClick('%')} style={{width:'35px'}}><span style={{marginLeft:"-2px"}}>%</span></button>
    </div>
</div><br />
<div className="row">
    <div className="col-md-4">
        <button className="btn btn-secondary shadow-lg " style={{width:'100%'}} onClick={() => handleClick('00')}>00</button>
    </div>
    <div className="col-md-4">
        <button className="btn btn-secondary shadow-lg " style={{width:'100%'}} onClick={() => handleClick('.')}>.</button>
    </div>
    <div className="col-md-4">
        <button className="btn btn-success shadow-lg" onClick={() => handleClick('=')}  style={{width:"35px", width:'100%'}}>=</button>
    </div>
</div><br />
  </div>
  </div>
</div>
</div></center> 

            </div>
<center style={{opacity:'10%'}}>&copy;</center>
        </div>
        
    );
}
export default Calc;
