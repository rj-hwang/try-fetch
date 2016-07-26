require.config({
  baseUrl: './',
	paths: {
		// 此 polyfill 会检测浏览器是否原生支持 fetch，如果支持就直接使用原生的
		// 可以通过检测 fetch.polyfill 是否等于 true 来判断
		// 如果 fetch.polyfill == undefined 则是使用原生的
		fetch: "node_modules/whatwg-fetch/fetch"
	}
});
require(["fetch"], function () {
	console.log("fetch=", fetch);

	document.getElementById("info").innerText = fetch.polyfill;

	document.getElementById("getHtml").addEventListener("click", function () {
		fetch('/test.html')
			.then(function (response) {
				return response.text()
			}).then(function (body) {
				console.log('body=%s', body)
			})
	});

	document.getElementById("getJson").addEventListener("click", function () {
		fetch('/test.json')
			.then(function (response) {
				return response.json()
			}).then(function (json) {
				console.log('json=%s', JSON.stringify(json))
			}).catch(function (ex) {
				console.log('parsing failed', ex)
			})
	});

	document.getElementById("postForm").addEventListener("click", function () {
		var form = document.querySelector('form')
		fetch('/form', {
			method: 'POST',
			body: new FormData(form)
		}).then(function (res) {
			console.log('res=%o', res)
		}, function (res) {
			console.log('error=%o', res)
		}).catch(function (ex) {
			console.log('postForm failed', ex)
		})
	});
});