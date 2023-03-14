import React, { Component } from 'react';

export class AboutMe extends Component {

    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <section className="Main-Section__Gap">
                <p className="Main-Section__Title">About me</p>
                <article className="About-Me__Contents">Quick and eager to learn junior dotnet fullstack programmer looking to make his way in life. I have finished the Natural sciences line at Katedralskolan in Lund.  I have a penchant for anything involving computers, a strong interest in technology in general and enjoy solving problems.</article>
            </section>
        );
    }
}