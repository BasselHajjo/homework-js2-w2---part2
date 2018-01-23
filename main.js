let activeModules = ["https://github.com/HackYourFuture/HTML-CSS","https://github.com/HackYourFuture/JavaScript","https://github.com/HackYourFuture/JavaScript3","https://github.com/HackYourFuture/Node.js","https://github.com/HackYourFuture/databases","https://github.com/HackYourFuture/masterclass-react-redux","https://github.com/HackYourFuture/Project","https://github.com/HackYourFuture/curriculum"];

var xhReq = new XMLHttpRequest();
xhReq.open('GET' , 'https://api.github.com/orgs/HackYourFuture/repos' , false);
xhReq.send(null);
var hyf = JSON.parse(xhReq.responseText);

function filtering(arg){
    for (let i = 0 ; i < activeModules.length ; i++){
    if(arg.html_url === activeModules[i]){
        return arg;
    }
    }
}

let results = hyf.filter(filtering);

document.getElementById("container").innerHTML = `
<h1 class="title">Active Repositories (${new Date().getFullYear()})</h1>
${results.map(respositories).join('')}
<p class="footer">These ${results.length} repositories are active now, contact <a href="http://www.hackyourfuture.net/" target="_blank">Hack Your Future</a> for more information</p>
`

function respositories(str){
    return `
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


//function forksCount(arg){
//    if(arg.forks_count = 0 ){
//        return "None"
//    }else if (arg.forks_count = 1){
//        return arg.forks_count + " fork ."
//    }else{
//        return arg.forks_count + " forks ."
//    }
//}

// line 29 ${specs(str)}!! to return "No specific lanuage !" if the language is null , but when i run it, it runs as a map inside a map so the results i get is all the languages in every single div ..

//function specs(){
//    for (let i = 0 ; i < str.length ; i++){
//    if (str[i].language != null){
//            return `
//<h4>Language : ${str[i].language}</h4>
//`
//    }else{
//        return
//            `<h4>No specific lanuage !</h4>`
//    }
//  }
//}



