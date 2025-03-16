<!-- PROFILE README DANILO -->

<div align="center">

# 👨‍💻 Welcome to My GitHub Profile!

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&color=FFD700&center=true&vCenter=true&width=600&lines=Hi!+I'm+Danilo+%F0%9F%91%8B;Fullstack+Developer;AI+%2F+ML+Enthusiast;Building+the+Future+with+Code!" alt="Typing SVG" />

---

![Profile Views](https://komarev.com/ghpvc/?username=danilo631&color=00FFFF&style=flat-square)
![Followers](https://img.shields.io/github/followers/danilo631?label=Followers&style=social)
![GitHub Stars](https://img.shields.io/github/stars/danilo631?style=social)

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

<img height="180em" src="https://github-readme-stats.vercel.app/api?username=danilo631&show_icons=true&theme=dark&include_all_commits=true&count_private=true"/>
<img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=danilo631&layout=compact&langs_count=10&theme=dark"/>

</div>

---

## 🏆 GitHub Trophies

<div align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=danilo631&theme=onedark&no-frame=true&no-bg=true&margin-w=4" alt="Trophies" />
</div>

---

## 📊 Contribution Graph

<div align="center">
  <img src="https://ghchart.rshah.org/danilo631" alt="GitHub Contribution Graph" />
</div>

---

## 📦 Featured Projects

### 🕒 Recently Updated Repositories

<div id="recent-repos">
  <p>Loading repositories...</p>
</div>

### ⭐ Most Popular Repositories

<div id="popular-repos">
  <p>Loading repositories...</p>
</div>

<script>
  const GITHUB_USERNAME = "danilo631"; // Substitua pelo seu nome de usuário

  // Função para buscar repositórios recentes
  async function fetchRecentRepositories() {
    try {
      const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=5`);
      const repos = await response.json();

      const recentReposHTML = repos
        .map(
          (repo) => `
            <div style="background-color: #1e1e1e; color: #ffffff; padding: 15px; border-radius: 10px; margin-bottom: 10px;">
              <h3><a href="${repo.html_url}" target="_blank" style="text-decoration: none; color: #FFD700;">${repo.name}</a></h3>
              <p style="margin: 5px 0; font-size: 14px; color: #b3b3b3;">${repo.description || "No description provided."}</p>
              <div style="display: flex; gap: 10px;">
                <span style="background-color: #2c2c2c; padding: 5px 10px; border-radius: 5px; font-size: 12px; color: #ffffff;">🌟 ${repo.stargazers_count}</span>
                <span style="background-color: #2c2c2c; padding: 5px 10px; border-radius: 5px; font-size: 12px; color: #ffffff;">🍴 ${repo.forks_count}</span>
              </div>
            </div>
          `
        )
        .join("");

      document.getElementById("recent-repos").innerHTML = recentReposHTML;
    } catch (error) {
      console.error("Error fetching recent repositories:", error);
      document.getElementById("recent-repos").innerHTML = "<p>Failed to load repositories.</p>";
    }
  }

  // Função para buscar repositórios populares
  async function fetchPopularRepositories() {
    try {
      const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=5`);
      const repos = await response.json();

      const popularReposHTML = repos
        .map(
          (repo) => `
            <div style="background-color: #1e1e1e; color: #ffffff; padding: 15px; border-radius: 10px; margin-bottom: 10px;">
              <h3><a href="${repo.html_url}" target="_blank" style="text-decoration: none; color: #FFD700;">${repo.name}</a></h3>
              <p style="margin: 5px 0; font-size: 14px; color: #b3b3b3;">${repo.description || "No description provided."}</p>
              <div style="display: flex; gap: 10px;">
                <span style="background-color: #2c2c2c; padding: 5px 10px; border-radius: 5px; font-size: 12px; color: #ffffff;">🌟 ${repo.stargazers_count}</span>
                <span style="background-color: #2c2c2c; padding: 5px 10px; border-radius: 5px; font-size: 12px; color: #ffffff;">🍴 ${repo.forks_count}</span>
              </div>
            </div>
          `
        )
        .join("");

      document.getElementById("popular-repos").innerHTML = popularReposHTML;
    } catch (error) {
      console.error("Error fetching popular repositories:", error);
      document.getElementById("popular-repos").innerHTML = "<p>Failed to load repositories.</p>";
    }
  }

  // Carregar repositórios
  fetchRecentRepositories();
  fetchPopularRepositories();
</script>

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
