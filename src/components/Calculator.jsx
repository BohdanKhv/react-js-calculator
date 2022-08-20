import { useState } from 'react';
import { Btn, Input, Result, Menu } from './';
import './styles/Calculator.css';

const inputs = ["C", "", "%", "÷", "7", "8", "9", "×", "4", "5", "6", "-", "1", "2", "3", "+", '±', "0", ".", "="];

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);

    const calculate = () => {
        let newInput = input.replace(/×/g, '*').replace(/÷/g, '/');
        try {
            setResult(eval(newInput));
        } catch(e) {
            console.error(e);
        }
    }

    return (
        <div className="calculator">
            <Input input={input} setInput={setInput}/>
            <Result result={result} />
            <Menu
                setInput={setInput}
                input={input}
            />
            <div className="calculator-body">
                {inputs.map((item, index) => (
                    <Btn
                        key={index}
                        item={item}
                        setInput={setInput}
                        input={input}
                        setResult={setResult}
                        calculate={calculate}
                    />
                )
                )}
            </div>
        </div>
    )
}

export default Calculator