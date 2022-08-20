import './styles/Input.css';

const Input = ({input, setInput}) => {
    return (
        <textarea
            type="text"
            className="input"
            placeholder="0"
            value={input}
            inputMode="none"
        >
            {input}
        </textarea>
    )
}

export default Input