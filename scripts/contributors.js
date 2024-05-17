async function getContributors() {
    let request = await fetch(`https://api.github.com/repos/Railroad-Team/Railroad/contributors?per_page=23&page=1`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    // print data from the fetch on screen
    let contributorsList = await request.json();
    return contributorsList;
};
async function getAllContributors() {
    let request = await fetch(`https://api.github.com/repos/Railroad-Team/Railroad/contributors`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    // print data from the fetch on screen
    let contributorsList = await request.json();
    return contributorsList;
};

async function displayContributors() {
    let contributors = await getContributors();
    let contributorsList = document.getElementById('contributors');
    contributors.forEach(contributor => {
        let contributorElement = document.createElement('div');
        contributorElement.innerHTML = `
            <a href="${contributor.html_url}" target="_blank">
                <img src="${contributor.avatar_url + '&size=256'}" alt="${contributor.login}" />
            </a>
        `;
        contributorsList.appendChild(contributorElement);
    });
    let placeholder = document.createElement('div');
    placeholder.innerHTML = `
        <a href="" target="_blank">
            <img src="/images/exitsite.svg" alt="placeholder" />
        </a>
    `;
    contributorsList.appendChild(placeholder);

    let count = document.getElementById('contriblist');
    const length = await getAllContributors();
    count.innerHTML = `Contributors: `+ length.length;
}