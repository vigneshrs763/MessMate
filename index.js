/* =========================
   MESSMATE MENU DATA
========================= */

const menus = {

  week13: {

    Monday: {
      breakfast: "Idli + Vadai",
      lunch: "Ladies Finger Dry + Palak Corn",
      snacks: "Pasta",
      dinner: "Egg Burji + Gobi Manchurian"
    },

    Tuesday: {
      breakfast: "Poha + Omelette",
      lunch: "Carrot Beans Poriyal + Channa Masala",
      snacks: "Veg Puff",
      dinner: "Veg Pulao + Aloo Poori"
    },

    Wednesday: {
      breakfast: "Aloo Paratha",
      lunch: "Chicken Gravy + Paneer Gravy",
      snacks: "Aloo Masala Sandwich",
      dinner: "Jeera Rice + Mixed Veg Kurma"
    },

    Thursday: {
      breakfast: "Onion Oothappam",
      lunch: "Dal + Kovakkai Fry + Meal Maker Gravy",
      snacks: "Onion Pakoda",
      dinner: "Aloo Mutter Curry + Gobi 65 + Dal Tadka"
    },

    Friday: {
      breakfast: "Semiya Upma + Bonda",
      lunch: "Beetroot Poriyal + Guttivankaya Curry",
      snacks: "Pav Bhaji",
      dinner: "Egg Curry + Paneer Butter Masala"
    },

    Saturday: {
      breakfast: "Chole Bhatura",
      lunch: "Mudda Pappu + Mixed Veg Curry",
      snacks: "Big Samosa",
      dinner: "Vangibath + Dal Makhani"
    },

    Sunday: {
      breakfast: "Podi Dosai",
      lunch: "Hyderabadi Chicken Biryani + Paneer Biryani",
      snacks: "Pani Poori",
      dinner: "Tomato Rice + Veg Kurma"
    }

  },


  week24: {

    Monday: {
      breakfast: "Idli + Vadai",
      lunch: "Vatha Kulambu + Cabbage Poriyal + Rajma Gravy",
      snacks: "Pasta",
      dinner: "Egg Burji + Gobi Manchurian"
    },

    Tuesday: {
      breakfast: "Palak Paratha + Omelette",
      lunch: "Dal + Aloo 65 + Channa Masala",
      snacks: "Veg Puff",
      dinner: "Veg Pulao + Aloo Poori"
    },

    Wednesday: {
      breakfast: "Onion Oothappam",
      lunch: "Chicken Gravy + Paneer Gravy",
      snacks: "Aloo Masala Sandwich",
      dinner: "Jeera Rice + Mixed Veg Kurma"
    },

    Thursday: {
      breakfast: "Pongal",
      lunch: "Beetroot Poriyal + Meal Maker Gravy + Palak Sambar",
      snacks: "Onion Pakoda",
      dinner: "Aloo Mutter Masala + Gobi 65 + Dal Tadka"
    },

    Friday: {
      breakfast: "Semiya Khichdi + Bonda",
      lunch: "Ladies Finger Dry + Brinjal Gravy + Sorakkai",
      snacks: "Pav Bhaji",
      dinner: "Egg Curry + Paneer Butter Masala"
    },

    Saturday: {
      breakfast: "Chole Bhatura",
      lunch: "Mudda Pappu + Mixed Veg Curry",
      snacks: "Big Samosa",
      dinner: "Veg Jaipuri + Dal Makhani"
    },

    Sunday: {
      breakfast: "Pesarattu Dosai",
      lunch: "Hyderabadi Chicken Biryani + Paneer Biryani",
      snacks: "Pani Poori",
      dinner: "Tamarind Rice + Kadai Veg"
    }

  }

};


/* =========================
   VARIABLES
========================= */

let currentWeek = "week13";

let feedbacks =
  JSON.parse(
    localStorage.getItem("messmate-feedback")
  ) || [];

let selectedRating = 0;


/* =========================
   SELECTOR
========================= */

const $ = selector =>
  document.querySelector(selector);


/* =========================
   CURRENT DAY
========================= */

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const today =
  dayNames[new Date().getDay()];


/* =========================
   DATE
========================= */

$("#date").textContent =
  new Date().toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      day: "numeric",
      month: "long"
    }
  );


/* =========================
   RENDER TODAY
========================= */

function renderToday() {

  const todayMenu =
    menus[currentWeek][today];


  const meals = [

    {
      name: "Breakfast",
      emoji: "🍳",
      food: todayMenu.breakfast
    },

    {
      name: "Lunch",
      emoji: "🍛",
      food: todayMenu.lunch
    },

    {
      name: "Snacks",
      emoji: "🥪",
      food: todayMenu.snacks
    },

    {
      name: "Dinner",
      emoji: "🥘",
      food: todayMenu.dinner
    }

  ];


  $("#todayMeals").innerHTML =
    meals.map(meal => `

      <div class="meal-card">

        <div class="meal-emoji">
          ${meal.emoji}
        </div>

        <h3>
          ${meal.name}
        </h3>

        <p>
          ${meal.food}
        </p>

        <span class="meal-label">
          Today's menu
        </span>

      </div>

    `).join("");


  $("#topMeal").textContent =
    todayMenu.lunch.split("+")[0].trim();

}


renderToday();


/* =========================
   WEEKLY MENU
========================= */

function renderWeeklyMenu() {

  const week =
    menus[currentWeek];


  $("#weeklyMenu").innerHTML =
    Object.entries(week)
      .map(([day, menu]) => `

        <div class="day-card">

          <div class="day-header">

            <strong>
              ${day}
            </strong>

            <span>
              4 meals
            </span>

          </div>


          <div class="day-meals">

            <div class="day-meal">

              <span>
                🍳 BREAKFAST
              </span>

              <p>
                ${menu.breakfast}
              </p>

            </div>


            <div class="day-meal">

              <span>
                🍛 LUNCH
              </span>

              <p>
                ${menu.lunch}
              </p>

            </div>


            <div class="day-meal">

              <span>
                🥪 SNACKS
              </span>

              <p>
                ${menu.snacks}
              </p>

            </div>


            <div class="day-meal">

              <span>
                🥘 DINNER
              </span>

              <p>
                ${menu.dinner}
              </p>

            </div>

          </div>

        </div>

      `)
      .join("");

}


renderWeeklyMenu();


/* =========================
   WEEK SWITCHING
========================= */

function changeWeek(week) {

  currentWeek = week;

  renderToday();

  renderWeeklyMenu();


  document
    .querySelectorAll("[data-week]")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.week === week
      );

    });

}


/* Dashboard week buttons */

document
  .querySelectorAll(".week-btn")
  .forEach(button => {

    button.onclick = () => {

      changeWeek(
        button.dataset.week
      );

    };

  });


/* Menu page week buttons */

document
  .querySelectorAll(".menu-tab")
  .forEach(button => {

    button.onclick = () => {

      changeWeek(
        button.dataset.week
      );

    };

  });


/* =========================
   FEEDBACK
========================= */

function renderFeedback() {

  $("#feedbackList").innerHTML =

    feedbacks.length

      ? feedbacks
          .slice()
          .reverse()
          .map(item => `

            <div class="feedback-item">

              <strong>
                ${item.meal}
              </strong>

              <span>
                ${"★".repeat(item.rating)}
              </span>

              <p>
                ${escapeHTML(item.text)}
              </p>

            </div>

          `)
          .join("")

      : `
        <p class="muted">
          No feedback yet. Be the first!
        </p>
      `;


  $("#feedbackCount").textContent =
    feedbacks.length;

}


renderFeedback();


/* =========================
   RATING
========================= */

document
  .querySelectorAll("[data-rating]")
  .forEach(button => {

    button.onclick = () => {

      selectedRating =
        Number(button.dataset.rating);


      document
        .querySelectorAll("[data-rating]")
        .forEach(item => {

          item.classList.remove(
            "selected"
          );

        });


      button.classList.add(
        "selected"
      );

    };

  });


/* =========================
   SUBMIT FEEDBACK
========================= */

$("#submitFeedback").onclick = () => {

  const meal =
    $("#mealSelect").value;

  const text =
    $("#feedbackText")
      .value
      .trim();


  if (!selectedRating) {

    toast(
      "Please select a rating."
    );

    return;

  }


  if (!text) {

    toast(
      "Please write some feedback."
    );

    return;

  }


  feedbacks.push({

    meal,
    rating: selectedRating,
    text

  });


  localStorage.setItem(
    "messmate-feedback",
    JSON.stringify(feedbacks)
  );


  $("#feedbackText").value = "";

  selectedRating = 0;


  document
    .querySelectorAll("[data-rating]")
    .forEach(item => {

      item.classList.remove(
        "selected"
      );

    });


  renderFeedback();

  toast(
    "Feedback submitted ✓"
  );

};


/* =========================
   COMMAND SYSTEM
========================= */

function runCommand(command) {

  const menu =
    menus[currentWeek][today];


  let result = "";


  switch (command) {

    case "/menu":

      result =
        "🍽️ Today's menu has Breakfast, Lunch, Snacks and Dinner.";

      break;


    case "/today":

      result = `
        🍳 Breakfast: ${menu.breakfast}
        • 🍛 Lunch: ${menu.lunch}
        • 🥪 Snacks: ${menu.snacks}
        • 🥘 Dinner: ${menu.dinner}
      `;

      break;


    case "/rating":

      result =
        "⭐ Current MessMate rating is 4.2/5.";

      break;


    case "/best":

      result =
        `🔥 Today's lunch highlight is ${menu.lunch.split("+")[0].trim()}.`;

      break;


    case "/feedback":

      result =
        `💬 ${feedbacks.length} feedback ${
          feedbacks.length === 1
            ? "submission"
            : "submissions"
        } received.`;

      break;


    default:

      result =
        "Try /menu, /today, /rating, /best or /feedback.";

  }


  $("#commandResult").textContent =
    result;

  $("#commandResult")
    .classList
    .remove("hidden");

}


/* COMMAND BUTTON */

$("#commandBtn").onclick = () => {

  runCommand(
    $("#commandInput")
      .value
      .trim()
      .toLowerCase()
  );

};


/* ENTER */

$("#commandInput").onkeydown =
  event => {

    if (event.key === "Enter") {

      runCommand(
        event.target.value
          .trim()
          .toLowerCase()
      );

    }

  };


/* QUICK COMMANDS */

document
  .querySelectorAll("[data-command]")
  .forEach(button => {

    button.onclick = () => {

      const command =
        button.dataset.command;

      $("#commandInput").value =
        command;

      runCommand(command);

    };

  });


/* =========================
   NAVIGATION
========================= */

document
  .querySelectorAll(".nav")
  .forEach(button => {

    button.onclick = () => {

      document
        .querySelectorAll(".nav")
        .forEach(item => {

          item.classList.remove(
            "active"
          );

        });


      button.classList.add(
        "active"
      );


      const page =
        button.dataset.page;


      $("#dashboardPage")
        .classList
        .toggle(
          "hidden",
          page !== "dashboard"
        );


      $("#menuPage")
        .classList
        .toggle(
          "hidden",
          page !== "menu"
        );


      $("#feedbackPage")
        .classList
        .toggle(
          "hidden",
          page !== "feedback"
        );

    };

  });


/* =========================
   DARK MODE
========================= */

$("#themeBtn").onclick = () => {

  document.body
    .classList
    .toggle("dark");


  $("#themeBtn").textContent =

    document.body.classList.contains(
      "dark"
    )

      ? "☀"

      : "☾";

};


/* =========================
   TOAST
========================= */

function toast(message) {

  const element =
    $("#toast");


  element.textContent =
    message;


  element.classList.add(
    "show"
  );


  setTimeout(() => {

    element.classList.remove(
      "show"
    );

  }, 1800);

}


/* =========================
   HTML SECURITY
========================= */

function escapeHTML(value) {

  return value.replace(
    /[&<>"']/g,

    character => ({

      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"

    }[character])

  );

}