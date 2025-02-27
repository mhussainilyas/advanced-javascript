let parent = document.querySelector(".options");
let result = document.querySelector(".result");

const handleLanguageSelection = (event) => {
  if (event.target.tagName === "LI") {
    // Remove emojis and trim whitespace for cleaner text
    const selectedLanguage = event.target.innerText
      .replace(/[^\w\s/]/g, "")
      .trim();
    // Update result with proper grammar and formatting
    result.textContent = `Your favorite programming language is ${selectedLanguage}.`;
  }
};

// Add event listener using event delegation
parent.addEventListener("click", handleLanguageSelection);
