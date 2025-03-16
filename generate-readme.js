const fs = require("fs");
const axios = require("axios");

// Configurações
const GITHUB_USERNAME = "danilo631"; // Substitua pelo seu nome de usuário do GitHub
const API_TOKEN = process.env.API_TOKEN; // Token do GitHub

// Função para buscar repositórios do GitHub
async function fetchRepositories() {
  try {
    const [recentResponse, popularResponse] = await Promise.all([
      axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=5`, {
        headers: API_TOKEN ? { Authorization: `token ${API_TOKEN}` } : {},
      }),
      axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=5`, {
        headers: API_TOKEN ? { Authorization: `token ${API_TOKEN}` } : {},
      }),
    ]);

    const recentRepos = recentResponse.data.map((repo) => ({
      name: repo.name,
      url: repo.html_url,
      description: repo.description || "No description provided.",
      stars: repo.stargazers_count,
      forks: repo.forks_count,
    }));

    const popularRepos = popularResponse.data.map((repo) => ({
      name: repo.name,
      url: repo.html_url,
      description: repo.description || "No description provided.",
      stars: repo.stargazers_count,
      forks: repo.forks_count,
    }));

    return { recentRepos, popularRepos };
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error.message);
    return { recentRepos: [], popularRepos: [] };
  }
}

// Função para gerar o conteúdo do README
function generateReadme({ recentRepos, popularRepos }) {
  const recentProjectsSection = recentRepos
    .map(
      (repo) => `
### [${repo.name}](${repo.url})

${repo.description}

⭐️ **Stars:** ${repo.stars} | 🍴 **Forks:** ${repo.forks}
`
    )
    .join("\n");

  const popularProjectsSection = popularRepos
    .map(
      (repo) => `
### [${repo.name}](${repo.url})

${repo.description}

⭐️ **Stars:** ${repo.stars} | 🍴 **Forks:** ${repo.forks}
`
    )
    .join("\n");

  const readmeContent = `
<!-- PROFILE README DANILO -->

<div align="center">

# 👨‍💻 Welcome to My GitHub Profile!

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&color=FFD700&center=true&vCenter=true&width=600&lines=Hi!+I'm+Danilo+%F0%9F%91%8B;Fullstack+Developer;AI+%2F+ML+Enthusiast;Building+the+Future+with+Code!" alt="Typing SVG" />

---

![Profile Views](https://komarev.com/ghpvc/?username=${GITHUB_USERNAME}&color=00FFFF&style=flat-square)
![Followers](https://img.shields.io/github/followers/${GITHUB_USERNAME}?label=Followers&style=social)
![GitHub Stars](https://img.shields.io/github/stars/${GITHUB_USERNAME}?style=social)

</div>

---

## 🚀 About Me

- 💻 Fullstack Developer | AI / ML Enthusiast
- 🔧 Passionate about backend optimization and neural networks
- 🌱 Exploring **Deep Learning**, **Data Science**, and **Next.js**
- 💡 Building **scalable**, **efficient**, and **innovative** applications
- ✨ Actively contributing to **Open Source** projects
- 🎯 Always striving to push the boundaries of technology

---

## 🛠️ Tech Stack

<div align="center">

### Languages
<p>
  <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" />
  <img src="https://skillicons.dev/icons?i=py" alt="Python" />
  <img src="https://skillicons.dev/icons?i=c" alt="C" />
  <img src="https://skillicons.dev/icons?i=cpp" alt="C++" />
  <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" />
</p>

### Frameworks & Libraries
<p>
  <img src="https://skillicons.dev/icons?i=react" alt="React" />
  <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" />
  <img src="https://skillicons.dev/icons?i=flask" alt="Flask" />
  <img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" />
  <img src="https://skillicons.dev/icons?i=tailwind" alt="TailwindCSS" />
</p>

### Tools & Platforms
<p>
  <img src="https://skillicons.dev/icons?i=git" alt="Git" />
  <img src="https://skillicons.dev/icons?i=docker" alt="Docker" />
  <img src="https://skillicons.dev/icons?i=linux" alt="Linux" />
  <img src="https://skillicons.dev/icons?i=githubactions" alt="GitHub Actions" />
  <img src="https://skillicons.dev/icons?i=vscode" alt="VS Code" />
</p>

</div>

---

## 📈 GitHub Stats

<div align="center">

<img height="180em" src="https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=dark&include_all_commits=true&count_private=true"/>
<img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&langs_count=10&theme=dark"/>

</div>

---

## 🏆 GitHub Trophies

<div align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=${GITHUB_USERNAME}&theme=onedark&no-frame=true&no-bg=true&margin-w=4" alt="Trophies" />
</div>

---

## 📊 Contribution Graph

<div align="center">
  <img src="https://ghchart.rshah.org/${GITHUB_USERNAME}" alt="GitHub Contribution Graph" />
</div>

---

## 📦 Featured Projects

### 🕒 Recently Updated Repositories

${recentProjectsSection}

---

### ⭐ Most Popular Repositories

${popularProjectsSection}

---

## ✉️ Contact Me

<div align="center">

[![Gmail](https://img.shields.io/badge/-Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:defreitasfernandesdanilo81@gmail.com)  
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/danilo-de-freitas-fernandes-28545a352/)  
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/danilo631)

</div>

---

## 🎧 Coding Vibes

<div align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzU3ZmQwNmYxZmY1ZjIyZTJhMzEzYzRkNzY0YzE5YjQwZjIyOTIwMTVmODg4NyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZFlyJmN0PWc/WSHMdL0O5Vt0/giphy.gif" width="400px" alt="Coding Gif"/>
</div>

---

## 💡 Favorite Quote

> "The best way to predict the future is to create it." – Peter Drucker

---

## ⚡ Fun Facts

<div align="center">
  <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
  <div id="fun-fact" style="text-align: center; font-size: 18px; margin-top: 20px;"></div>
  <script>
    const funFacts = [
      "🎮 Gamer nas horas vagas",
      "📚 Apaixonado por Sci-fi & Inteligência Artificial",
      "🔧 Sempre quebrando a cabeça em algoritmos novos",
      "🌱 Acreditando que o impossível só demora um pouco mais!"
    ];
    const typed = new Typed("#fun-fact", {
      strings: funFacts,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
  </script>
</div>
`;

  return readmeContent;
}

// Executar o script
(async () => {
  const repositories = await fetchRepositories();
  const readmeContent = generateReadme(repositories);
  fs.writeFileSync("README.md", readmeContent);
  console.log("README.md gerado com sucesso!");
})();
