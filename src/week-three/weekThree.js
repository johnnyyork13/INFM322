function removeContent(container) {
    for (let i = container.children.length - 1; i >= 0; i--) {
        let e = container.children[i];
        e.remove();
    }
}

export function loadWeekThreeAssignment(container) {
    removeContent(container);
    container.innerHTML = `
    
    <div id="weekThreeAssignment">

        <div class="layout">
            <div class="layout-slide-container">
                <img  class="layout-slide" src="./assets/Proposal/Picture1.png" alt="Storyboard Slide" />
                <img  class="layout-slide"src="./assets/Proposal/Picture2.png" alt="Storyboard Slide" />
            </div>

        </div>


    </div>


    `
}


export function loadWeekThreeDiscussion(container) {
    removeContent(container);
    container.innerHTML = `
    
    <div id="weekThreeDiscussion">

        <div class="layout">
            <h2>Week Three Discussion</h2>
            <h3>In week 1, we read about HTML, CSS, Web design standards and practices, the principles of UX, and the Stages of web design.  In week 2, we read about templates, and layouts and created our first webpage with the elements of a good web page.  In week 3, we read about bootstraps, CSS and create our first website.   What elements will you consider to design, construct and evaluate a web page?</h3>
            <p>There are many elements to consider when designing, constructing, and evaluating a web page. I believe one of the most significant elements to consider is whether the page itself meets the needs of the target audience. Many websites fail or become unsuccessful because they are unable to adequately meet the needs of its users. This leads users to alternative or similar sites, resulting in a declining or stagnating user base. </p>
            <p>Another element that I would consider is usability. Designing a website that is intuitive and has proper flow is essential in today's world, as user's are easily frustrated and turned off by poor design. Aspects like the placement of textboxes, buttons, and text are essential in maintaining an intuitive and user-friendly website. </p>
            <p>That last element I would like to mention as a consideration is overall visual design. The appearance of a web page, and the site itself, should be appealing and properly align itself with the brand of the company or organization it represents. This is where aspects like layouts, colors, and typography come into play to ensure the reception of the website is positive and represents the company's directives.</p>
            <p>There are many more elements to consider when designing, constructing, and evaluating a webpage, but I believe that the three I mentioned are, in my opinion, currently the most significant in today's world. </p>
            </div>

            <h2 class="reference">References</h3>
            <h3>Khazanovoa, A. (2023, January 1). 20 principles of website design every web professional should know. Elementor. https://elementor.com/blog/principles-of-website-design</h3>
            <h3>Leonard, C. (2015, November 19). 10 things to consider when planning a website design. NTen. https://www.nten.org/blog/10-things-to-consider-when-planning-a-website-design-or-re-design</h2>

    </div>


    `
}

export function loadWeekThreeReflection(container) {
    removeContent(container);
    container.innerHTML = `
    
    <div id="weekThreeReflection">

        <div class="layout">
            <h2>Week Three Reflections</h2>
            <h3>What is Bootstrap?</h3>
            <p>Bootstrap is a CSS framework that allows a developer to utilize special class names in their HTML to build responsive, mobile-friendly websites.</p>

            <h3>What is the difference between CSS and Bootstrap?</h3>
            <p>Bootstrap is a CSS framework that relies on and utilizes CSS to function, while CSS is a standalone programming language that allows web developers to style webpages according to their own standards.</p>
        
            <h3>What are the advantages of CSS?</h3>
            <p>While Bootstrap makes building and designing responsive websites easier and quicker, it has its own set of specifications that limits a web developers ability to fully customize their web sites. This makes CSS a better choice in certain circumstances, as it enables the prospect of full customization.</p>

        </div>


    </div>


    `
}