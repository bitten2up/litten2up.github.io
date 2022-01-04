function html(text){
    const e = document.createElement("div");
    e.innerHTML = `<div id="scroll-container"><div id="scroll-text">${text}</div></div>`;
    document.body.appendChild(e);
    var scrollInterval = setInterval(function() { document.documentElement.scrollTop = document.documentElement.scrollHeight; }, 50);
    
}