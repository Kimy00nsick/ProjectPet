import '../App.scss'
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Login from "./loginPage";
import Join from "./joinPage";
import Dummy from "./dummyPage";

function First() {
    let navi = useNavigate();
    const [logflag, setLogflag] = useState(false);
    const [joinflag, setJoin] = useState(false);
    return (
        <div id="firstPage" className='pageIndex'>
            <div className='mainTitle' ></div>
            <div className='mainbtn' onClick={() => {
                setLogflag(true);
            }}>로그인
            </div>
            <div className='mainbtn' onClick={()=>{
                setJoin(true);
            }}>회원가입</div>
            <span onClick={() => {
                navi("/menu");
            }}>비로그인으로 시작하기</span>
            {logflag && <Dummy/>}{logflag && <Login setLogflag = {setLogflag}/>}
            {joinflag && <Dummy/>}{joinflag && <Join setJoin = {setJoin}/>}
        </div>
    )
}


export default First;