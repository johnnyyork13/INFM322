const body = document.querySelector("body");

const header = document.createElement('header');
header.innerHTML = `

        <nav class="navbar navbar-dark navbar-expand-md">
            <a href="./index.html" class="navbar-brand"><img style="border-radius: 0%" src="./images/york-logo.png" /></a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                    <li class="navbar-item">
                        <a href="./index.html" class="nav-link">Home</a>
                    </li>
                    <li class="navbar-item">
                        <a href="./about.html" class="nav-link">About</a>
                    </li>
                    <li class="navbar-item">
                        <a href="./contact.html" class="nav-link">Contact</a>
                    </li>
                    <li class="navbar-item">
                        <a href="../index.html" class="nav-link">Back to Portfolio</a>
                    </li>
                </ul>
            </div>
        </nav>

`

body.appendChild(header);