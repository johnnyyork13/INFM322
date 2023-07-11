function removeContent(container) {
    for (let i = container.children.length - 1; i >= 0; i--) {
        let e = container.children[i];
        e.remove();
    }
}

export function loadWeekFourAssignment(container) {
    removeContent(container);
    container.innerHTML = `
    
    <div id="weekFourAssignment">

        <div class="layout">
            <div class="layout-slide-container">
                <img  class="layout-slide" src="../../assets/Storyboard/Slide1.PNG" alt="Storyboard Slide" />
                <img  class="layout-slide"src="../../assets/Storyboard/Slide2.PNG" alt="Storyboard Slide" />
                <img  class="layout-slide"src="../../assets/Storyboard/Slide3.PNG" alt="Storyboard Slide" />
                <img  class="layout-slide"src="../../assets/Storyboard/Slide4.PNG" alt="Storyboard Slide" />
                <img  class="layout-slide"src="../../assets/Storyboard/Slide5.PNG" alt="Storyboard Slide" />
                <img  class="layout-slide"src="../../assets/Storyboard/Slide6.PNG" alt="Storyboard Slide" />
                <img  class="layout-slide"src="../../assets/Storyboard/Slide7.PNG" alt="Storyboard Slide" />
                <img  class="layout-slide"src="../../assets/Storyboard/Slide8.PNG" alt="Storyboard Slide" />
            </div>

        </div>


    </div>


    `
}

export function loadWeekFourDiscussion(container) {
    removeContent(container);
    container.innerHTML = `
    
    <div id="weekFourDiscussion">

        <div class="layout">
            <h2>Week Four Discussion</h2>
            <h3>In this week's readings, we talk about multimedia.  The following pages use a lot of multimedia.  Which one is, for you, the most outstanding?  What factor influenced your decision?  From what we learned in the course, which is the worst design? What factors are missing?</h3>
            <p>Out of the examples, the website that I believe to be the most outstanding is Bruno Simons. This website is basically a portfolio that displays their skills, but what really makes it interesting and unique is how the developer implemented a vehicle to drive around and navigate their site. Although it lacks basic components like your standard header, main section, and footer, it makes up for it by including all of a typical websites functionality in a fun, interesting design. For example, the social media section can be found by driving the vehicle to a crossroads and following a sign. This website is definitely a winner, as it enhances the user's experience, is engaging and interesting, loaded relatively fast, and is of high quality. </p>
            <p>The website I disliked the most is The Craftsmen. The site was visually unappealing and looked confusing. The layout had too many moving parts and felt very cluttered. Also, the font was extremely large and everything on the site felt like it was being shoved in my face. Regarding the multimedia components, they lacked any engaging qualities and served only to disparage my experience. What little interactivity the site had felt uninspired and boring. So, if I were charged with improving the site I would begin by making the website more engaging and intuitive for the user. I would also increase the amount of negative space between elements and decrease the font size, as this was the first negative visual component I noticed. This website was definitely subpar in my opinion, but with a little bit of retouching this site could undoubtedly turn into a positive user experience. </p>
            </div>
        <h3 class="reference">References</h3>
        <h2>Nielsen, J. (1995, November 30). Guidelines for multimedia on the web. NNGroup. https://www.nngroup.com/articles/guidelines-for-multimedia-on-the-web/</h2>
        <h2>Kuehler, S. (2023, May 15). Multimedia elements in web design. MyWebsiteSpot. https://www.mywebsitespot.com/multimedia-elements-in-web-design/</h2>
    </div>

    `
}

export function loadWeekFourReflection(container) {
    removeContent(container);
    container.innerHTML = `
    
    <div id="weekFourReflection">

        <div class="layout">
            <h2>Week Four Reflections</h2>
            <h3>What is multimedia?</h3>
            <p>Multimedia is a type of interactive media that enhances a users experience on their computing devices, like on their cellphones or computers. </p>
            <p>Multimedia includes types of media like videos, graphics, animations, and audio. These components are typically used together to create a positive, more fulfilling user experience.</p>

            <h3>What is a good amount of multimedia?</h3>
            <p>A good amount of multimedia enhances the user experience in a positive way without cluttering the viewport or misguiding the user. Multimedia components should be used in tandom to facilitate an intuitive and engaging experience for the user, and overrusing or exploiting them should always be avoided.</p>

            <h3>What are the disadvantages of multimedia?</h3>
            <p>Multimedia can become a bad thing when used too often, as it can become cumbersome and can delay the loading times on a website. Overruse of multimedia can also lead to a bad user experience, as it can cause confusion or make the website feel crowded and unseemly.</p>
            
        </div>

    </div>

    `
}