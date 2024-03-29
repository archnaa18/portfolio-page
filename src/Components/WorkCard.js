import "./WorkCardStyles.css";
import React from "react";
// import pro1 from "../assets/p1.jpg";
import { NavLink } from "react-router-dom";
const WorkCard = (props) =>{
    return(
        <div className="project-card">
                
                
                    <img src={props.imgsource} alt="image2"/>
                    <h2 className="project-title">{props.title}</h2>
                    <div className="pro-details">
                        <p>{props.text}</p>
                        <div className="pro-btns">
                            <NavLink to={props.view} className="btn">View</NavLink>
                            <NavLink to="url.com" className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>
    )
}
export default WorkCard