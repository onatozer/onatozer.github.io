// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-papers",
          title: "Papers",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/papers/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "projects-mini-alpha-go",
          title: 'Mini-Alpha-Go',
          description: "From scratch implementation of a 9x9 go game engine and elo-tracker, alongside an Alpha-Go implementation that uses Monte-Carlo tree search wth deep residual networks to make its next move, trained using combination of self play and supervised learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mini-alphago.html";
            },},{id: "projects-nba-monte-carlo-simulator",
          title: 'NBA Monte-Carlo Simulator',
          description: "Simulator that predicts the states of an NBA based off of the players on each roster trained on web-scraped data from the 22-23 regular season. Model was able to successfully predict 7 out of 8 2nd-round matchups in that following season&#39;s playoffs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/monte-carlo-sim.html";
            },},{id: "projects-deepcfr-pokerbot",
          title: 'DeepCFR Pokerbot',
          description: "A human-level pokerbot that can play Heads Up Texas-Hodlem, built using counterfactual regret minimization with deep neural networks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/poker_proj.html";
            },},];
