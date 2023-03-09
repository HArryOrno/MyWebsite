import AboutMe from "./AboutMe"
import Education from "./Education"
import Experience from "./Experience"

const MainSection = () => {
    return (

            <section className="Main-Section">
                { <AboutMe /> }

                { <Experience /> }

                { <Education /> }

            </section>
    )
}

export default MainSection