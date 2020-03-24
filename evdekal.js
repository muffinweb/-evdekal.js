/**
 * Evdekal.js
 * @author Ugur Cengiz
 * @url ugurcengiz.com
 */
window.onload = function () {
    const titleElement = document.querySelector('title');
    let defaultTitle = document.querySelector('title').textContent;
    let slogan = "#EVDEKAL";
    let sloganIsOn = false;
    const intervalTime = 3000;

    setInterval(() => {
        if (!sloganIsOn) {
            titleElement.textContent = slogan;
            sloganIsOn = !sloganIsOn;
        } else {
            titleElement.textContent = defaultTitle;
            sloganIsOn = !sloganIsOn;
        }
    }, intervalTime);
}