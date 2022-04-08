export default function Footer() {
    return (
        <footer>
            <div className="footItem" id="footInfo">
                {/* The Contact div includes my email and phone number, properly linked. */}
                <div id="contact">
                    <ul className="footList" id="contactList">
                        <li>Contact me Here:</li>
                        <li>
                            Email: <a href="mailto:eedwards445566@gmail.com">eedwards445566@gmail.com</a>
                        </li>
                        <li>
                            Phone: <a href="tel:+9784939621">+(978)-493-9621</a>
                        </li>
                    </ul>
                </div>
                {/* The Accounts div includes any accounts I think I should show off. Currently I link my GitHub and LinkedIn. 
                    Note: there is css animations, and it is cool */}
                <div id="accounts">
                    <ul className="footList" id="accountList">
                        <li>
                            <a href="">
                                <img src="Icons/LinkedInIcon.png" alt="LinkedIn" id="LinkedIn" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="Icons/GitHubIcon.png" alt="GitHub" id="GitHub" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="explore">
                    <ul className="footList" id="sitemap">
                        <li>Sitemap:</li>
                        <li>
                            <a href="Index.html">Home</a>
                        </li>
                        <li>
                            <a href="School.html">School Life</a>
                        </li>
                        <li>
                            <a href="Projects.html">Projects</a>
                        </li>
                        <li>
                            <a href="Accomplishments.html">Accomplishments</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footItem" id="copyRight">
                &#169; 2022 Eric Edwards. All Rights Reserved.
            </div>
        </footer>
    );
}
