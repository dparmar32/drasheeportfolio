import React from 'react';
/**
 * This function returns a footer with a list of icons
 * @returns A footer with 3 icons.
 */
function Footer() {
    const icons = [
        {
            // name: "fab fa-github",
            name: "bi bi-github",
            link: "https://github.com/dparmar32"
        },
        {
            // name: "fab fa-linkedin",
            name: "bi bi-linkedin",
            link: "https://www.linkedin.com/in/drashteeparmar/"
        },
        {
            // name: "fas fa-envelope",
            name: "bi bi-envelope-fill",
            link: "mailto:drashteeparmar@gmail.com"
        }
    ]
    return (
        <footer className="flex-row px-1">
            {icons.map(icon =>
                (
                    <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer">
                        <i className={icon.name}></i></a>
                )
            )}
        </footer>
    );
}
export default Footer;
