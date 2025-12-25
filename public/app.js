const form = document.getElementById("resumeForm");
const list = document.getElementById("resumeList");

// Upload resume
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData(form);

    const res = await fetch("/api/resumes/upload", {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Upload failed");
      return;
    }

    alert(data.message || "Resume uploaded successfully");

    form.reset();
    loadResumes();
  } catch (err) {
    console.error(err);
    alert("Something went wrong while uploading");
  }
});

// Load uploaded resumes
async function loadResumes() {
  list.innerHTML = "<li>Loading...</li>";

  try {
    const res = await fetch("/api/resumes/list");
    const data = await res.json();

    list.innerHTML = "";

    if (!data || data.length === 0) {
      list.innerHTML = "<li>No resumes uploaded yet</li>";
      return;
    }

    data.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${item.name || "Candidate"}</span>
        <a href="${item.resumeUrl}" target="_blank">Download</a>
      `;
      list.appendChild(li);
    });
  } catch (err) {
    console.error(err);
    list.innerHTML = "<li>Error loading resumes</li>";
  }
}

// Initial load
loadResumes();
