import React, { useState } from "react";
import "../../styles.css";
const style = {
   padding: "20px",
   margin: "20px auto",
   fontSize: "30px"
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

export default function SignUp() {
   const [videoLink, setLink] = useState("");
   return (
      <h1 className="sign-up">
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
                  setLink("https://www.youtube.com/watch?v=lQ4C0FVjq_4");
               }}
            >
               <a style={styledA} href={videoLink} target="_blank">
                  {" "}
                  Watch Turkish Delicious Foods
               </a>{" "}
            </button>
         </div>
      </h1>
   );
}
