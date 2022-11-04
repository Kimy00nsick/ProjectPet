/*
import '../App.scss'
import {useEffect, useState} from "react";

function List() {
    let [page, setPage] = useState(0);
    useEffect(() => {
        // console.log(window.scrollY);
    }, )
    return (
        <div id='listpage' onWheel={(e) => {
            // e.pageY > 298 && e.pageY < 322 ? setPage(1) : e.pageY > 322 ? setPage(2) : setPage(0);
            // console.log(window.scrollY);
            console.log(e.view.scrollY);
        }}>
            <div className='menudummy'></div>
            <div className='header'>
                <div id='logobox'></div>
                <div id='loginbox'>로그인</div>
            </div>
            <div className='menu'>
                <div className='menubox'>
                    <div className='menulist'>동물목록</div>
                    <div className='menulist'>찜목록</div>
                    <div className='menulist'>입양후기</div>
                    <div className='menulist'>찾아오시는길</div>
                </div>
            </div>
            <div className='innerbox'>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
            <div className='innerbox02'>
                <div>1</div>
                <div>
                    <div>입양하기</div>
                </div>
            </div>
            <div className='innerbox03'>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className='searchbox'>
                <input type="text"/>
                <div>검색</div>
                <div>작성하기</div>
            </div>
        </div>
    )
}

export default List;*/
