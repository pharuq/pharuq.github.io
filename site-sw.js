console.log('hello from site-sw.js')
typeof importScripts === "function" && importScripts('https://s3-ap-northeast-1.amazonaws.com/ryoma.shindo-test-backet/repro-sw.min.js');
// typeof importScripts === "function" && importScripts('https://web-sdk-test-fox-2.s3-ap-northeast-1.amazonaws.com/repro-sw.js');
