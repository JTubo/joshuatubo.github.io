// JavaScript to handle pagination
const articlesPerPage = 3;
let currentPage = 1;

function showPage(page) {
  const articles = document.querySelectorAll(".article");
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Check if articles exist before proceeding
  if (articles.length === 0) {
    console.error("No articles found with the class 'article'.");
    return;
  }

  // Ensure the page is within the range
  if (page < 1) page = 1;
  if (page > totalPages) page = totalPages;
  currentPage = page;

  // Hide all articles
  articles.forEach((article) => {
    article.style.display = "none";
  });

  // Show only the articles for the current page
  const start = (page - 1) * articlesPerPage;
  const end = start + articlesPerPage;
  for (let i = start; i < end && i < articles.length; i++) {
    articles[i].style.display = "block";
  }
}

// Ensure DOM is fully loaded before initializing the first page
document.addEventListener("DOMContentLoaded", () => {
  showPage(1);
});
