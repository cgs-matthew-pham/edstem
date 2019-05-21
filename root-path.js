var base = document.createElement("base");
base.setAttribute("href", rootPath());
document.head.appendChild(base);

function rootPath() {
  var path=document.URL.substring(0,document.URL.indexOf("/", 30))+"/";
  console.log(path);
  return path;
}
