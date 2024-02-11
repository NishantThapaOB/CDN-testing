(function loadIframe(t) {
  const e = document.createElement("iframe");
  e.setAttribute("id", "iframeWidget-CHAT");
  e.style.width = document.currentScript.getAttribute("width");
  e.style.height = document.currentScript.getAttribute("height");
  e.style.padding = "10px";
  e.style.border = "1px solid #eee5e5";
  e.style.borderRadius = "10px";
  document.body.appendChild(e);
  const userId = document.currentScript.getAttribute("userId");
  const token = document.currentScript.getAttribute("token");
  const chatUrl = document.currentScript.getAttribute("chatUrl");
  const socketUrl = document.currentScript.getAttribute("socketUrl");
  setTimeout(() => {
    const d = e.contentDocument || e.contentWindow.document;
    const i = d.createElement("script");
    i.src =
      "https://cdn.jsdelivr.net/gh/NishantThapaOB/CDN-testing@main/Widget.js";
    i.type = "text/javascript";
    i.setAttribute("userId", userId);
    i.setAttribute("token", token);
    i.setAttribute("chatUrl", chatUrl);
    i.setAttribute("socketUrl", socketUrl);
    d.body.appendChild(i);
  }, 1000);
})();
