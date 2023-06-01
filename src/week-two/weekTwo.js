function removeContent(container) {
    for (let i = container.children.length - 1; i >= 0; i--) {
        let e = container.children[i];
        e.remove();
    }
}

export function loadWeekTwoAssignment(container) {
    removeContent(container);
    container.innerHTML = `
        <div id="weekTwoAssignment">
            <h2>Evaluate Online Design</h2>
            <table>
                <thead>
                    <th></th>
                    <th>Advantages</th>
                    <th>Disadvantages</th>
                    <th>Limitations</th>
                </thead>
                <tbody>
                    <td>Wix</td>
                    <td>
                        <ul>
                            <li>Beginner friendly</li>
                            <li>Lots of templates to
                            choose from.</li>
                            <li>Several pricing
                            options to meet
                            certain budgets.</li>
                            <li>Provides everything
                            needed to host and
                            build a website.</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>The free plan
                            advertises Wix
                            products on your
                            website.</li>
                            <li>Premium plans
                            are only a single
                            site.</li>
                            <li>Website is not
                            transferrable.</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Templates are not interchangeable.</li>
                            <li>Difficult to migrate data </li>
                            <li>Limited data analytics.</li>
                        </ul>
                    </td>
                </tbody>
                <tbody>
                    <td>
                        Squarespace
                    </td>
                    <td>
                        <ul>
                            <li>Tailers experience to the kind of website you are building. </li>
                            <li>Large template selection</li>
                            <li>Many of the templates use photographs.</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Relatively expensive compared to similar sites.</li>
                            <li>Modifying existing content can be difficult. </li>
                            <li>No immediate customer service support. </li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>No third-party plugin or app support. </li>
                            <li>Limited SEO tools</li>
                            <li>All features are built and maintained by Squarespace. </li>
                        </ul>
                    </td>
                </tbody>
                <tbody>
                    <td>WordPress</td>
                    <td>
                        <ul>
                            <li>Large selection of templates and third-party plugins</li>
                            <li>Advanced SEO tools</li>
                            <li>Seamless integration between front and backends. </li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>The website builder is slow.</li>
                            <li>Website building tools can get expensive.</li>
                            <li>Websites can be difficult to maintain.  </li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Is hacked a lot, considering it is open source. </li>
                            <li>Many of the tools used are created by third-party developers.</li>
                            <li>Uses old technology</li>
                        </ul>
                    </td>
                </tbody>
                <tbody>
                    <td>Dreamweaver</td>
                    <td>
                        <ul>
                            <li>Split view between code and design.</li>
                            <li>Can customize everything.</li>
                            <li>Makes developing a site with HTML and CSS significantly easier. </li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>There is a significant learning curve. </li>
                            <li>Abundance of available tools can be overwhelming to new users. </li>
                            <li>Limited availability of templates out-of-the-box. </li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>The design view may differ from how the page is viewed in a browser. </li>
                            <li>Clutters HTML with paragraph elements.  </li>
                            <li>Needs to be installed locally to use. </li>
                        </ul>
                    </td>
                </tbody>
            </table>
        </div>
    `
}

export function loadWeekTwoDiscussion(container) {
    removeContent(container);
    container.innerHTML = `
        <div id="weekTwoDiscussion">
            <p>DISCUSSION</p>
        </div>
    `
}