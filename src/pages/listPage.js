/*
import "../App.scss"
import {useEffect} from "react";
import axios from "axios";
import {useState} from "react";

function List() {
    const [posts, setPosts] = useState([]);
    const [pagenum, setPagenum] = useState(1);
    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?pageNo=${pagenum}&numOfRows=20&_type=json&serviceKey=rlGSprsD03D3n%2FZTMIzkh6FeMvMVXteJjKHaC1dHyxRFKjUC6EGm%2Bbgm41kvRdP7v1mG1MbFCllTSPQvJyVY4w%3D%3D`
        }).then(result => setPosts(result.data.response.body.items.item))
    });
    return (
        <div className='listBox'>
            <div id='btnwrapper'>
                <button>메인 메뉴</button>
                <button>조건 설정</button>
                <button>찜 목록</button>
                <button>후기 작성</button>
            </div>
            <div className='listImgBox'>{posts.map(value => (
                <div className='obj'>
                    <img src={value.filename} id='img'></img>
                    <div className='anisp'>{value.kindCd}</div>
                </div>
            ))}
            </div>
            <div className='pagenum'>
                <button className='btnNumChange' onClick={()=>setPagenum(pagenum-1)}>«</button>
                <div>{pagenum}</div>
                <button className='btnNumChange' onClick={() => setPagenum(pagenum + 1)}>»</button>
            </div>
        </div>
    )
}

export default List;*/
