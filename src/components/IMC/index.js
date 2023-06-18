import React, {useState} from 'react'
import './style.css'
import {useForm} from 'react-hook-form'

function IMC () {

    const { register, handleSubmit, formState: { errors } } =  useForm();
    const  onSubmit =  data  =>  console.log(data);
    console.log(errors);

    const [weight, setWeight] = useState()
    const [height, setHeight] = useState()
    const [imc, setImc] = useState(0)

    function calculator () {
      if ( weight > 0 && height > 0 ){ 
      setImc(parseFloat(weight / ( height * height )).toFixed(2))
      }
      console.log(imc)
    }

    return (
        <div className='IMC'>
            <h2>Cálculo IMC</h2>

            <form  onSubmit={handleSubmit(onSubmit)}>
            <input 
                type='text'  
                name='num1'
                placeholder='digite seu peso' 
                {...register("digite seu peso", { required: true })}
                value={weight}
                onChange={ e => setWeight(e.target.value)}
                
            />

            <input 
                type='text'
                name='num2'
                placeholder='digite sua altura'
                {...register("digite sua altura", { required: true  })}
                value={height} 
                onChange={ e => setHeight(e.target.value)}
            />

            {/*<button onClick={calculator}>Calcular</button>*/}
            <input type='submit' value="Calcular"  onClick={calculator}/>
            </form>

            <p>Resultado: {imc}</p>
        </div>
    )

}

export default IMC
