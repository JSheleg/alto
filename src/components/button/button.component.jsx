import './button.style.css';

const Button = ({className, mission}) => (
    
<div className='buttonContainer'>
    <button className={`button ${className}`}>
        <h3>{mission}</h3>
    </button>

</div>
);
    
export default Button;