function saveWorkshopEntry() {
  let fullName = document.getElementById("fullName").value;
  let studentCode = document.getElementById("studentCode").value;
  let emailAddress = document.getElementById("emailAddress").value;
  let sessionChoice = document.getElementById("sessionChoice").value;
  let status = document.getElementById("statusMessage");

  if (fullName === "") {
    status.textContent = "Full name is required.";
    return;
  }

  if (studentCode === "") {
    status.textContent = "Student ID is required.";
    return;
  }

  if (emailAddress === "") {
    status.textContent = "Email address is required.";
    return;
  }

  if (sessionChoice === "") {
    status.textContent = "Please choose a workshop.";
    return;
  }

  let workshopEntry = {
    fullName: fullName,
    studentId: studentCode,
    email: emailAddress,
    workshop: sessionChoice
  };

  let storedText = JSON.stringify(workshopEntry);
  localStorage.setItem("campusWorkshopEntry", storedText);

  document.getElementById("dataPreview").textContent = storedText;
  status.textContent = "Your workshop registration has been saved.";
}

function loadWorkshopEntry() {
  let storedText = localStorage.getItem("campusWorkshopEntry");
  let result = document.getElementById("savedResult");

  if (storedText === null) {
    result.textContent = "There is no saved registration.";
    return;
  }

  let savedEntry = JSON.parse(storedText);
  result.textContent =
    savedEntry.fullName + " (" + savedEntry.studentId + ") selected " +
    savedEntry.workshop + ".";
}

function removeWorkshopEntry() {
  localStorage.removeItem("campusWorkshopEntry");
  document.getElementById("dataPreview").textContent =
    "No registration data yet.";
  document.getElementById("savedResult").textContent =
    "Saved registration has been cleared.";
}
