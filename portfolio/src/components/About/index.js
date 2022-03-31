import React from 'react';
import drashteeImg from '../../assets/projects/drashtee_img.jpg';

/**
 * This function returns a section with a div containing a div with an image and a paragraph
 * @returns A section with a div containing a div with an image and a paragraph.
 */
function About() {
    return (
        <section className="my-5">
            <div className="my-2">
                <div className="profile-img my-5">
                    <img src={drashteeImg} className="drashteeimg" ></img>
                </div>
                <p>
                    An experienced Software Engineer with a demonstrated background in designing and implementing
                    software systems and applications. A keen ability to work with developers to produce intellectual
                    property that meets design schedules and customer functional and quality requirements. Experienced
                    with the front-end application design as well as back-end verification and validation. Developed
                    code in line with Agile and Test-Driven Development Methodologies. </p>
            </div>
        </section>
    );
}

export default About;
