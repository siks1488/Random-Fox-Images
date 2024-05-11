document.getElementById("get-fox-btn").addEventListener("click", getRandomFox);

async function getRandomFox() {
  try {
    const response = await fetch("https://randomfox.ca/floof/");
    const data = await response.json();
    const imageUrl = data.image;

    const imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = "";

    const foxImage = document.createElement("img");
    foxImage.src = imageUrl;
    foxImage.alt = "Random Fox Image";
    imageContainer.appendChild(foxImage);
  } catch (error) {
    console.error("Error fetching random fox image:", error);
    const imageContainer = document.getElementById("image-container");
    imageContainer.textContent = "An error occurred while fetching random fox image. Please try again later.";
  }
}
