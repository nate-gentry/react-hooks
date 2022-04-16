// import React, { Component } from "react";
// import { ThemeContext } from "./UseContext";

// export default class ClassContextComponent extends Component {
//   themeStyle(dark) {
//     return {
//       backgroundColor: dark ? "#333" : "#CCC",
//       color: dark ? "#333" : "#CCC",
//       padding: "2rem",
//       margin: "2rem",
//     };
//   }

//   render() {
//     return (
//       <div>
//         <ThemeContext.Consumer>
//           {(darkTheme) => {
//             return <div style={this.themeStyle(darkTheme)}>Class Theme</div>;
//           }}
//         </ThemeContext.Consumer>
//       </div>
//     );
//   }
// }
