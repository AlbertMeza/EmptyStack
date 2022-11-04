//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.js';
//import Accordion from 'react-bootstrap/Accordion';
import { Accordion } from "semantic-ui-react";
import 'react-bootstrap-accordion/dist/index.css';
import questions from '../images/GetImageAttachment.png';

const textPlaceholder = "In progress";

// CONTENT WOULD BE STORED AND READ THROUGH THE DATABASE
let day1Content = (
    <div>
        <h2>Intro to web app layout design using HTML </h2>

        <ul>
            <li><h5> Resources </h5></li>
                <ul>
                    <li><a href='https://www.internetingishard.com/html-and-css/basic-web-pages/' target="_blank" rel="noopener noreferrer"> 
                        Beginner intro to building web pages with HTML 
                    </a></li>
                    <li><a href='https://www.internetingishard.com/html-and-css/links-and-images/' target="_blank" rel="noopener noreferrer"> 
                        Dealing with links & images in HTML  
                    </a></li>
                    <li><a href='https://www.internetingishard.com/html-and-css/semantic-html/' target="_blank" rel="noopener noreferrer"> 
                        Intermediate HTML with better semantics  
                    </a></li>
                </ul>
            <br></br>

            <li><h5> Topics Covered </h5></li>
                <ul>
                    <li> Intro to full-stack web development  </li>
                    <li> What is HTML & how is it used in building web applications? 
                        <ul>
                            <li> HTML Tags </li>
                            <li> HTML Elements </li>
                            <li> HTML Attributes </li>
                        </ul> 
                    </li>
                    <li> Getting comfortable with mostly used terminal/command line commands  </li>
                </ul>
            <br></br>

            <li><h5> In-class Activities </h5></li>
                <ul>
                    <li><a href='https://gist.github.com/jonly03/e5901b9269a180b80d4543c2093d7338' target="_blank" rel="noopener noreferrer">
                            <u> My Favorite [x] </u>
                    </a></li>
                </ul>
            <br></br>

            <li><h5> Homework </h5></li>
                <ul>
                    <li><a href='https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/step-1'  target="_blank" rel="noopener noreferrer"> 
                        Cafe Menu with HTML & CSS
                    </a></li>
                </ul>
            <br></br>

            <li><h5> DELIVERABLE </h5></li>
                <ul>
                    <li>
                        Use <a href='https://loom.grsm.io/nellysugu' target="_blank" rel="noopener noreferrer"> https://loom.grsm.io/nellysugu </a>
                        to record me a 5 min video recapping the main things you learned today and showcasing how you used them (I expect to see some screen share with your code). 
                    </li>
                    <li>
                        Use your recording link to reply to my thread in your Teams channel. 
                    </li>
                    <li>
                        Remember to reflect on the following questions at the end of the day (feel free to include your answers in your video recording) 
                        <img src={questions} alt="Questions to ask yourself" />
                    </li>
                </ul>
        </ul>
         
    </div>
);

let day2Content = (
    <div>
        <h2>Intro to web app layout design using HTML </h2>

        <ul>
            <li><h5> Resources </h5></li>
                <ul>
                    <li><a href='https://www.internetingishard.com/html-and-css/basic-web-pages/' target="_blank" rel="noopener noreferrer"> 
                        Beginner intro to building web pages with HTML 
                    </a></li>
                    <li><a href='https://www.internetingishard.com/html-and-css/links-and-images/' target="_blank" rel="noopener noreferrer"> 
                        Dealing with links & images in HTML  
                    </a></li>
                    <li><a href='https://www.internetingishard.com/html-and-css/semantic-html/' target="_blank" rel="noopener noreferrer"> 
                        Intermediate HTML with better semantics  
                    </a></li>
                </ul>
            <br></br>

            <li><h5> Topics Covered </h5></li>
                <ul>
                    <li> Intro to full-stack web development  </li>
                    <li> What is HTML & how is it used in building web applications? 
                        <ul>
                            <li> HTML Tags </li>
                            <li> HTML Elements </li>
                            <li> HTML Attributes </li>
                        </ul> 
                    </li>
                    <li> Getting comfortable with mostly used terminal/command line commands  </li>
                </ul>
            <br></br>

            <li><h5> In-class Activities </h5></li>
                <ul>
                    <li><a href='https://gist.github.com/jonly03/e5901b9269a180b80d4543c2093d7338' target="_blank" rel="noopener noreferrer">
                            <u> My Favorite [x] </u>
                    </a></li>
                </ul>
            <br></br>

            <li><h5> Homework </h5></li>
                <ul>
                    <li><a href='https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/step-1'  target="_blank" rel="noopener noreferrer"> 
                        Cafe Menu with HTML & CSS
                    </a></li>
                </ul>
            <br></br>

            <li><h5> DELIVERABLE </h5></li>
                <ul>
                    <li>
                        Use <a href='https://loom.grsm.io/nellysugu' target="_blank" rel="noopener noreferrer"> https://loom.grsm.io/nellysugu </a>
                        to record me a 5 min video recapping the main things you learned today and showcasing how you used them (I expect to see some screen share with your code). 
                    </li>
                    <li>
                        Use your recording link to reply to my thread in your Teams channel. 
                    </li>
                    <li>
                        Remember to reflect on the following questions at the end of the day (feel free to include your answers in your video recording) 
                        <img src={questions} alt="Questions to ask yourself" />
                    </li>
                </ul>
        </ul>
         
    </div>
);

let day3Content = (
    <div>
        <h2>Intro to web app layout design using HTML </h2>

        <ul>
            <li><h5> Resources </h5></li>
                <ul>
                    <li><a href='https://www.internetingishard.com/html-and-css/basic-web-pages/' target="_blank" rel="noopener noreferrer"> 
                        Beginner intro to building web pages with HTML 
                    </a></li>
                    <li><a href='https://www.internetingishard.com/html-and-css/links-and-images/' target="_blank" rel="noopener noreferrer"> 
                        Dealing with links & images in HTML  
                    </a></li>
                    <li><a href='https://www.internetingishard.com/html-and-css/semantic-html/' target="_blank" rel="noopener noreferrer"> 
                        Intermediate HTML with better semantics  
                    </a></li>
                </ul>
            <br></br>

            <li><h5> Topics Covered </h5></li>
                <ul>
                    <li> Intro to full-stack web development  </li>
                    <li> What is HTML & how is it used in building web applications? 
                        <ul>
                            <li> HTML Tags </li>
                            <li> HTML Elements </li>
                            <li> HTML Attributes </li>
                        </ul> 
                    </li>
                    <li> Getting comfortable with mostly used terminal/command line commands  </li>
                </ul>
            <br></br>

            <li><h5> In-class Activities </h5></li>
                <ul>
                    <li><a href='https://gist.github.com/jonly03/e5901b9269a180b80d4543c2093d7338' target="_blank" rel="noopener noreferrer">
                            <u> My Favorite [x] </u>
                    </a></li>
                </ul>
            <br></br>

            <li><h5> Homework </h5></li>
                <ul>
                    <li><a href='https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/step-1'  target="_blank" rel="noopener noreferrer"> 
                        Cafe Menu with HTML & CSS
                    </a></li>
                </ul>
            <br></br>

            <li><h5> DELIVERABLE </h5></li>
                <ul>
                    <li>
                        Use <a href='https://loom.grsm.io/nellysugu' target="_blank" rel="noopener noreferrer"> https://loom.grsm.io/nellysugu </a>
                        to record me a 5 min video recapping the main things you learned today and showcasing how you used them (I expect to see some screen share with your code). 
                    </li>
                    <li>
                        Use your recording link to reply to my thread in your Teams channel. 
                    </li>
                    <li>
                        Remember to reflect on the following questions at the end of the day (feel free to include your answers in your video recording) 
                        <img src={questions} alt="Questions to ask yourself" />
                    </li>
                </ul>
        </ul>
         
    </div>
);

let day4Content = (
    <div>
        <h2>Intro to web app layout design using HTML </h2>

        <ul>
            <li><h5> Resources </h5></li>
                <ul>
                    <li><a href='https://www.internetingishard.com/html-and-css/basic-web-pages/' target="_blank" rel="noopener noreferrer"> 
                        Beginner intro to building web pages with HTML 
                    </a></li>
                    <li><a href='https://www.internetingishard.com/html-and-css/links-and-images/' target="_blank" rel="noopener noreferrer"> 
                        Dealing with links & images in HTML  
                    </a></li>
                    <li><a href='https://www.internetingishard.com/html-and-css/semantic-html/' target="_blank" rel="noopener noreferrer"> 
                        Intermediate HTML with better semantics  
                    </a></li>
                </ul>
            <br></br>

            <li><h5> Topics Covered </h5></li>
                <ul>
                    <li> Intro to full-stack web development  </li>
                    <li> What is HTML & how is it used in building web applications? 
                        <ul>
                            <li> HTML Tags </li>
                            <li> HTML Elements </li>
                            <li> HTML Attributes </li>
                        </ul> 
                    </li>
                    <li> Getting comfortable with mostly used terminal/command line commands  </li>
                </ul>
            <br></br>

            <li><h5> In-class Activities </h5></li>
                <ul>
                    <li><a href='https://gist.github.com/jonly03/e5901b9269a180b80d4543c2093d7338' target="_blank" rel="noopener noreferrer">
                            <u> My Favorite [x] </u>
                    </a></li>
                </ul>
            <br></br>

            <li><h5> Homework </h5></li>
                <ul>
                    <li><a href='https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/step-1'  target="_blank" rel="noopener noreferrer"> 
                        Cafe Menu with HTML & CSS
                    </a></li>
                </ul>
            <br></br>

            <li><h5> DELIVERABLE </h5></li>
                <ul>
                    <li>
                        Use <a href='https://loom.grsm.io/nellysugu' target="_blank" rel="noopener noreferrer"> https://loom.grsm.io/nellysugu </a>
                        to record me a 5 min video recapping the main things you learned today and showcasing how you used them (I expect to see some screen share with your code). 
                    </li>
                    <li>
                        Use your recording link to reply to my thread in your Teams channel. 
                    </li>
                    <li>
                        Remember to reflect on the following questions at the end of the day (feel free to include your answers in your video recording) 
                        <img src={questions} alt="Questions to ask yourself" />
                    </li>
                </ul>
        </ul>
         
    </div>
);

let day5Content = (
    <div>
        <h2>Intro to web app layout design using HTML </h2>

        <ul>
            <li><h5> Resources </h5></li>
                <ul>
                    <li><a href='https://www.internetingishard.com/html-and-css/basic-web-pages/' target="_blank" rel="noopener noreferrer"> 
                        Beginner intro to building web pages with HTML 
                    </a></li>
                    <li><a href='https://www.internetingishard.com/html-and-css/links-and-images/' target="_blank" rel="noopener noreferrer"> 
                        Dealing with links & images in HTML  
                    </a></li>
                    <li><a href='https://www.internetingishard.com/html-and-css/semantic-html/' target="_blank" rel="noopener noreferrer"> 
                        Intermediate HTML with better semantics  
                    </a></li>
                </ul>
            <br></br>

            <li><h5> Topics Covered </h5></li>
                <ul>
                    <li> Intro to full-stack web development  </li>
                    <li> What is HTML & how is it used in building web applications? 
                        <ul>
                            <li> HTML Tags </li>
                            <li> HTML Elements </li>
                            <li> HTML Attributes </li>
                        </ul> 
                    </li>
                    <li> Getting comfortable with mostly used terminal/command line commands  </li>
                </ul>
            <br></br>

            <li><h5> In-class Activities </h5></li>
                <ul>
                    <li><a href='https://gist.github.com/jonly03/e5901b9269a180b80d4543c2093d7338' target="_blank" rel="noopener noreferrer">
                            <u> My Favorite [x] </u>
                    </a></li>
                </ul>
            <br></br>

            <li><h5> Homework </h5></li>
                <ul>
                    <li><a href='https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/step-1'  target="_blank" rel="noopener noreferrer"> 
                        Cafe Menu with HTML & CSS
                    </a></li>
                </ul>
            <br></br>

            <li><h5> DELIVERABLE </h5></li>
                <ul>
                    <li>
                        Use <a href='https://loom.grsm.io/nellysugu' target="_blank" rel="noopener noreferrer"> https://loom.grsm.io/nellysugu </a>
                        to record me a 5 min video recapping the main things you learned today and showcasing how you used them (I expect to see some screen share with your code). 
                    </li>
                    <li>
                        Use your recording link to reply to my thread in your Teams channel. 
                    </li>
                    <li>
                        Remember to reflect on the following questions at the end of the day (feel free to include your answers in your video recording) 
                        <img src={questions} alt="Questions to ask yourself" />
                    </li>
                </ul>
        </ul>
         
    </div>
);

const level1Panels = [
    { key: "panel-1a", title: "Day 1", content: { content: day1Content }},
    { key: "panel-ba", title: "Day 2", content: { content: day2Content }},
    { key: "panel-1a", title: "Day 3", content: { content: day3Content }},
    { key: "panel-ba", title: "Day 4", content: { content: day4Content }},
    { key: "panel-ba", title: "Day 5", content: { content: day5Content }}
];



const Week1Content = (
    <div>
      Welcome to Week 1
      <Accordion.Accordion panels={level1Panels} />
    </div>
  );
  
  const level2Panels = [
    { key: "panel-1a", title: "Day 1", content: textPlaceholder},
    { key: "panel-ba", title: "Day 2", content: textPlaceholder},
    { key: "panel-1a", title: "Day 3", content: textPlaceholder},
    { key: "panel-ba", title: "Day 4", content: textPlaceholder},
    { key: "panel-ba", title: "Day 5", content: textPlaceholder}
  ];
  
  const Week2Content = (
    <div>
      Welcome to Week 2
      <Accordion.Accordion panels={level2Panels} />
    </div>
  );

  const level3Panels = [
    { key: "panel-1a", title: "Day 1", content: textPlaceholder },
    { key: "panel-ba", title: "Day 2", content: textPlaceholder },
    { key: "panel-1a", title: "Day 3", content: textPlaceholder },
    { key: "panel-ba", title: "Day 4", content: textPlaceholder },
    { key: "panel-ba", title: "Day 5", content: textPlaceholder }
  ];
  
  const Week3Content = (
    <div>
      Welcome to Week 3
      <Accordion.Accordion panels={level3Panels} />
    </div>
  );

  const level4Panels = [
    { key: "panel-1a", title: "Day 1", content: textPlaceholder },
    { key: "panel-ba", title: "Day 2", content: textPlaceholder },
    { key: "panel-1a", title: "Day 3", content: textPlaceholder },
    { key: "panel-ba", title: "Day 4", content: textPlaceholder },
    { key: "panel-ba", title: "Day 5", content: textPlaceholder }
  ];
  
  const Week4Content = (
    <div>
      Welcome to Week 4
      <Accordion.Accordion panels={level4Panels} />
    </div>
  );
  
  const rootPanels = [
    { key: "panel-1", title: "Week 1", content: { content: Week1Content } },
    { key: "panel-2", title: "Week 2", content: { content: Week2Content } },
    { key: "panel-3", title: "Week 3", content: { content: Week3Content } },
    { key: "panel-4", title: "Week 4", content: { content: Week4Content } },
  ];

  /* fix the splits here */
  const username = document.cookie
                    .split(';')[1]
                    .split('=')[1];

const InstructorDashboard = () => {
    return (
        <>
  {/*[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]*/}
  {/*[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]*/}
  {/*[if IE 8]>         <html class="no-js lt-ie9"> <![endif]*/}
  {/*[if gt IE 8]>      <html class="no-js"> <!--<![endif]*/}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title>{username}'s Dashboard</title>
  <meta name="description" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossOrigin="anonymous"
  />
  <div className="container-fluid min-vh-100">
    <div className="row h-40">
      <div className="col-md-12"><h3>{username}'s Welcome Message</h3></div>
    </div>

    <div className="row">
      <div className="col-md-9">
        <Accordion defaultActiveIndex={0} panels={rootPanels} styled />
      </div>

      <div className="col-md-3">
      <h5>Resources</h5>
      <p><a href="https://developer.mozilla.org/en-US/">The Bible</a></p>
      <p><a href="https://http.cat/" target="_blank" rel="noopener noreferrer" >Learn HTTP codes</a></p>
      <p><a href="https://javascript.info/" target="_blank" rel="noopener noreferrer" >Javascript</a></p>
      <p><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" >Express</a></p>
      <p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem" target="_blank" rel="noopener noreferrer" >Local Storage</a></p>
      <p><a href="https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/" target="_blank" rel="noopener noreferrer" >Big O notation</a></p>
      <p><a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account" target="_blank" rel="noopener noreferrer" >Adding SSH to github</a></p>
      <p><a href="https://www.npmjs.com/package/body-parser" target="_blank" rel="noopener noreferrer" >NPM Body Parser</a></p>
      <p><a href="https://youtu.be/GZvSYJDk-us" target="_blank" rel="noopener noreferrer" >APIs for Beginners</a></p>
      <p><a href="https://www.mongodb.com/docs/v5.0/reference/mongo-shell/" target="_blank" rel="noopener noreferrer" >MongoDB</a></p>
      <p><a href="https://mongoosejs.com/" target="_blank" rel="noopener noreferrer" >Mongoose</a></p>
      <p><a href="https://ejs.co/" target="_blank" rel="noopener noreferrer" >EJS</a></p>
      <p><a href="https://medium.com/make-school/how-to-deploy-your-node-js-mongodb-app-to-the-web-using-heroku-63d4bccf2675" target="_blank" rel="noopener noreferrer" >Deploy to Heroku</a></p>
      <p><a href="https://docs.npmjs.com/cli/v8/using-npm/scripts" target="_blank" rel="noopener noreferrer" >Scripts</a></p>
      <p><a href="https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow" target="_blank" rel="noopener noreferrer" >Redux</a></p>
      <p><a href="https://www.npmjs.com/package/axios" target="_blank" rel="noopener noreferrer" >Axios</a></p>
      </div>
    </div>
  </div>
</>
    )
}

export default InstructorDashboard