let activeModules = ["https://github.com/HackYourFuture/HTML-CSS", "https://github.com/HackYourFuture/JavaScript", "https://github.com/HackYourFuture/JavaScript3", "https://github.com/HackYourFuture/Node.js", "https://github.com/HackYourFuture/databases", "https://github.com/HackYourFuture/masterclass-react-redux", "https://github.com/HackYourFuture/Project"];
var xhReq = new XMLHttpRequest();
xhReq.open('GET', 'https://api.github.com/orgs/HackYourFuture/repos', false);
xhReq.send(null);
var hyf = JSON.parse(xhReq.responseText);

function filtering(arg) {
    for (let i = 0; i < activeModules.length; i++) {
        if (arg.html_url === activeModules[i]) {
            return arg;
        }
    }
}


let results = hyf.filter(filtering);

document.getElementById("container").innerHTML = `
<h1 class="title">Active Repositories (${new Date().getFullYear()})</h1>
${results.map(respositories).join('')}
<p class="footer">These ${results.length} repositories are active now, contact <a href="http://www.hackyourfuture.net/" target="_blank"><strong>Hack Your Future</strong></a> for more information.</p>
<p class="footer">This demonstration was created by <a href="https://github.com/BasselHajjo" target="_blank"><strong>Bassel Hajjo</strong></a>.</p>
`

function respositories(str) {
    return `
<div class="helping-div" id="${str.id}"></div>
<div class="specs">
<img class="images" src="https://avatars2.githubusercontent.com/u/20858568?v=4">
<h2 class="resName">${str.name}<a class="website" href=${str.html_url} target="_blank"> (Read more)</a></h2>
<h4>Language : ${str.language} .</h4>
<ul class="res-list">
<li>Number of stargazers : ${str.stargazers_count} stargazers.</li>
<li>Number of watchers : ${str.watchers_count} watchers.</li>
<li>Number of forks : ${str.forks_count} forks .</li>
<li>Creating Date : ${str.created_at}</li>
</ul>
</div>
`
}


let lang = results.map(function(arg){
    if (arg.language){
      return "Language: "  + arg.language;
    }else{
        return "Language: No specific language !";
    }  
});

let stargazer = results.map(function(arg){
    if (arg.stargazers_count == 0){
        return "Number of stargazers: No stargazers yet";
    }else if(arg.stargazers_count == 1){
        return "Number of stargazers: " + arg.stargazers_count + " Stargazer.";
    }else{
        return "Number of stargazers: " + arg.stargazers_count + " Stargazers.";
    }
})

let Watcher = results.map(function(arg){
    if (arg.watchers_count == 0){
        return "Number of watchers: No watchers yet";
    }else if(arg.watchers_count == 1){
        return "Number of watchers: " + arg.watchers_count + " Watcher.";
    }else{
        return "Number of watchers: " + arg.watchers_count + " Watchers.";
    }
})

let fork = results.map(function(arg){
    if (arg.forks_count == 0){
        return "Number of forks: No forks yet";
    }else if(arg.forks_count == 1){
        return "Number of forks: " + arg.forks_count + " Fork.";
    }else{
        return "Number of forks: " + arg.forks_count + " Forks.";
    }
})

console.log(lang);
console.log(stargazer);
console.log(Watcher);
console.log(fork);






$('.nav').localScroll();

$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
        $('.nav').toggleClass('openNav')
	});
});

