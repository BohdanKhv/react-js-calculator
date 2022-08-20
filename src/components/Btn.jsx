import './styles/Btn.css';

const option1 = ['+', '-', '%', '÷', '×', '.'];

const Btn = ({item, setInput, input, calculate, setResult}) => {

    const handleClick = () => {
        if(item.includes('='))
            calculate();

        else if(item === '±')
            setInput(input.replace(/[+-]/g, ''));

        else if(item === '%' && input.includes('%'))
            return;

        else if(item === '.') {
            // Check if there's any operator before the last number
            // And if there's no '.' in the last number
            // Then add '.' to the last number
            const lastNumber = input.split(/[×÷+-]/).pop();
            if(!lastNumber.includes('.') && input.match(/[+-]/))
                setInput(input + item);
            else if(!lastNumber.includes('.'))
                setInput(input + item);
        }

        else if(option1.includes(item)) {
            console.log('f')
            if(input.endsWith('+') || input.endsWith('-') || input.endsWith('%') || input.endsWith('÷') || input.endsWith('×') || input.endsWith('.') || input.length === 0)
                setInput(input.slice(0, -1) + item);
            else
                setInput(input + item);
        } else if(item === 'C') {
            setInput('');
            setResult('');
        } else 
            setInput(input + item);
    }

    return (
        <div 
            className={`btn${item.includes('=') ? ' btn-1' : item.includes('C') ? ' btn-2' : ''}`}
            onClick={handleClick}
        >
            <span>
                {item}
            </span>
        </div>
    )
}

export default Btn