$(document).ready(function(){
	var root = rootPath();
	console.log(rootPath);
	$("a").each(function() {
		let url = $(this).attr("href");
		if (url.startsWith("/")) {
			console.log("Replacing " + url + " with " + rootPath);
			let newUrl = url.replace("/", rootPath);
			console.log(newUrl);
			$(this).attr("href", newUrl);
		};
	})
});

function rootPath() {
	return document.URL.substring(0,document.URL.indexOf("/", 30)) + "/";
}
