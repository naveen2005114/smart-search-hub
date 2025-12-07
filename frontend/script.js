document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (!query) {
    alert("Please enter a search term!");
    return;
  }

  // Database (you can add 100+ items later)
  const database = [
    {
      name: "IMDB",
      url: "https://www.imdb.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg",
      keywords: ["movies", "film", "cinema", "actors", "reviews"],
      desc: "World’s most popular movie and TV database.",
    },
    {
      name: "Rotten Tomatoes",
      url: "https://www.rottentomatoes.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rotten_Tomatoes.svg",
      keywords: ["movies", "reviews", "ratings", "cinema"],
      desc: "Trusted source of movie and TV reviews.",
    },
    {
      name: "Khan Academy",
      url: "https://www.khanacademy.org",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Khan_Academy_logo_%28vertical%29.svg",
      keywords: ["education", "learning", "math", "science", "study"],
      desc: "Free world-class educational platform.",
    },
    {
      name: "Coursera",
      url: "https://www.coursera.org",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Coursera_logo_%282020%29.svg",
      keywords: ["courses", "education", "learning", "online"],
      desc: "Top universities offering online courses.",
    },
    {
      name: "Steam Games",
      url: "https://store.steampowered.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg",
      keywords: ["games", "gaming", "pc games", "play"],
      desc: "Largest digital PC game store.",
    },
    {
      name: "Amazon",
      url: "https://www.amazon.in",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      keywords: ["shopping", "electronics", "gadgets", "buy"],
      desc: "World’s biggest shopping website.",
    },
  ];

  // Match logic
  let results = [];
  const words = query.split(" ");

  database.forEach((site) => {
    words.forEach((word) => {
      if (site.keywords.includes(word) && !results.includes(site)) {
        results.push(site);
      }
    });
  });

  if (results.length === 0) {
    resultsDiv.innerHTML = "<h2>No results found! Try another word.</h2>";
    return;
  }

  // Display results
  results.forEach((site) => {
    const card = document.createElement("div");
    card.classList.add("result-card");

    card.innerHTML = `
            <img src="${site.logo}">
            <div class="result-name">${site.name}</div>
            <div class="result-desc">${site.desc}</div>
            <button class="visit-btn" onclick="window.open('${site.url}', '_blank')">Visit Website</button>
        `;

    resultsDiv.appendChild(card);
  });
});
