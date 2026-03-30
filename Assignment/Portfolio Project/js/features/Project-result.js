document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("project-search");
  const projects = document.querySelectorAll("projectsData");

  // Create count display element
  const countText = document.createElement("p");
  countText.style.margin = "10px";
  document.body.insertBefore(countText, document.body.firstChild);

  // Initial count
  countText.textContent = projects.length + " projects found";

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    let visibleCount = 0;

    projects.forEach(project => {
      const text = project.textContent.toLowerCase();

      if (text.includes(value)) {
        project.style.display = "block";
        visibleCount++;
      } else {
        project.style.display = "none";
      }
    });

    // Update count
    countText.textContent =
      visibleCount === 0
        ? "No projects found"
        : visibleCount + " projects found";
  });
});