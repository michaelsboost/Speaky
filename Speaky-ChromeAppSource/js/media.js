document.addEventListener("DOMContentLoaded", function() {
  var webview = document.querySelector("webview");
  webview.addEventListener('permissionrequest', function(e) {
   if (e.permission === 'media') {
     console.log("media permission requested");
     e.request.allow();
   }

   console.log("permission requested");
  });
});
