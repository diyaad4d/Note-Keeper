import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright ⓒ {year}</p>
            <p class={"d4d"}>by : diyaa daifi (d4d)</p>
        </footer>
    );
}

export default Footer;
