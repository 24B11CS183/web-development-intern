
// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Form submitted successfully!");
});

// To-Do List
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();
  if (taskValue === "") return;

  const li = document.createElement("li");
  li.textContent = taskValue;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.style.marginLeft = "10px";
  removeBtn.style.background = "#dc3545";
  removeBtn.style.color = "#fff";
  removeBtn.style.border = "none";
  removeBtn.style.padding = "4px 8px";
  removeBtn.style.borderRadius = "4px";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
