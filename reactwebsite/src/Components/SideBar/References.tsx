
const References = () => {
    return (
        <section className="SideBar__Section">
            <p className="SideBar__Title">REFERENCES</p>
            <article>
                <p className="Reference__Name"> Kjell Reksten </p>
                <p className="Reference__Profession"> Storeowner Erikshj{'\u00C4'}lpen Lund City </p>
                <ul className="SideBar__List">
                    <li className="List__List-Item">
                        <i className="List-Item__Symbol">✆</i>
                        +46735978334
                    </li>
                    <li className="List__List-Item">
                        <i className="List-Item__Symbol">✉</i>
                        LUND@ERIKSHJALPEN.SE
                    </li>
                </ul>
            </article>
            <article>
                <p className="Reference__Name"> Joël Sebastiaan Boellaard </p>
                <p className="Reference__Profession"> Senior Software Engineer at Snow Software </p>
                <ul className="SideBar__List">
                    <li className="List__List-Item">
                        <i className="List-Item__Symbol">✆</i>
                        +46738445499
                    </li>
                    <li className="List__List-Item">
                        <i className="List-Item__Symbol">✉</i>
                        RICHTER@AMBERSPANK.NET
                    </li>
                </ul>
            </article>
        </section>
    )
}

export default References