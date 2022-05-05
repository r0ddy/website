import './Skyfood.css';
import first from './images/1.png';
import first_transition from './images/1-2.png';
import second from './images/2.png'
import second_transition from './images/2-3.png';
export function Skyfood() {
    return (
        <div id="bg">
            <h1 id="title">How SkyFood Works</h1>
                <p id="first_text" class="step_text">1. User sends in a taco order.</p>
                <img id="first_img" src={first} alt="Phone with taco order." width={"100px"} />
                <img id="first_transition" src={first_transition} alt="Transition" width={"110px"} />
                <p id="second_text" class="step_text">2. CloudFood batches taco orders.</p>
                <img id="second_img" src={second} alt="Cloud with taco batch." width={"150px"} />
                <img id="second_transition" src={second_transition} alt="Transition" width={"110px"} />
        </div>
    )
}