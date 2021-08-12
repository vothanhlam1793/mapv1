const pointersContainer = document.querySelector("#pointers-container");
const mapImage = document.querySelector(".map img");
// const mapWidth = mapImage.clientWidth;
// const mapHeight = mapImage.clientHeight;
const mapWidth = mapImage.width;
const mapHeight = mapWidth/1.28967;

function latLonToOffsets(latitude, longitude, mapWidth, mapHeight) {
    const radius = mapWidth / (2 * Math.PI);
    const FE = 180; // false easting

    const lonRad = degreesToRadians(longitude + FE);
    const x = lonRad * radius;

    const latRad = degreesToRadians(latitude);
    const verticalOffsetFromEquator =
        radius * Math.log(Math.tan(Math.PI / 4 + latRad / 2));
    const y = mapHeight / 2 - verticalOffsetFromEquator;
    console.log(x, y);
    console.log(mapWidth, mapHeight);
    return {
        x,
        y
    };
}


function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}

function renderPointer(x, y) {
    const pointer = document.createElement("span");
    pointer.classList.add("pointer");
    pointer.style.left = `${x}px`;
    pointer.style.top = `${y}px`;
    pointersContainer.appendChild(pointer);
}