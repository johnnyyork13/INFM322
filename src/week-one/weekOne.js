function removeContent(container) {
    for (let i = container.children.length - 1; i >= 0; i--) {
        let e = container.children[i];
        e.remove();
    }
}

export function loadWeekOneAssignment(container) {
    removeContent(container);
    container.innerHTML = `
    <div id="weekOneAssignment">
        <h2>Critiquing a Website</h2>
        <a href="./assets/NYTCritique.pdf" target="_blank">New York Times (PDF)</a>
        <a href="./assets/Stanford Critique.pdf" target="_blank">Stanford University (PDF)</a>
        <a href="./assets/FaoSchwarzCritique.pdf" target="_blank">Fao Schwarz (PDF)</a>
    </div>
    `
}

export function loadWeekOneDiscussion(container) {
    removeContent(container);
    container.innerHTML = `
    <div id="weekOneDiscussion">
            <h2 style="margin-bottom: 20px; font-weight: bolder; font-size: 2em; text-align: center;" >What is Web Design?</h2>

            <p style>When building a website, HTML is really the only front-end component that is needed to display it to the user. What makes a website extraordinary, however, is the implementation of styles and design that make the user's experience better and more intuitive. Good UX design, CSS, and JavaScript can all be used to provide an exemplary user experience. These technologies and practices are not a requirement to build a working site, but they are paramount in keeping it competitive. And, developers who do not utilize them will ensure that the products they deliver will become irrelevant or disregarded.</p>
            <br>
            <p>Personally, I believe that in order to deliver a website that meets today's standards it really only needs to have HTML, CSS, and JavaScript. These components are the foundation of a great website, as they provide the core ingredients to a well-rounded experience. HTML provides the structure, while CSS styles and transforms the DOM into something appealing to the user. JavaScript provides added functionality, and great UX design brings them all together. There are of course many other technologies that a developer can utilize to increase their site's effectiveness, but with these four ingredients a developer can produce any site with the ability to stay competitive in today's constantly growing technology market.</p>
            <br>
            <p style="font-size: 1.2em; text-align: center; font-weight: bolder;">References</p>
            <br>
            <p>Interactive Design Foundation. (n.d.). User experience (UX) design. <a target="_blank" style="color: blue; text-decoration: underline;"href="https://www.interaction-design.org/literature/topics/ux-design#:~:text=User%20experience%20(UX)%20design%20is,%2C%20design%2C%20usability%20and%20function">https://www.interaction-design.org/literature/topics/ux-design#:~:text=User%20experience%20(UX)%20design%20is,%2C%20design%2C%20usability%20and%20function</a>.</p>
            <br>
            <p>Petersen, J. (2015, Feb 11). Understanding the anatomy of a website. Adobe. <a target="_blank" style="color: blue; text-decoration: underline;" href="https://helpx.adobe.com/dreamweaver/how-to/anatomy-of-website-construction.html?playlist=/ccx/v1/collection/product/dreamweaver/segment/designer/explevel/beginner/applaunch/orientation/collection.ccx.js&ref=helpx.adobe.com">https://helpx.adobe.com/dreamweaver/how-to/anatomy-of-website-construction.html?playlist=/ccx/v1/collection/product/dreamweaver/segment/designer/explevel/beginner/applaunch/orientation/collection.ccx.js&ref=helpx.adobe.com</a></p>
        </div>
    `
}

export function loadWeekOneReflection(container) {
    removeContent(container);
    container.innerHTML = `
    <div id="weekOneReflection">
            <h2>Week One Reflections</h2>
            <h3>Identify and define 10 crucial elements of the web design:</h3>
            <ol>
                <li>Space- Dictates readability and flow. Also helps with grouping like elements together.</li>
                <li>Simple Navigation- Allows users to easily navigate through a site.</li>
                <li>About Us- Tells the users who you are and what you do. </li>
                <li>Contact Information- Adds legitimacy to your site as well as allowing users to contact you.</li>
                <li>Call to Action- Obvious prompts or instructions to encourage users to do a desirable thing.</li>
                <li>Search- a feature that allows users to search your site for information.</li>
                <li>Informational Footer- a section at the end of the page containing more useful information.</li>
                <li>Button Styles- Make buttons recognizable as buttons.</li>
                <li>Images- Pick images that draw attention and illustrate your brand.</li>
                <li>Web Fonts- Use fonts that stand out and are easily readable.</li>
            </ol>

            <h3>What is the difference between HTML and CSS?</h3>
            <p>HTML is a markup language that is used to design and build static web pages. CSS is a styling language 
                that is responsible for styling and adding visual appeal to those web pages. 
            </p>
            <h3>Why is UX important for web design?</h3>
            <p>UX is important because it provides a positive experience to a website's users.
                When a user's experience is positive and fulfills their needs, they are more likely
                to return and continue using the website in the future. This is vital for a company
                or website to be successful, as returning users are the foundation of 
                a successful website. 
            </p>
        </div>`
}
