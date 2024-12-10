async function getRedirectedUrl(url) {
    try {
        const response = await fetch(url, {
            method: 'HEAD',
            redirect: 'follow',
        });

        console.log(`Redirected to: ${response.url}`);
        return response.url;
    } catch (error) {
        console.error(`Failed to fetch the URL: ${error}`);
    }
}

async function getLatestVer(){
    const redirected = await getRedirectedUrl("https://www.github.com/Railroad-team/Railroad/releases/latest")
    let ver = redirected.replace("https://github.com/Railroad-team/Railroad/releases", "")
    
    if (ver == "") {
        ver = "1.0.0"
    }
    
    document.getElementById('latestver').innerHTML = 'Version: ' + ver;
}
