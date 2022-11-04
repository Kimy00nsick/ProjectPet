import '../App.scss'
import {useEffect, useState} from "react";
import Dummy from "./dummyPage";
import Login from "./loginPage";
import {useNavigate} from "react-router-dom";
import List from "./listPage";

function Seccond() {
    const navi = useNavigate();
    const [log, setLog] = useState(false);
    return (
        <div id="seccondPage" className='pageIndex'>
            <div id='pageTop'>
                <div id='logoTop'></div>
                <div id='loginBoxTop'>
                    <div className='loginTop'>로그인</div>
                    <div className='loginTop'>회원가입</div>
                </div>
            </div>
            <div id='pagechangebtn'>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
            <div id='firstPageTextBox' className='pages'>
                <div className='textTop'>당신을 기다리는 귀여운 동물들</div>
                <div className='textBot'>유기되어 보호중인 아이들이 책임감 강한 주인님을 기다리고 있어요!</div>
            </div>
            <div id='firstPageImg' className='pages'></div>
            <a className="scroll-link">
                <svg className="mouse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 130"
                     preserveAspectRatio="xMidYMid meet">
                    <g fill="none" fill-rule="evenodd">
                        <rect width="70" height="118" x="1.5" y="1.5" stroke="#FFF" stroke-width="3" rx="36"/>
                        <circle className="scroll" cx="36.5" cy="31.5" r="4.5" fill="#FFF"/>
                    </g>
                </svg>
            </a>
            {log && <Dummy/>} {log && <Login setLog={setLog}/>}

        </div>
    )
}


export default Seccond;