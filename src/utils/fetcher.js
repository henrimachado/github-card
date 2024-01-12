

const getUserData = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    return {
        name: data.name,
        joinedAt: data.created_at,
        profileUrl: data.html_url,
        avatarUrl: data.avatar_url,
        reposCount: data.public_repos,
        company: data.company,
        blog: data.blog,
        location: data.location,
        bio: data.bio
    };
};

const getUserLanguages = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    
    const languages = new Set(); // Usamos um Set para evitar duplicatas

    for (let repo of repos) {
        const langResponse = await fetch(repo.languages_url);
        const langData = await langResponse.json();
        Object.keys(langData).forEach(language => languages.add(language));
    }
    return Array.from(languages); // Convertemos o Set de volta para um Array
};

module.exports = { getUserData, getUserLanguages };