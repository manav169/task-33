// import React from "react";
import "../card/index.css";
// import { Card, CardContent, Typography, Button } from "@mui/material";
import {  cardDataType1 , cardDataType2 } from "../../data/cardData";

const MyCard = ({type}) => {

    const cardData = type === "type1" ? cardDataType1 : cardDataType2;

    return (
      <div className="cards-wrapper">
        {cardData.map((card, index) => (

            
          <div className={`card-container ${type === "type1" ? "type1" : "type2"}`} key={index}>
            <a className="card-image-wrapper" href={card.link}>
              <figure className="card-image">
                <img alt={card.alt} src={card.imgSrc} />
              </figure>
            </a>
            <div className="card-content">
              <h2 className="card-title">{card.title}</h2>
              <div className="card-description">
                <div>{card.description}</div>
              </div>
              <div className="card-button-wrapper">
                <a href={card.buttonLink} className="card-button">
                  <span>{card.buttonText}</span>
                  <span className="card-button-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                    >
                      <path d="M 21.1875 9.28125 L 19.78125 10.71875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 19.78125 21.28125 L 21.1875 22.71875 L 27.90625 16 Z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default MyCard;