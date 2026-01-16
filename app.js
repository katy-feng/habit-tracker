const addHabitBtn = document.getElementById("add-habit-btn");
const removeHabitBtn = document.getElementById("remove-habit-btn");
const toggleBtn = document.getElementById("toggle-vis-btn");

const EXAMPLE_HABIT_TEXT = "Example Habit Here";

let habitList = document.getElementById("habit-list");
let archivedListSn = document.getElementById("archived-list-section");

const addCheckbox = (li) => {
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.className = "checkbox";
  li.prepend(checkBox);
};

const getUserHabit = function () {
  let newHabit = prompt("What is your new habit?", "To start meditating");
  if (!newHabit) {
    return null;
  }
  if (!newHabit.endsWith(".")) {
    newHabit = newHabit + ".";
  }
  return newHabit;
};

const appendUserHabit = function () {
  const userHabit = getUserHabit();
  if (!userHabit) return;

  const entry = document.createElement("li");
  entry.textContent = userHabit;
  addCheckbox(entry);

  if (habitList.firstElementChild.textContent === EXAMPLE_HABIT_TEXT) {
    habitList.replaceChild(entry, habitList.firstElementChild);
  } else {
    habitList.appendChild(entry);
  }
};

const removeUserHabit = () => {
  lastChild = habitList.lastElementChild;
  habitList.removeChild(lastChild);

  if (habitList.childElementCount === 0) {
    const entry = document.createElement("li");
    entry.innerHTML = `<i>${EXAMPLE_HABIT_TEXT}</i>`;
    habitList.appendChild(entry);
  }
};

addHabitBtn.addEventListener("click", appendUserHabit);
removeHabitBtn.addEventListener("click", removeUserHabit);

toggleBtn.addEventListener("click", () => {
  archivedListSn.classList.toggle("invisible");
});

// Notes
// Toggle visibility button would be good to see past to-dos
