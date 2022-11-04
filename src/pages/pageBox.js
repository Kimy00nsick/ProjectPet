import '../App.scss'
import Seccond from "./page02";
import Third from "./page03";
import Fourth from "./page04";
import {useEffect, useRef, useState} from "react";
import First from "./page01";

function MainPage() {
    useEffect(()=>{
        let pagetop = document.querySelector('#pageTop');
        let logintop = document.querySelectorAll('.loginTop');
        let ob = new IntersectionObserver((e)=>{
            e.forEach((a)=>{
                if (a.isIntersecting){
                    pagetop.style.height = 0;
                    logintop[0].style.fontSize = 0;
                    logintop[1].style.fontSize = 0;
                }else {
                    pagetop.style.height = '8%';
                    logintop[0].style.fontSize = '2vh';
                    logintop[1].style.fontSize = '2vh';
                }
            })
        })
        let pageLast = document.querySelector('#firstPage');
        ob.observe(pageLast);
        let observer = new IntersectionObserver((e)=>{
            e.forEach((a)=>{
                if (a.isIntersecting) {
                    a.target.style.opacity = 1;
                }else{
                    a.target.style.opacity = 0;
                }
            })
        });
        let pagediv = document.querySelectorAll('.pages');
        console.log(pagediv);
        observer.observe(pagediv[0]);
        observer.observe(pagediv[1]);
        observer.observe(pagediv[2]);
        observer.observe(pagediv[3]);
        observer.observe(pagediv[4]);
        observer.observe(pagediv[5]);
        let firstpage = document.querySelector('#seccondPage');
        let seccondpage = document.querySelector('#thirdPage');
        let thirdpage = document.querySelector('#fourthPage');
        let fourthpage = document.querySelector('#firstPage');
        let btn = document.querySelectorAll('#pagechangebtn button');
        let observerfirst = new IntersectionObserver((e)=>{
            e.forEach((a)=>{
                if (a.intersectionRatio){
                    btn[0].style.scale = 1.2;
                    btn[1].style.scale = 1;
                    btn[2].style.scale = 1;
                    btn[3].style.scale = 1;
                }else{
                    btn[0].style.scale = 1;
                }
            })
        });
        let observerseccond = new IntersectionObserver((e)=>{
            e.forEach((a)=>{
                if (a.intersectionRatio){
                    btn[1].style.scale = 1.2;
                    btn[0].style.scale = 1;
                    btn[2].style.scale = 1;
                    btn[3].style.scale = 1;
                }else{
                    btn[1].style.scale = 1;
                }
            })
        });
        let observerthird = new IntersectionObserver((e)=>{
            e.forEach((a)=>{
                if (a.intersectionRatio){
                    btn[2].style.scale = 1.2;
                    btn[0].style.scale = 1;
                    btn[1].style.scale = 1;
                    btn[3].style.scale = 1;
                }else{
                    btn[2].style.scale = 1;
                }
            })
        });
        let observerfourth = new IntersectionObserver((e)=>{
            e.forEach((a)=>{
                if (a.intersectionRatio){
                    btn[3].style.scale = 1.2;
                    btn[0].style.scale = 1;
                    btn[1].style.scale = 1;
                    btn[2].style.scale = 1;
                }else{
                    btn[3].style.scale = 1;
                }
            })
        });
        observerfirst.observe(firstpage);
        observerseccond.observe(seccondpage);
        observerthird.observe(thirdpage);
        observerfourth.observe(fourthpage);
    })
    return (<div id="box">
        <Seccond/>
        <Third/>
        <Fourth/>
        <First/>
    </div>)
}

export default MainPage;