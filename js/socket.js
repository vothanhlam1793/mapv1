let socket = new WebSocket("ws://l2d.uudamstudio.com:1880/map");

socket.onopen = function(e) {
    console.log("Socket Success")
};
  
socket.onmessage = function(event) {
    console.log(event.data);
    let geo;
    try {
        geo = JSON.parse(event.data);
    } catch(e){
        console.log("ERROR PARSE: ", e);
        return;
    }
    a = latLonToOffsets(parseFloat(geo.latitude), parseFloat(geo.longitude), mapWidth, mapHeight);
    renderPointer(a.x, a.y);
    app2.now += 1;
    app2.total += 1;
    app1.pushNative(geo.country);
};
  
socket.onclose = function(event) {
    if (event.wasClean) {
        console.log("Server socket died")
    } else {
        console.log("Close connect");
    }
};
  
socket.onerror = function(error) {
    console.log("ERROR: Socket err");
};