
const Education = () => {
    return (
        <section className="Main-Section__Gap">
            <p className="Main-Section__Title">Education</p>
            <section className="Main-Section__POI">
                <article className="Main-Section__Article">
                    <p className="Article__Name">G{'\u00D6'}teborgs University</p>
                    <p className="Article__Time">2019-2020</p>
                </article>
                <article className="Main-Section__Article">
                    <p className="Article__Title">Medical School</p>
                    <p className="Article__Description">Learned a lot about the medical field and patient contact. Gained significant insight into the technical issues doctors run into and how to read research papers.</p>
                </article>
            </section>
            <section className="Main-Section__POI">
                <article className="Main-Section__Article">
                    <p className="Article__Name">School of applied technology</p>
                    <p className="Article__Time">December 2022- Mars 2023</p>
                </article>
                <article className="Main-Section__Article">
                    <p className="Article__Title">Dotnet fullstack programming bootcamp</p>
                    <p className="Article__Description">Learened a wide variety of different skills relating relating both to programming as well as the social. Including writing tests and how to make websites with a mobile first approach. </p>
                </article>
            </section>
            <section className="Main-Section__POI">
                <article className="Main-Section__Article">
                    <p className="Article__Name">Katedralskolan Lund</p>
                    <p className="Article__Time">2012-2016</p>
                </article>
                <article className="Main-Section__Article">
                    <p className="Article__Title">Nature - Nature</p>
                    <p className="Article__Description"> Studied the natural sciences and more advanced forms of math. This took one year longer than intended as I spent a year abroad studying in Butte MT where I became a certified chef. </p>
                </article>
            </section>
        </section>
    )
}

export default Education