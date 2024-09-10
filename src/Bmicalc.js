import React, { useState } from 'react'
import './bmicalc.css'
const Bmicalc = () => {

    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bmi, setBmi] = useState('')

    function reset() {
        setWeight('');
        setHeight('');
        setBmi('');
    }

    function calculateBmi() {
        let heightinm = height / 100;
        let Calcbmi = weight / (heightinm * heightinm);
        Calcbmi = Calcbmi.toFixed(2);
        setBmi(Calcbmi);
    }

    return (
        <>
            <h1>BMI CALCULATOR</h1>
            <div className='container'>
                <div className='left'>
                    <label>Enter your wt</label>
                    <input type='number' placeholder='Enter Your Weight in Kgs' value={weight} onChange={(e) => setWeight(e.target.value)} />
                    <input type='number' placeholder='Enter Your Height' value={height} onChange={(e) => setHeight(e.target.value)} />
                    <div className='button-container'>
                        <button onClick={calculateBmi}>Calculate</button>
                        <button onClick={reset}>Reset</button>
                    </div>
                </div>
                <div className='right'>
                    <p>Your BMI is : {bmi}</p>
                </div>
            </div>
        </>
    )
}

export default Bmicalc