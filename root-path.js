$(document).ready(function(){
	var root = rootPath();
	console.log(root);
	$("a").each(function() {
		let url = $(this).attr("href");
		if (url.startsWith("/")) {
			console.log("Replacing " + url + " with " + root);
			let newUrl = url.replace("/", root);
			console.log(newUrl);
			$(this).attr("href", newUrl);
		};
	})
});

function rootPath() {
	return document.URL.substring(0,document.URL.indexOf("/", 30)) + "/";
}
