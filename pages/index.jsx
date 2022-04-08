export default function Home() {
    return (
        <section class="bodyFlex">
            {/* each div is a horizontal flex, containing text and an image on alternating sides. */}
            <div class="contentSpace" id="bio"></div>
            <div class="whiteSpace"></div>
            <div class="contentSpace" id="project"></div>
            <div class="whiteSpace"></div>
            <div class="contentSpace" id="robot"></div>
            <div class="whiteSpace"></div>
            <div class="contentSpace" id="resume"></div>
            <div class="toTop">
                <a href="#bio">Back To Top ^</a>
            </div>
        </section>
    );
}
