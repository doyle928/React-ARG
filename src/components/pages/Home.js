import "../../stylesheets/home.css";
import React from 'react';
import { Router, Route } from "react-router-dom";
import HomeSplash from './home-components/HomeSplash';
import HomeContainers from "./home-components/HomeContainers";
import HomeFooter from "./home-components/HomeFooter";

let findDate = (subtract) => {
    let today = new Date();
    let dd = today.getDate() - subtract;
    let mm = today.getMonth()+1; //As January is 0.
    let yyyy = today.getFullYear();

    if(dd <= 0){
        let i = 0;
        dd = today.getDate();
        while(dd > 0){
            dd -= i;
            i++;
        };
        dd = 30 - (subtract - i);
        mm -= 1;
    }

    switch(mm) {
        case 1:
            mm = "January";
            break;
        case 2:
            mm = "February";
            break;
        case 3:
            mm = "March";
            break;
        case 4:
            mm = "April";
            break;
        case 5:
            mm = "May";
            break;
        case 6:
            mm = "June";
            break;
        case 7:
            mm = "Juli";
            break;
        case 8:
            mm = "August";
            break;
        case 9:
            mm = "September";
            break;
        case 10:
            mm = "October";
            break;
        case 11:
            mm = "November";
            break;
        case 12:
            mm = "December";
            break;
        default:
            mm = "Unkown";
            break;
    };
    return mm + " " + dd + ", " + yyyy;
};
const posts = [
    {
        genre: "EMERGENCY",
        title: "White House considers actions",
        image: "/stylesheets/images/home/pic-home-1.jpg",
        date: findDate(1)
    },
    {
        genre: "WEATHER",
        title: "Freak weather patterns cause damage across the entire US",
        image: "/stylesheets/images/home/pic-home-2.jpg",
        date: findDate(8)
    },
    {
        genre: "WEATHER",
        title: "US faces strange weather phenomenon",
        image: "/stylesheets/images/home/pic-home-3.png",
        date: findDate(15)
    }
];

class Home extends React.Component {
    render(){
        return (
        <div>
            <HomeSplash/>
            <div className="home-splash-split"></div>
            <div className="home-container">
                <h2>Explore</h2>
                <HomeContainers genre={posts[0].genre} title={posts[0].title} image={posts[0].image} date={posts[0].date} />
                <HomeContainers genre={posts[1].genre} title={posts[1].title} image={posts[1].image} date={posts[1].date} />
                <HomeContainers genre={posts[1].genre} title={posts[2].title} image={posts[2].image} date={posts[2].date} />
                <button>VIEW MORE</button>
            </div>
            <HomeFooter />

        </div>
    );
        }
};

export default Home;