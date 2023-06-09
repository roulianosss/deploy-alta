import "./header/script.js"
import "./awards-section/script.js"
import "./contracts-piloted-section/script.js"
import "./contracts-support-section/script.js"
import "./alta-news-talking-about-section/script.js"
import "./experts-voice-section/script.js"
import "./questions-section/script.js"
import "./altaprofit-history-section/script.js"
import "./discover-our-job-section/script.js"
import "./join-the-team-section/script.js"
import "./piloted-graph-section/script.js"
import "./capital-calculator-section/script.js"
import "./promo-banner/script.js"
import "./scpi-selector-section/script.js"

const admintoolbar = document.querySelectorAll('.toolbar-bar');
for (let i = 0;
     i < admintoolbar.length;
     i++) {
    const adminbar = admintoolbar[i];
    const adminbarHeight = adminbar.offsetHeight;
    if(adminbarHeight){
        const header = document.querySelectorAll('header');
        for (let i = 0;
             i < header.length;
             i++) {
            const headerbar = header[i];
            headerbar.style.top = adminbarHeight + 'px';
        }
        const main = document.querySelectorAll('main');
        for (let i = 0;
             i < main.length;
             i++) {
            const mainBalise = main[i];
            mainBalise.style.marginTop = '143px';
        }
    }
}
