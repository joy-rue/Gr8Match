import React from "react";
import './ProjectCardList.css'

const ProjectCardList = ({ cards }) => {
  return (
    <div className="app" style={{width:"880px"}}>
      <div className="card-list">
        {cards.map((card, index) => (
          <div key={index} className={`card ${index % 2 === 0 ? "left" : ""}`}>
            {card}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCardList;
