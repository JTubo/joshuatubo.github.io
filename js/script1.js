// Typing Animation for Roles
const roles = ["Developer", "Designer", "Programmer"];
let currentRoleIndex = 0;
let currentCharacterIndex = 0;
const typingSpeed = 100; // Speed of typing each character
const delayBetweenRoles = 1500; // Delay between each role
const typingElement = document.querySelector(".typing-roles");

if (!typingElement) {
  console.error("Element with class 'typing-roles' not found in the DOM.");
}

function typeRole() {
  const currentRole = roles[currentRoleIndex % roles.length];
  if (currentCharacterIndex < currentRole.length) {
    typingElement.innerHTML += currentRole[currentCharacterIndex++];
    setTimeout(typeRole, typingSpeed);
  } else {
    setTimeout(eraseRole, delayBetweenRoles);
  }
}

function eraseRole() {
  const currentRole = roles[currentRoleIndex % roles.length];
  if (currentCharacterIndex > 0) {
    typingElement.innerHTML = currentRole.substring(0, --currentCharacterIndex);
    setTimeout(eraseRole, typingSpeed);
  } else {
    currentRoleIndex++;
    setTimeout(typeRole, typingSpeed);
  }
}

// Ensure DOM is fully loaded before starting the typing animation
document.addEventListener("DOMContentLoaded", () => {
  if (typingElement) {
    setTimeout(typeRole, 500); // Start typing after a slight delay
  }
});
