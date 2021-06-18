import React, { useState } from "react";
import "../../styles.css";

const buttonStyle = {
   padding: "20px",
   marginLeft: "20px",
   fontSize: "30px"
};
const styledA = {
   textDecoration: "none",
   color: "#1f98f4"
};
export default function Tours() {
   const [videoLink, setLink] = useState("");
   return (
      <h1 className="tours">
         <div className="tours-container">
            <div>
               <button
                  style={buttonStyle}
                  onClick={() => {
                     setLink("https://www.youtube.com/watch?v=aOExHX45jLQ");
                  }}
               >
                  <a style={styledA} href={videoLink} target="_blank">
                     {" "}
                     Watch Istanbul Hagia Sophia Presentation
                  </a>{" "}
               </button>
               <button
                  style={buttonStyle}
                  onClick={() => {
                     setLink("https://www.youtube.com/watch?v=vda519GzESM");
                  }}
               >
                  <a style={styledA} href={videoLink} target="_blank">
                     {" "}
                     Watch Pamukkale & Hierapolis Presentation
                  </a>{" "}
               </button>
            </div>
            <div>
               <button
                  style={buttonStyle}
                  onClick={() => {
                     setLink("https://www.youtube.com/watch?v=yMvJP_fFEpA");
                  }}
               >
                  <a style={styledA} href={videoLink} target="_blank">
                     {" "}
                     Watch Mugla/Bodrum Presentation
                  </a>{" "}
               </button>
               <button
                  style={buttonStyle}
                  onClick={() => {
                     setLink("https://www.youtube.com/watch?v=x8wxfvo0rtM");
                  }}
               >
                  <a style={styledA} href={videoLink} target="_blank">
                     {" "}
                     Watch Cappadocia Presentation
                  </a>{" "}
               </button>
            </div>
         </div>
      </h1>
   );
}
