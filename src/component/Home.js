import React,{useEffect} from "react";
import Jumbotron from "./MyJumbotron";



const Home = () => {
    useEffect(() => {
        document.title = "Home"
    }, [])
    
    return (
        <div>
            <Jumbotron />
        </div>
    )
}

export default Home;