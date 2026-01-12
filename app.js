const addHabitBtn = document.getElementById('add-habit-btn');

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

    let habitList = document.getElementById("habit-list");
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(userHabit));
    habitList.appendChild(entry);

}

addHabitBtn.addEventListener('click', appendUserHabit);