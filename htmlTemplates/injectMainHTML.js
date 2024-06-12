function injectHTMLTemplate(filePath,placeholderElemID) {
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(placeholderElemID).innerHTML = html;
        });
}

// console.log("r2nav")
// injectHTMLTemplate('/htmlTemplates/r2Navbar.html','r2Navbar')
injectHTMLTemplate('/htmlTemplates/mainSidebar.html','gameNav')
injectHTMLTemplate('/htmlTemplates/r2Footer.html','footerPlaceholder')
