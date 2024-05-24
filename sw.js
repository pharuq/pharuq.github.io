// typeof importScripts === "function" && importScripts('https://s3.ap-northeast-1.amazonaws.com/ryoma.shindo-test-backet/repro-sw.min.js');
typeof importScripts === "function" && importScripts("https://booster.reproio.com/assets/js/sw");

self.addEventListener('fetch', event => {
	if (event.request.mode === "navigate") console.log("hihi", navigator.onLine);
	return;
})
