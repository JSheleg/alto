import './button.style.css';

const Button = ({className, mission}) => (
    
<div className='buttonContainer'>
    <button className={`button ${className}`}>
        <h3 className={className}>{mission}</h3>
    </button>

</div>
);
    
export default Button;