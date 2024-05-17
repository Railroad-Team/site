function getLatestVer(){
    let ver = '1.0.0';
    //Todo: Find where https://www.github.com/Railroad-team/Railroad/releases/latest redirects to & then get the version
    //From the end of the url
    document.getElementById('latestver').innerHTML = 'Version: ' + ver;
}