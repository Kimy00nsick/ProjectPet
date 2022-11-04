import '../App.scss'
import axios from "axios";

function Join(props){
    return(
        <div className="logjoinpage">
            <div className='closebtn' onClick={()=>{props.setJoin(false)}}>x</div>
            <div className='logjointitle'></div>
            <div className='req'>
                <input type='text' placeholder={"아이디를 입력하세요"} name='id'></input>
                <input type='password' placeholder={"패스워드를 입력하세요"} name='pwd'></input>
                <input type='text' placeholder={"e-mail을 입력하세요"} name='email'></input>
                <button onClick={()=>{
                    axios.post('/join', {
                        'id':document.querySelectorAll('.req input')[0].value,
                        'pwd':document.querySelectorAll('.req input')[1].value,
                        'email':document.querySelectorAll('.req input')[2].value
                    }).then((res)=>{res.data?console.log("true"):console.log("false")})}}>회원가입</button>
            </div>

        </div>
    )
}


export default Join;