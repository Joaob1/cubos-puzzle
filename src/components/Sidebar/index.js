import './style.css'
import vector from '../../assets/Vector.svg'

function Sidebar({cards, setStateCards}){
    const handleReset = () => {
        cards.forEach((card) => {
            card.turned = false;
        });

        setStateCards(cards);
    }
    return (
        <div className="sidebar">
            <div className='puzzle'>
                <img src={vector}/>
            <strong>CUBOS PUZZLE</strong>
            </div>
            <button onClick={() => handleReset()}>RESET</button>
        </div>
    )
}

export default Sidebar;