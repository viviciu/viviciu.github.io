import Navbar from "../_components/Navbar"
// import "./app.js
// import "./play.css"
import CreateProjects from "./projects.jsx";

export default function Play() {
    return (
        <main>
            <Navbar />
            <h2>Play</h2>
            <section id="projects">
                <div className="projects__sticky">
                    <div className="slider__container">
                        <div className="projects__slider">
                        {/* <CreateProjects /> */}
                        </div>
                    </div>
                </div>
            </section>

            


        </main>
    
    )
}
