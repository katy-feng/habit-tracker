const addHabitBtn = document.getElementById('add-habit-btn');
let habitList = document.getElementById("habit-list");

const getUserHabit = function () {
  let newHabit = prompt(`What is your new habit?`, "To start meditating");
  if (!newHabit) {
    return null;
  }
  if (!newHabit.endsWith(".")) {
    newHabit = newHabit + "."
  }
  return newHabit;
};

const appendUserHabit = function () {
    const userHabit = getUserHabit();
    if (!userHabit) return;

    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(userHabit));
    habitList.appendChild(entry);

}

addHabitBtn.addEventListener('click', appendUserHabit);

const toggleBtn = document.getElementById("toggle-vis-btn");
toggleBtn.addEventListener('click', () => {
  habitList.classList.toggle('visible');
  habitList.classList.toggle('invisible');
})