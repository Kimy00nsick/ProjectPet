import '../App.scss';
import axios from "axios";
import {useState, useEffect} from "react";
import loginPage from "./loginPage";

function AnimalList() {
    const [posts, setPosts] = useState([]);
    const [pagenum, setPagenum] = useState(1);
    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?pageNo=${pagenum}&numOfRows=8&_type=json&serviceKey=rlGSprsD03D3n%2FZTMIzkh6FeMvMVXteJjKHaC1dHyxRFKjUC6EGm%2Bbgm41kvRdP7v1mG1MbFCllTSPQvJyVY4w%3D%3D`
        }).then(result => setPosts(result.data.response.body.items.item))
    });
    return (
        <div className='listPageWrapper'>
            <div className='topBar'>
                <div className='iconBox'>
                    <div className="material-symbols-outlined">
                        sound_detection_dog_barking
                    </div>
                    <div>강아지</div>
                </div>
                <div className='iconBox'>
                    <div className="material-symbols-outlined">
                        pets
                    </div>
                    <div>고양이</div>
                </div>
            </div>
            <div className='innerbox'>
                {posts.map(value => (
                    <div>
                    <div className='obj' style={{
                        backgroundImage: `url(${value.filename})`
                    }}>
                    </div>
                    <div className='anisp'>{value.kindCd}</div>
                    </div>
                ))}
            </div>
            <div className='pageChangeBtn'>
                <button className="material-symbols-outlined">keyboard_double_arrow_up</button>
                <button className="material-symbols-outlined">keyboard_double_arrow_down</button>
            </div>
        </div>
    )
}

export default AnimalList;