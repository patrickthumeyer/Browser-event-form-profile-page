const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  //Fetch values from form
  const name = form.elements["userName"];
  const birthdate = form.elements["date"];
  const photo = form.elements["userPic"];
  const color = form.elements["userColor"];
  const userDescription = form.elements["userDescription"];
  const skillsArray = Array.from(
    document.querySelectorAll(`[name="userSkills"]:checked`)
  );
  const skillsChosenByUser = skillsArray.map(selectedElement => {
    return selectedElement.value;
  });

  //Display card
  document.querySelector(".page--generated").style.display = "block";

  //Image
  const transformedImagePath = photo.value.replace("C:\\fakepath\\", "images/");
  document
    .querySelector(".card-image-container img")
    .setAttribute("src", transformedImagePath);

  //Age
  let currentTime = new Date();
  //   console.log(currentTime.getFullYear());
  //   console.dir(birthdate);
  let birthyear = birthdate.value.split("-")[0];
  let ageCalculated = currentTime.getFullYear() - birthyear;
  document.querySelector(".age").innerText = `is ${ageCalculated} years old.`;

  //Pass fetched values to card
  document.querySelectorAll("h1")[1].innerText = name.value;
  document.querySelector(".card-skills").innerText =
    document.querySelector(".card-skills").innerText +
    " " +
    skillsChosenByUser.join(", ");
  document.querySelector(".card-description").innerText = userDescription.value;
  document.querySelector(".card-image-container").style.background =
    color.value;

  //Display Error messages
  if (!name.value) {
    name.closest(".form-element").querySelector(".error").style.display =
      "block";
  }
  if (!userDescription.value) {
    userDescription
      .closest(".form-element")
      .querySelector(".error").style.display = "block";
  }
});

//Reset Button

document.querySelector("button").addEventListener("click", () => {
  //   form.reset(); // not necessary -- use when only want to clear form
  document.querySelector(".page--generated").style.display = "none";
});
