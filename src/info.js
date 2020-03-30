import React from 'react';


function Info(props) {
  let url = new URL(window.location.href);
  var score = url.searchParams.get("score");
  // console.log(score);

  return (
    <div>
          <header class="header">
      <div class="container">
        <a href="https://a1abilities.co.nz" target="_blank">
          <img
            src="./static/assets/images/A1AbilitiesLogo.jpeg"
            alt="A1Abilities"
            class="logo"
          />
        </a>
        <h1>COVID-19  Risk Result</h1>
        <a href="https://a1abilities.co.nz" target="_blank" class="fake">
          <img
            src="./static/assets/images/A1AbilitiesLogo.jpeg"
            alt="A1Abilities"
            class="logo"
          />
        </a>
      </div>
    </header>
    <main>
      <div class="container">
        <section class="section-one card section-margin">
          <div class="result">            
            <h1 class={score !== null && (score >= 0 && score <=5 ? "low" : score >= 6 && score <=12 ? "mid" : score >= 13 ? "high" : '')}>
              {score !== null && (score >= 0 && score <=5 ? "Low" : score >= 6 && score <=12 ? "Medium" : score >= 13 ? "High" : '')}
              {score !== null && 
                  ( score >= 0 && score <=2 ? <p>May be stress related and observe.</p>
                  : score >= 3 && score <=5 ? <p>Hydrate properly and proper personal hygine.<br />Observe and Re-evaluate after 2 days.</p>
                  : score >= 6 && score <=12? <p>Seek a consultation with doctor.</p>
                  : score >= 13 ? <p>Call the DOH Hotline 02-8-651-7800"</p>
                  : '')
              }
              
            </h1>
            <div class="layout-align">
              <div id="score-meter-1" class="layout-align">
                <div id="scorer-1-inner-div">
                  <div id="scorer-1-inner-div-5">
                    <div class={score !== null && (score >= 0 && score <=5 ? "scorer-1-tick low" : score >= 6 && score <=12 ? "scorer-1-tick mid" : score >= 13 ? "scorer-1-tick high" : '')}></div>
                  </div>
                </div>
                <div id="scorer-1-inner-div-2"></div>
                <div id="scorer-1-inner-div-3"></div>
                <div id="scorer-1-inner-div-4"></div>
              </div>
            </div>
          </div>
        </section>
       

        {(score !== null && (score >= 0 && score <=5)) &&
                <section class="section-two card section-margin">
                <p>Based on your inputs, A1Abilities advises the following:</p>
                <ol>
                  <li>Stay home and take care of yourself in home isolation</li>
                  <li> Prevention and precautions
                    <a href="#details" class="link"> &nbsp;See Below</a>
                  </li>
                  <li>
                    Laboratory tests and imaging are optional
                    <span class="lite-text"
                      >(and as per your physician’s advise)</span
                    >
                  </li>
                  <li>
                    COVID 19 testing may be required at your physician’s advise
                  </li>
                  <li>
                    Monitor your symptoms and get medical attention if your situation
                    worsens
                  </li>
                </ol>
              </section>    
        }

        { (score !== null &&  (score >= 6 && score <=12)) &&
            <section class="section-two card section-margin">
              <p>Based on your inputs, A1Abilities recommendations:</p>
              <ol>
                <li>CONSULT A PHYSICIAN and start home isolation immediately</li>
                <li>
                  Prevention and precautions
                  <a href="#details" class="link"> &nbsp;See Below</a>
                </li>
                <li>
                  Laboratory tests and imaging may be needed as per your physician’s advise              
                </li>
                <li>
                  COVID 19 testing may be required at your physician’s advise
                </li>
                <li>
                  Monitor your symptoms and get medical attention if your situation
                  worsens
                </li>
              </ol>
            </section>
        }

        { (score !== null &&  (score >= 13)) &&
            <section class="section-two card section-margin">
              <p>Based on your inputs, A1Abilities recommendations:</p>
              <ol>
                <li>Seek immediate medical attention and get yourself tested</li>
                <li>Please visit a physician as there may be a requirement for further care</li>
                <li>COVID 19 testing may be needed at your physician’s advise</li>
                <li>
                  Prevention and precautions
                  <a href="#details" class="link">&nbsp; See Below</a>
                </li>
                <li> Laboratory tests and imaging may be needed as per your physician's advise </li>
                <li> Monitor your symptoms and isolate yourself </li>
                <li> You can CONSULT ONLINE here to speak to a physician immediately </li>
              </ol>
            </section>
        }

        <section class="section-four" id="details">
          <h3>Prevention and Precautions - Basic protective measures</h3>
          <p>
            Be aware or Educate yourself with the latest updates on the
            following websites : 
            <a href="https://www.who.int/health-topics/coronavirus" target="_blank" >WHO </a> &
            <a href="https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert" target="_blank"> Department of Health - Australia</a>&
            <a href="https://www.healthdirect.gov.au/" target="_blank"> Health Direct</a>
          </p>
          <p>
            Most people who become infected experience mild illness and recover,
            but it can be more severe for others. Take care of your health and
            protect others by doing the following:
          </p>
          <ul>
            <li>
              <h4>Wash your hands frequently</h4>
              <p>
                Regularly and thoroughly clean your hands with an alcohol-based
                hand rub or wash them with soap and water.
              </p>
            </li>
            <li>
              <h4>Maintain social distancing</h4>
              <p>
                Maintain at least 2 metre (6 feet) distance between yourself and
                anyone who is coughing or sneezing.
              </p>
            </li>
            <li>
              <h4>Avoid touching eyes, nose and mouth</h4>
              <p>
                Our hands touch many surfaces and can pick up viruses. Once
                contaminated, hands can transfer the virus to your eyes, nose or
                mouth.
              </p>
            </li>
            <li>
              <h4>Practice respiratory hygiene</h4>
              <p>
                Make sure you and the people around you, follow good respiratory
                hygiene. This means covering your mouth and nose with your bent
                elbow or tissue when you cough or sneeze. Then dispose of the
                used tissue immediately.
              </p>
            </li>
            <li>
              <h4>
                If you have fever, cough and difficulty in breathing, seek
                medical care early
              </h4>
              <p>
                Stay home if you feel unwell. If you have a high fever, moderate
                to severe cough and difficulty in breathing and it is worsening
                in short period of time, seek medical asistance and call in
                advance.
              </p>
            </li>
          </ul>
         
        <button  onClick={props.history.push('/')}>
        <i class="fas fa-arrow-left"></i>
          </button>

        </section>
      </div>
    </main>
    </div>
  );
}

export default Info;
