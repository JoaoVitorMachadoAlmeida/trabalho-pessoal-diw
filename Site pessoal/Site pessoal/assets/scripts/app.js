document.addEventListener('DOMContentLoaded', () => {
    const profileSection = document.getElementById('profile');
    const repositoriesSection = document.getElementById('repositories');
    const suggestionsSection = document.getElementById('suggestions');
    const colleaguesSection = document.getElementById('colleagues');

    // Obtendo dados do perfil do GitHub
    fetch('https://api.github.com/users/JoaoVitorMachadoAlmeida')
        .then(response => response.json())
        .then(data => {
            profileSection.innerHTML = `
                <img src="${data.avatar_url}" alt="${data.name}">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
                <p>${data.location}</p>
                <p>${data.blog}</p>
                <p>${data.followers} seguidores</p>
            `;
        });

    // Obtendo repositórios do GitHub
    fetch('https://api.github.com/users/JoaoVitorMachadoAlmeida/repos')
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                repositoriesSection.innerHTML += `
                    <div class="repo-card">
                        <h3>${repo.name}</h3>
                        <p>${repo.description}</p>
                        <p>⭐ ${repo.stargazers_count}</p>
                        <p>🍴 ${repo.forks_count}</p>
                    </div>
                `;
            });
        });

    // Obtendo conteúdos sugeridos do JSONServer
    fetch('http://localhost:3000/suggestions')
        .then(response => response.json())
        .then(contents => {
            contents.forEach(content => {
                suggestionsSection.innerHTML += `
                    <div class="carousel-item">
                        <img src="${content.coverImage}" alt="${content.title}">
                        <h3>${content.title}</h3>
                        <p>${content.description}</p>
                        <a href="${content.contentURL}">Leia mais</a>
                    </div>
                `;
            });
        });

    // Obtendo colegas de trabalho do JSONServer
    fetch('http://localhost:3000/colleagues')
        .then(response => response.json())
        .then(colleagues => {
            colleagues.forEach(colleague => {
                colleaguesSection.innerHTML += `
                    <div class="colleague-card">
                        <img src="${colleague.photoURL}" alt="${colleague.name}">
                        <h3>${colleague.name}</h3>
                        <a href="${colleague.profileURL}">Perfil no GitHub</a>
                    </div>
                `;
            });
        });
});
