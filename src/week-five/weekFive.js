function removeContent(container) {
    for (let i = container.children.length - 1; i >= 0; i--) {
        let e = container.children[i];
        e.remove();
    }
}

export function loadWeekFiveAssignment(container) {
    removeContent(container);
    container.innerHTML = `
    
    <div id="weekFiveAssignment">

        <div class="layout">
            <img src="./assets/Golden-Rules.png" />
        </div>

    </div>

    `
}

export function loadWeekFiveDiscussion(container) {
    removeContent(container);
    container.innerHTML = `
    
    <div id="weekFiveDiscussion">

        <div class="layout">
            <h2>Week Five Discussion</h2>
            <h3>This Week, we read about ethics, why to study ethics in Informatics, ethics of web design, and Civic Learning.  According to the Association of American Colleges & Universities (2012), universities must prepare their students in Civic Learning.  According to AACU, "this is a turbulent and dynamic century, our nation’s diverse democracy and interdependent global community require a more informed, engaged, and socially responsible citizenry. Both educators and employers agree that personal and social responsibility should be core elements of a 21st century college education if our world is to thrive" To accomplish this proposal, the AACU identifies Five Dimensions in which college education can improve.  These are</h3>
            <ol>
                <li>1. Striving for excellence: developing a strong work ethic and consciously doing one’s very best in all aspects of college;</li>
                <li>2. Cultivating personal and academic integrity: recognizing and acting on a sense of honor, ranging from honesty in relationships to principled engagement with a formal academic honors code;</li>
                <li>3. Contributing to a larger community: recognizing and acting on one’s responsibility to the educational community and the wider society, locally, nationally, and globally;</li>
                <li>4. Taking seriously the perspectives of others: recognizing and acting on the obligation to inform one’s own judgment; engaging diverse and competing perspectives as a resource for learning, citizenship, and work;</li>
                <li>5. Developing competence in ethical and moral reasoning and action: developing ethical and moral reasoning in ways that incorporate the other four responsibilities; using such reasoning in learning and life.</li>
            
                </ol>
            <h3>According to the week's reading, which of these dimensions do we cover in our course, and how do they impact your vision of web design? </h3>
            <p>I believe that we practice all of the mentioned ethics dimensions in this course. Morals are integral in college, and are paramount in ensuring that the student receives a valid education while also reinforcing the education of their peers. For example, number four states the importance of learning through shared perspectives. Sharing views and perspectives in a classroom environment is paramount in a well-rounded educational experience, as it challenges the student to think critically and reflect on material while simultaneously allowing an opportunity to receive the unique view and reflection of another. This course utilizes this dimension weekly through our collaboration on these discussion posts.</p>
            <p>Another great example is number two, which focuses on academic integrity and honesty. Integrity is something that can be easily tarnished in today's technological world, as the opportunity to use work or ideas from others is becoming more readily available and easier to obtain. Regarding this course, integrity is considered extremely vital. Components of our webpages like our logos, information, and artwork must be original or, at the very least, licensed. Personally, I always try to produce the media I use on my work myself before looking on the web for licensed or open-source material. Besides, it's always more fun to create it yourself!</p>

            <h2 class="reference">References</h2>
            <p>Hersh, R., Schneider, C. (n.d.) Fostering personal and social responsibility on college and university campuses. AACU. https://secure.aacu.org/AACU/PubExcerpts/LESUFA05.html</p>
            <p>Five dimensions of PSRI. (n.d.) Iowa State University. https://www.psri.hs.iastate.edu/dimensions.php</p>
            </div>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
    </div>

    `
}

export function loadWeekFiveReflection(container) {
    removeContent(container);
    container.innerHTML = `
    
    <div id="weekFiveReflection">

        <div class="layout">
            <h2>Week Five Reflections</h2>
            <h3>Reflect on the 5 dimensions of Personal and Social Responsibility and how you are working to achieve them.</h3>

            <p>I think it's great that Mercer incentives proper ethics to its students. Being in an online class, I can understand the temptation to utilize or source material that doesn't belong to me.
            I believe that this does me a disservice, though, as I am here to learn and grow as a person and as a programmer. This means that I intend to always
            practice honesty in my coursework, as well as in my everyday life. This also means that I intend to contribute to my (school) community by assisting 
            classmates where I can. Lastly, this means that I accept others for who they are, regardless of their limitations or lack thereof. </p>

            <p>I believe that these 5 dimensions of Personal and Social Responsibility are significant to me personally, and I intend to uphold them throughout the remainder of my admission at Mercer. </p>
        
            </div>

    </div>

    `
}