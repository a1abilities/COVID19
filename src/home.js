import React, { useEffect } from 'react';


export default function Home(){
    useEffect(()=> {
        const script = document.createElement("script");
        script.src = "./static/assets/js/main.min.js";
        script.async = true;
        document.body.appendChild(script);
    },[]);

    return(
        <div>
          {/* <Link to='/info' id="infoLink">Info</Link> */}
              <div id="my-botui-app">
      <header class="header">
        <div class="container">
          <a href="https://a1abilities.co.nz" target="_blank">
            <img
              src="./static/assets/images/A1AbilitiesLogo.jpeg"
              alt="A1abilities"
              class="logo"
            />
          </a>
          <h1>Coronavirus Risk Scan</h1>
          <a href="https://a1abilities.co.nz" target="_blank" class="fake">
            <img
              src="./static/assets/images/A1AbilitiesLogo.jpeg"
              alt="A1abilities"
              class="logo"
            />
          </a>
        </div>
      </header>
     <main>
        <div class="container">
          <bot-ui> </bot-ui>
          <button onClick="reset()" class="reset">
            <i class="fa fa-undo"></i>
          </button>
        </div>
      </main>
    </div>
    <div class="loader">
      <svg
        class="spinner"
        width="50px"
        height="50px"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          class="circle"
          fill="none"
          stroke-width="5"
          stroke-linecap="round"
          cx="25"
          cy="25"
          r="20"
        ></circle>
      </svg>
    </div> 
        </div>
    )
}