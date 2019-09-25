let search = window.location.search.substring(10)

if (search == routesTabActive) {
    routesTabActive()
}
else if (search == portTabActive) {
    portTabActive()
}
else if (search == shipTabActive) {
    shipTabActive()
}


function routesTabActive() {
    let element = document.getElementById("routesTab");
    element.setAttribute("class", "mdl-layout__tab-panel is-active");

    let tabHead = document.getElementById("tabDecRoutes");
    tabHead.setAttribute("class", "mdl-layout__tab is-active");
}
function portTabActive() {
    let element = document.getElementById("portTab");
    element.setAttribute("class", "mdl-layout__tab-panel is-active");

    let tabHead = document.getElementById("tabDecPort");
    tabHead.setAttribute("class", "mdl-layout__tab is-active");
}
function shipTabActive() {
    let element = document.getElementById("shipTab");
    element.setAttribute("class", "mdl-layout__tab-panel is-active");

    let tabHead = document.getElementById("tabDecShip");
    tabHead.setAttribute("class", "mdl-layout__tab is-active");
}

