import '../App.scss'
import axios from "axios";

function Login(props){
    return(
        <div className='logjoinpage'>
            <div className='closebtn' onClick={()=>{props.setLogflag(false);props.setLog(false)}}>x</div>
            <div className='logjointitle'></div>
            <div className='req'>
                <input type='text' placeholder={"아이디를 입력하세요"}></input>
                <input type='password' placeholder={"패스워드를 입력하세요"}></input>
                <button>로그인</button>
            </div>

        </div>
    )
}

export default Login;