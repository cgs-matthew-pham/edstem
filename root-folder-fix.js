$(document).ready(function(){
	var root = rootFolder();
	console.log("Root folder: " + root);
	$('[href^="/"]').each(function() {
		let url = $(this).attr("href");
		if (url.startsWith("/")) {
			let newUrl = url.replace("/", root);
			console.log("Replacing href attribute from " + url + " to " + newUrl);
			$(this).attr("href", newUrl);
		};
	})
	$('[src^="/"]').each(function() {
		let url = $(this).attr("src");
		if (url.startsWith("/")) {
			let newUrl = url.replace("/", root);
			console.log("Replacing src attribute from " + url + " to " + newUrl);
			$(this).attr("src", newUrl);
		};
	})
});

function rootFolder() {
	return document.URL.substring(0,document.URL.indexOf("/", 30)) + "/";
}
