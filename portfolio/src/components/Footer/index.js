import React from 'react';

function Footer() {

    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/dparmar32"
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/drashteeparmar/"
        },
        {
            name: "fas fa-envelope",
            link: "mailto:drashteeparmar@gmail.com"
        }
    ]

    return (
        <footer className="flex-row px-1">
            {icons.map(icon =>
                (
                    <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i
                        className={icon.name}></i></a>
                )
            )}

        </footer>

    );
}

export default Footer;
