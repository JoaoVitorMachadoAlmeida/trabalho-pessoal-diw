document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const repoId = urlParams.get('id');
    const repoDetailsSection = document.getElementById('repo-details');

    // Obtendo detalhes do repositório do GitHub
    fetch(`https://api.github.com/repositories/${repoId}`)
        .then(response => response.json())
        .then(repo => {
            repoDetailsSection.innerHTML = `
                <h2>${repo.name}</h2>
                <p>${repo.description}</p>
                <p>Data de Criação: ${new Date(repo.created_at).toLocaleDateString()}</p>
                <p>Linguagem: ${repo.language}</p>
                <p><a href="${repo.html_url}" target="_blank">Ver no GitHub</a></p>
            `;
        });
});
