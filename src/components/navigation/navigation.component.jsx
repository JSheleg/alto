import {useEffect, useState} from 'react';
import { NavLink, Nav } from 'react-bootstrap'
import {useLocation } from "react-router-dom";
import "./navigation.style.css";


const Navigation = () => {
    const location = useLocation();
    const [url, setUrl] = useState(null);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location])
    return(
        <Nav>
            <NavLink href="/"><span className={'circle' + (url==="/" ? " active": "")}></span></NavLink>
            <NavLink href="/driver"><span className={'circle' + (url==="/driver" ? " active": " ")}></span></NavLink>
            <NavLink href="/vehicle"><span className={'circle' + (url==="/vehicle" ? " active": " ")}></span></NavLink>
            <NavLink href="/controls"><span className={ "circle" + (url==="/controls" ? " active" : " ")}></span></NavLink>
        </Nav>
    )
}

export default Navigation;