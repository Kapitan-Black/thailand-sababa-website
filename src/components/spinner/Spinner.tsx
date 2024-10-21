// import React, { useEffect } from "react";
// import "./spinner.css";
// import tukTukImage from "../../assets/tuk.webp"; // Path to the Tuk Tuk image
// import islandImage from "../../assets/island.webp"; // Path to the island image

// const Spinner: React.FC = () => {
//   useEffect(() => {
//     const tukTukElement = document.querySelector(".tuktuk") as HTMLElement;

//     // Restart animation when it ends
//     tukTukElement.addEventListener("animationiteration", () => {
//       tukTukElement.style.animation = "none";
//       // Trigger reflow to reset animation
//       tukTukElement.offsetHeight;
//       tukTukElement.style.animation = "moveTukTuk 8s linear infinite";
//     });
//   }, []);

//   return (
//     <div className="animation-container">
//       <div className="scene">
//         <img src={islandImage} alt="Island" className="island" />
//         <img src={tukTukImage} alt="Tuk Tuk" className="tuktuk" />
//       </div>
//     </div>
//   );
// };

// export default Spinner;
