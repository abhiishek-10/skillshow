import React, { useEffect } from 'react'
import "./main.css"
import loading from '../lotties/loading.json';

const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    useEffect(() => {
        window.onload = () => {
            const preloader = document.querySelector(".preloader");
            console.log("done");
            setTimeout(() => {
                console.log("done 2");

                preloader.style.opacity = 0;
            }, 3000);
        }
    });
    return (<div className="preloader">



    </div>)
    // which have your preloader html and having class is `.preloader`
};


export default Loader
