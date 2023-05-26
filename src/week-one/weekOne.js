export function loadWeekOneAssignment(container) {
    for (let i = container.children.length - 1; i >= 0; i--) {
                let e = container.children[i];
                e.remove();
            }
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
    for (let i = container.children.length - 1; i >= 0; i--) {
        let e = container.children[i];
        e.remove();
    }

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
