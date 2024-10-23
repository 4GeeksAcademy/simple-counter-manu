import React from "react";
import ReactDOM from "react-dom/client";

import SecondsCounter from "./component/secondsCounter.jsx";

let seconds = 0;

//render your react application
let app = ReactDOM.createRoot(document.getElementById('app'))
app.render(<SecondsCounter counter={seconds} />);

setInterval(() => {
    seconds++;
    app.render(<SecondsCounter counter={seconds} />);
},1000)

