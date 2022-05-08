import './Skyfood.css';
import first from './images/1.png';
import first_transition from './images/1-2.png';
import second from './images/2.png'
import second_transition from './images/2-3.png';
import third from './images/3.png';
import taco from './images/taco.png';
import batch from './images/batch.png';
import third_transition from './images/3-4.png';
import fourth from './images/4.png';
import car from './images/car.png';
import { useState } from 'react';

const MovingTaco = ({prog=0}) => {
    let x = prog * 8000;
    let y = prog * 3500;
    let width = 70;
    width -= prog/.1*70
    let opacity = 100;
    if (prog > 0.03215) {
        opacity -= 10000*prog;
        opacity = Math.max(opacity, 0);
    } 
    width = Math.max(width, 52)
    return <img 
        id="taco"
        src={taco}
        style={
            {
                width: `${width}px`,
                transform:`translate(${x}px, ${y}px)`,
                opacity: `${opacity}%`
            }
        }  
    />
}

const MovingBatch = ({prog=0}) => {
    let x = -1600 * prog;
    let y = 0;
    let opacity = 1000 * prog;
    if (prog > 0.13) {
        opacity = 0;
    }
    return <img 
        id="batch"
        src={batch}
        style={
            {
                transform:`translate(${x}px, ${y}px)`,
                opacity: `${opacity}%`
            }
        }  
    />
}

const MovingCar = ({prog=0}) => {
    console.log(prog);
    let p = prog-.14
    let x = p*2000;
    let y = p*1000;
    if(prog >= .272) {
        x = p * 2000;
        y = (.272-.14)*1000;
    }
    let opacity = 0;
    if (prog > .14) {
        opacity = p * 1000;
    }
    if (prog >= .355) {
        opacity = 100 - (prog - .355) * 8000;
    }
    return <img 
        id="car"
        src={car}
        style={
            {
                transform:`translate(${x}px, ${y}px)`,
                opacity: `${opacity}%`
            }
        }  
    />
}

export function Skyfood() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const onScroll = (e) => {
        setScrollProgress(e.target.scrollTop/e.target.scrollHeight);
    };
    return (
        <div id="everything" onScroll={onScroll}>
            <div id="bg">
                <h1 id="title">How SkyFood Works</h1>
                <p id="first_text" className="step_text">1. User sends in a taco order.</p>
                <img id="first_img" src={first} alt="Phone with taco order." width={"180px"} />
                <img id="first_transition" src={first_transition} alt="Transition" width={"140px"} />
                <p id="second_text" className="step_text">2. CloudFood batches taco orders.</p>
                <img id="second_img" src={second} alt="Cloud with taco batch." width={"230px"} />
                <img id="second_transition" src={second_transition} alt="Transition" width={"140px"} />
                <img id="third_img" src={third} alt="Driver notified." width={"160px"} />
                <p id="third_text" className="step_text">3. CloudFood sends delivery notification to driver.</p>        
                <img id="third_transition" src={third_transition} alt="Transition" width={"140px"} />
                <img id="fourth_img" src={fourth} alt="Taco store." width={"240px"} />
                <p id="fourth_text" className="step_text">4. Driver picks up tacos from the taqueria.</p>        
                <MovingTaco prog={scrollProgress}/>
                <MovingBatch prog={scrollProgress}/>
                <MovingCar prog={scrollProgress}/>
            </div>
        </div>
    )
}