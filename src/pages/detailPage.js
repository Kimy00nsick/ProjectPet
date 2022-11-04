import '../App.scss'
import {useEffect, useState} from "react";
import AnimalList from "./animallList";
import LikePage from "./likPage";
import WritePage from "./writePage";
import {useNavigate} from "react-router-dom";


function List() {
    let navi = useNavigate();
    const [menu, setMenu] = useState(0);
    useEffect(()=>{
        const menuNum = document.querySelectorAll('.menulist');
        menuNum.forEach((el,index)=>{
            menu === index ? el.classList.add('active') : el.classList.remove('active');
        })
    },[menu])
    return (
        <div id='listpage'>
            <div className='menu'>
                <div id='logobox' onClick={() => {
                    navi("/");
                }}></div>
                <div id='menubox'>
                    <div className='menulist' onClick={() => {
                        setMenu(0)
                    }}>
                        <div className='material-symbols-outlined'>cruelty_free</div>
                        <p>동물목록</p></div>
                    <div className='menulist' onClick={() => {
                        setMenu(1)
                    }}>
                        <div className='material-symbols-outlined'>favorite</div>
                        <p>찜목록</p></div>
                    <div className='menulist' onClick={() => {
                        setMenu(2)
                    }}>
                        <div className='material-symbols-outlined'>rate_review</div>
                        <p>후기</p></div>
                    <div className='menulist'>
                        <div className='material-symbols-outlined'>location_on</div>
                        <p>보호소</p></div>
                    <div className='menulist' onClick={()=>{navi("/");}}>
                        <div className='material-symbols-outlined'>home</div>
                        <p>메인</p></div>

                </div>
                <div id='loginbox'>
                    <div className='material-symbols-outlined'>login</div>
                    <p>로그인</p></div>
            </div>
            {menu === 0 ? <AnimalList/> : menu === 1 ? <LikePage/> : menu === 2 && <WritePage/>}
        </div>
    )
}

export default List;