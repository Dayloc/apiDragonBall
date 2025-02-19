import React, { useState } from 'react';
import Modal from './modal';



function Array(props) {
  const [count,setCount]=useState(0)
  const [showModal,setShowModal]=useState(false)
  

  const myArray = ["casa", "perro", "gato"];
console.log(props)

let typo=typeof(props);
console.log({typo})

let {products}=props
console.log(products)
let background="danger-subtle";
let textColor="info-emphasis"




  return (
    <div className={`container bg-${background} text-${textColor}`}>
      <hr />
      <h2>Mi Array:</h2>
      <ul>
        {myArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <hr />
       <ul>
        {
        
        products.map((item,index)=>{

          return <li key={index}>{item.title}-{item.desciptions}-{item.cta }</li>

        })
        
        }
        </ul>
       <hr />
      <div>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Incremento</button>
        <button onClick={()=>
          (count===0)? setCount(0):setCount(count-1)}
          >Deremento</button>
      </div>
      <hr />
      <div className='m-5'>
     {
     
     showModal? <Modal onClouseModal ={()=> setShowModal(false)}/> : <button onClick={()=>setShowModal(true)}>Mostrar Modal</button>
    
    
    
    
    }
    {


    }
    <button onClick={()=>setShowModal(false)}>Cerrar Modal</button>
      
      </div>
      <hr />
      
      </div>
    </div>
  );
}

export default Array; // Exportación por defecto