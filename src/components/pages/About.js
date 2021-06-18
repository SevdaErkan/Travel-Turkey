import React, { useState } from "react";
import "../../styles.css";

const style = {
   padding: "20px",
   margin: "20px",
   fontSize: "20px",
   maxWidth: "50%"
};
const styledA = {
   textDecoration: "none",
   color: "#1f98f4"
};
const divStyle = {
   width: "100%",
   display: "flex",
   flexDirection: "column",
   justifyContent: "center",
   alignItems: "center"
};
export default function About() {
   const [videoLink, setLink] = useState("");
   return (
      <>
         <div className="about">
            <div style={divStyle}>
               <button
                  style={style}
                  onClick={() => {
                     setLink("https://www.youtube.com/watch?v=_jjIKMl90iM");
                  }}
               >
                  <a style={styledA} href={videoLink} target="_blank">
                     {" "}
                     Watch Turkey Presentation
                  </a>{" "}
               </button>

               <button
                  style={style}
                  onClick={() => {
                     setLink("https://www.youtube.com/watch?v=sp8J4za_3GI");
                  }}
               >
                  <a style={styledA} href={videoLink} target="_blank">
                     {" "}
                     Watch The Turkey of History
                  </a>{" "}
               </button>
            </div>
         </div>
      </>
   );
}
