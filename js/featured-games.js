const featuredGames = [
    {
        title: "Word Search",
        description: "Find hidden words across themed puzzle grids designed to improve vocabulary and concentration.",
        category: "Word Game",
        difficulty: "Easy",
        time: "10–15 min",
        link: "games/word-search.html"
    },
    {
        title: "Sudoku",
        description: "Complete a classic number puzzle using logic and deduction without repeating numbers.",
        category: "Number Game",
        difficulty: "Medium",
        time: "15 min",
        link: "games/sudoku.html"
    },
    {
        title: "Crossword",
        description: "Solve clues to complete a crossword puzzle while expanding your vocabulary.",
        category: "Word Game",
        difficulty: "Medium",
        time: "15 min",
        link: "games/crossword.html"
    },
    {
        title: "Lexi-Sum",
        description: "Combine vocabulary and arithmetic skills in PuzzleHub's original educational game.",
        category: "Educational",
        difficulty: "Intermediate",
        time: "12 min",
        link: "games/lexi-sum.html"
    }
];

const featuredContainer = document.getElementById("featured-games");

if (featuredContainer) {
    featuredContainer.innerHTML = featuredGames.map(game => `
        <div class="card featured-card">
            <span class="featured-badge">Featured Today</span>
            <h3 class="featured-title">${game.title}</h3>
            <p class="featured-description">${game.description}</p>
            <div class="featured-meta">
                <span>${game.category}</span>
                <span>${game.difficulty}</span>
                <span>${game.time}</span>
            </div>
            <a href="${game.link}" class="btn btn-primary featured-button">Play Now</a>
        </div>
    `).join('');
}
