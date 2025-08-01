//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const headerTitle = document.querySelector("#mainTitle");
var allpages=document.querySelectorAll(".page");

//target all carousel elements to save to constants
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slides = Array.from(track.children);

const nameElement = document.querySelector("#track-name");
const descElement = document.querySelector("#track-description");
const statsElement = document.querySelector("#track-stats");

const slideData = [
  {
    name: "Silverstone",
    description: `Silverstone Circuit is a world-famous motor racing track located in Northamptonshire, England. Originally a World War II airfield, it was converted into a race track in 1948 and has since become the home of British motorsport. It hosts the British Grand Prix and is known for its high-speed corners, challenging layout, and rich racing history. Key features include iconic sections like Copse Corner, Maggotts and Becketts, and the Hangar Straight. Silverstone combines technical complexity with thrilling speed, making it a favorite among drivers and fans alike.`,
    stats: {
      country: "UK",
      length: "5.891 km",
      corners: "18",
      firstGP: "1950",
      lapRecord: "1:27.097 (Lewis Hamilton, 2020)"
    }
  },
  {
    name: "Monaco",
    description: `The Monaco Grand Prix Circuit, also known as Circuit de Monaco, is a legendary street circuit located in Monte Carlo. It winds through the narrow roads of the city, featuring tight corners, elevation changes, and a tunnel section—making it one of the most challenging tracks in Formula 1. First held in 1929, the race is famous for its glamour, scenic harbor views, and unforgiving layout that leaves no room for error. Despite its slower average speeds, Monaco remains a prestigious and iconic venue in the racing world.`,
    stats: {
      country: "Monaco",
      length: "3.337 km",
      corners: "19",
      firstGP: "1929",
      lapRecord: "1:12.909 (Lewis Hamilton, 2021)"
    }
  },
  {
    name: "Monza",
    description: `The Autodromo Nazionale Monza, located near Milan, is one of the oldest and fastest tracks in Formula 1. Known as the "Temple of Speed", it features long straights and high-speed corners that push cars to their limits. First used in 1922, Monza is famous for its passionate Italian fans, historic races, and iconic corners like the Lesmo curves and Parabolica. Slipstreaming and minimal downforce setups are key strategies at this high-velocity circuit.`,
    stats: {
      country: "Italy",
      length: "5.793 km",
      corners: "11",
      firstGP: "1950",
      lapRecord: "1:21.046 (Rubens Barrichello, 2004)"
    }
  },
  {
    name: "Interlagos",
    description: `Officially called Autódromo José Carlos Pace, the Interlagos circuit is located in São Paulo, Brazil. It’s known for its high altitude, unpredictable weather, and dramatic elevation changes. The track layout includes a mix of fast sections and tight corners, encouraging overtaking and exciting race finishes. Historic moments and emotional home victories make Interlagos a fan favorite and a staple of the F1 calendar.`,
    stats: {
      country: "Brazil",
      length: "4.309 km",
      corners: "15",
      firstGP: "1973",
      lapRecord: "1:10.540 (Valtteri Bottas, 2018)"
    }
  },
  {
    name: "Spa-Francorchamps",
    description: `Spa-Francorchamps is a legendary track nestled in the Ardennes forest of Belgium. Renowned for its scenic layout and rapid changes in weather, Spa features iconic corners such as Eau Rouge and Raidillon. It’s one of the longest tracks in Formula 1 and combines fast straights with technical sections, making it a true test of driver skill and car performance. Spa is beloved by fans and drivers alike for its rich history and thrilling races.`,
    stats: {
      country: "Belgium",
      length: "7.004 km",
      corners: "20",
      firstGP: "1950",
      lapRecord: "1:46.286 (Valtteri Bottas, 2018)"
    }
  },
  {
    name: "Singapore Circuit",
    description: `The Singapore Grand Prix is held on the Marina Bay Street Circuit, a challenging night-time race through the heart of the city. Introduced in 2008, it was the first-ever Formula 1 night race and is known for its stunning skyline backdrop, humid climate, and physically demanding layout. The circuit features 90-degree turns, narrow sections, and limited runoff areas, testing both driver endurance and precision. The combination of high humidity, bright lights, and urban scenery makes it one of the most unique and spectacular races on the calendar.`,
    stats: {
        country: "Singapore",
        length: "4.940 km",
        firstGP: "2008",
        lapRecord: "1:35.867 (Lewis Hamilton, 2023)"
    }
  }
];

// For F1 car and text animations on scroll
const car = document.querySelector(".f1-car");
const pgTxt = document.querySelectorAll(".page-text");

//For Rules pics and text
const ruleTxt = document.querySelectorAll(".rules-text");
const rulePics = document.querySelectorAll(".rule-image");

//For team info
const teamButtons = document.querySelectorAll(".team-btn");
const teamInfoContainer = document.getElementById("team-info-container");
const infoBox = document.getElementById("team-info");

const teamData = {
  mclaren: {
    name: "McLaren F1 Team",
    yearJoined: 1950,
    championships: 8,
    wins: 198,
    podiums: 544,
    drivers: ["Lando Norris", "Oscar Piastri"],
    intro: "McLaren is one of Formula 1’s most historic and successful teams, founded in 1963 by Bruce McLaren and based in Woking, England. With 8 Constructors’ Championships and 12 Drivers’ Championships, the team has a legendary legacy featuring icons like Ayrton Senna and Lewis Hamilton. Entering the 2025 season, McLaren is experiencing a strong resurgence, with Lando Norris and Oscar Piastri leading the charge. After a series of competitive performances and podium finishes in recent years, McLaren is once again seen as a serious contender in the battle for the front of the grid.",
    bgImage: "Images/Mclaren.jpg"
  },
  ferrari: {
    name: "Scuderia Ferrari",
    yearJoined: 1950,
    championships: 16,
    wins: 248,
    podiums: 833,
    drivers: ["Lewis Hamilton", "Charles Leclerc"],
    intro: "Scuderia Ferrari is the oldest and most iconic team in Formula 1, founded in 1929 by Enzo Ferrari. Based in Maranello, Italy, Ferrari has been a cornerstone of F1 since the championship began in 1950. With a record 16 Constructors’ Championships and 15 Drivers’ Championships, Ferrari’s legacy is unmatched. Legendary drivers such as Michael Schumacher, Niki Lauda, and Gilles Villeneuve have all worn the famous red. As the team enters the 2025 season, Ferrari remains a major force on the grid, with Charles Leclerc and Lewis Hamilton forming a star-studded driver lineup.",
    bgImage: "Images/Ferrari.jpg"
  },
  benz: {
    name: "Mercedes‑AMG Petronas",
    yearJoined: 1954,
    championships: 8,
    wins: 130,
    podiums: 304,
    drivers: ["George Russell", "Andrea Kimi Antonelli"],
    intro: "The Mercedes-AMG Petronas Formula One Team, based in Brackley, England, has been a dominant force in modern Formula 1. Backed by Mercedes-Benz and title sponsor Petronas, the team rose to unprecedented success in the 2010s, claiming 8 consecutive Constructors’ Championships (2014–2021) and 7 Drivers’ Championships, including 6 with Lewis Hamilton. As they head into the 2025 season, Mercedes is undergoing a transitional phase following Hamilton’s departure to Ferrari. The team now fields George Russell and rising star Andrea Kimi Antonelli, focusing on rebuilding towards future success.",
    bgImage: "Images/Mercedes.jpg"
  },
  redbull: {
    name: "Red Bull Racing",
    yearJoined: 2005,
    championships: 6,
    wins: 124,
    podiums: 287,
    drivers: ["Max Verstappen", "Yuki Tsunoda"],
    intro: "Oracle Red Bull Racing, based in Milton Keynes, England, is one of Formula 1’s most dominant and innovative teams. Founded in 2005, Red Bull quickly rose to the top, winning four consecutive Constructors’ and Drivers’ Championships from 2010 to 2013 with Sebastian Vettel. After a brief rebuild, the team returned to dominance with Max Verstappen, claiming multiple world titles and rewriting records through the early 2020s. Red Bull Racing plans to be the main contender for the championship in 2025.",
    bgImage: "Images/Redbull.jpg"
  },
  racingbulls: {
    name: "Racing Bulls (RB)",
    yearJoined: 2006,
    championships: 0,
    wins: 2,
    podiums: 5,
    drivers: ["Liam Lawson", "Isack Hadjar"],
    intro: "Formerly known as Toro Rosso and AlphaTauri, the team was rebranded as Visa Cash App RB (Racing Bulls) in 2024. As Red Bull Racing’s sister team, they operate from Faenza, Italy, and serve as a proving ground for emerging talent and technical development. The team has earned respect for its competitiveness and ability to nurture future Red Bull stars. In 2025, Racing Bulls is continuing to establish its identity with a stylish new brand, increased factory support, and a promising driver lineup with Dark Horse Isack Hadjar and Liam Lawson",
    bgImage: "Images/Racingbulls.jpg"
  },
  am: {
    name: "Aston Martin F1 Team",
    yearJoined: 2021,
    championships: 0,
    wins: 0,
    podiums: 9,
    drivers: ["Fernando Alonso", "Lance Stroll"],
    intro: "Aston Martin, based in Silverstone, UK, returned to Formula 1 under its iconic name in 2021, building on the legacy of Racing Point and Force India. Backed by major investment from billionaire Lawrence Stroll and title sponsor Aramco, the team has made rapid progress. Heading into 2025, Aston Martin continues to push toward the front of the grid with strong factory support and a talented lineup led by Fernando Alonso and Lance Stroll.",
    bgImage: "Images/AM.jpg"
  },
  alpine: {
    name: "Alpine F1 Team",
    yearJoined: 1977,
    championships: 0,
    wins: 1,
    podiums: 6,
    drivers: ["Pierre Gasly", "Franco Colapinto"],
    intro: "The Alpine F1 Team, owned by Renault Group, represents the French marque’s bold commitment to Formula 1. Rebranded from Renault to Alpine in 2021, the team is based in Enstone, UK and Viry-Châtillon, France. As they enter the 2025 season, Alpine is working to regain consistency and competitiveness after a mixed set of results. With a focus on developing both chassis and power unit in-house, Alpine continues to push for a stronger presence in the midfield, driven by a long-term performance plan and French pride.",
    bgImage: "Images/Alpine.jpg"
  },
  haas: {
    name: "Haas F1 Team",
    yearJoined: 2016,
    championships: 0,
    wins: 0,
    podiums: 0,
    drivers: ["Esteban Ocon", "Oliver Bearman"],
    intro: "Haas is the only American team on the Formula 1 grid, founded by NASCAR team owner Gene Haas and debuting in 2016. The team is based in the United States with strong technical support from Ferrari and chassis development in the UK. In 2025, Haas continues to compete as a resilient privateer team, often punching above its weight in the midfield with rising talent Oliver Bearman and Esteban Ocon.",
    bgImage: "Images/Haas.jpeg"
  },
  sauber: {
    name: "Sauber F1 Team",
    yearJoined: 1993,
    championships: 0,
    wins: 0,
    podiums: 12,
    drivers: ["Nico Hulkenberg", "Gabriel Bortoleto"],
    intro: "Formerly known as Alfa Romeo, the Sauber team has been rebranded as the Stake F1 Team Kick Sauber for the 2024–2025 seasons, ahead of Audi's full entry in 2026. Based in Hinwil, Switzerland, Sauber has a long history in F1 as an independent constructor since 1993. In 2025, the team is in a transitional phase, laying the groundwork for Audi's future factory involvement. While results are still developing, Sauber’s focus is on infrastructure growth and steady progression before the Audi era begins.",
    bgImage: "Images/Sauber.jpg"
  },
  williams: {
    name: "Williams Racing",
    yearJoined: 1977,
    championships: 9,
    wins: 114,
    podiums: 312,
    drivers: ["Carlos Sainz", "Alex Albon"],
    intro: "Williams Racing is one of F1’s most legendary teams, founded in 1977 by Sir Frank Williams. With 9 Constructors’ Championships and 7 Drivers’ Championships, Williams has a storied past, though recent years have been more challenging. Entering the 2025 season, Williams is continuing its rebuild under team principal James Vowles, with strong backing from new ownership group Dorilton Capital. With improved facilities, strategic hires, and a long-term vision, Williams is working hard to return to competitiveness and recapture its former glory.",
    bgImage: "Images/Williams.jpg"
  }
}

//For minigame
const startBtn = document.getElementById("start-btn");
const lights = document.querySelectorAll(".light");
const message = document.getElementById("message");
const result = document.getElementById("result");

//For track quiz
const quizQuestionEl = document.getElementById("quiz-question");
const quizOptionsEl = document.getElementById("quiz-options");
const quizScoreEl = document.getElementById("quiz-score");
const nextQns = document.getElementById("next-question");
const quizResultsEl = document.getElementById("quiz-results");

//select all subtopic pages
function hideall(){ //function to hide all pages
    for(let onepage of allpages){ //go through all subtopic pages
        onepage.classList.remove("showing");
        onepage.style.display="none"; //hide it
    }
}

function show(pgno){ //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage=document.querySelector("#page"+pgno);
    onepage.style.display="block"; //show the page
    setTimeout(() => onepage.classList.add("showing"), 10);
}

function closeMenuIfMobile(){
    if (window.innerWidth <= 800)
    {
        menuItemsList.classList.remove("menuShow");
        hamBtn.innerHTML = "Open Menu";
    }
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
    closeMenuIfMobile();
});
page2btn.addEventListener("click", function () {
    show(2);
    closeMenuIfMobile();
});
page3btn.addEventListener("click", function () {
    show(3);
    closeMenuIfMobile();
});
hideall();

var hamBtn = document.getElementById("hamIcon");
var menuItemsList = document.getElementById("menuItemsList");

function toggleMenus(){ /*open and close menu*/
    //if menuItemsList dont have the class "menuShow", add it, else remove it
    menuItemsList.classList.toggle("menuShow");
    //if menu is showing (has the class “menuShow”)
    if(menuItemsList.classList.contains("menuShow")){
        hamBtn.innerHTML="Close Menu"; //change button text to chose menu
    }
    else{ //if menu NOT showing
        hamBtn.innerHTML="Open Menu"; //change button text open menu
    }
}

hamBtn.addEventListener("click", toggleMenus);

// When header title is clicked, show main page
headerTitle.addEventListener("click", () => show(0));

// Show Main Page on first load
show(0);

const btnFS = document.querySelector(".btnFS");

btnFS.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
  if (!document.fullscreenElement &&    // Standard
      !document.webkitFullscreenElement && 
      !document.mozFullScreenElement && 
      !document.msFullscreenElement) {
    // Enter fullscreen
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen(); // Firefox
    } else if (docElm.webkitRequestFullscreen) {
      docElm.webkitRequestFullscreen(); // Chrome, Safari, Opera
    } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen(); // IE/Edge
    }
  } else {
    // Exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen(); // Firefox
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen(); // Chrome, Safari, Opera
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen(); // IE/Edge
    }
  }
}

// Current index of the visible slide and set at the first slide
let currentIndex = 0;

// Function to update carousel position and content
function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width; // Get width of a slide
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`; // Shift carousel to show current slide

    // Fade out content for smooth transition
    nameElement.classList.add("fade-out");
    descElement.classList.add("fade-out");
    statsElement.classList.add("fade-out");

    // Set content of the text after fade out
    setTimeout(() => {
        const currentSlide = slideData[currentIndex];

        // Update text fields with new slide data
        nameElement.textContent = currentSlide.name;
        descElement.textContent = currentSlide.description;

        // Clear and update stats section
        statsElement.innerHTML = "";
        for (const key in currentSlide.stats) {
            const p = document.createElement("p"); // Create a paragraph for each stat
            p.textContent = `${key}: ${currentSlide.stats[key]}`; // Format and assign text
            statsElement.appendChild(p); // Add it to statsElement
        }

        // Fade in the new update content
        nameElement.classList.remove("fade-out");
        descElement.classList.remove("fade-out");
        statsElement.classList.remove("fade-out");
    }, 300); // Delay matches the fade-out duration
}

// Event listener for the Next button
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length; // Move to next slide (wrap around at the end)
    updateCarousel(); // Refresh carousel view
})

// Event listener for the Previous button
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Move to previous slide (wrap around)
    updateCarousel();
})

// Update carousel layout if window is resized
window.addEventListener('resize', updateCarousel);

// Initial set-up for the carousel
updateCarousel();

// For team info panel transition and content display
teamButtons.forEach(button => {
  // Event listener for each team button
  button.addEventListener("click", () => {
    const key = button.dataset.team; // Get the team identifier from data attribute
    const team = teamData[key]; // Look up the corresponding team data

    if (team) {
      // Trigger fade-out animation for both the info box and container
      infoBox.classList.add("fade-out");
      teamInfoContainer.classList.add("fade-out");

      // Set content of the text after fade out
      setTimeout(() => {
        infoBox.innerHTML = `
          <div class="team-name">
            <h3>${team.name}</h3>
          </div>
          
          <div class="team-drivers">
            <h4>Drivers</h4>
            <p>${team.drivers.join(", ")}</p>
          </div>

          <div class="team-description">
            <p>${team.intro}</p>
          </div>

          <div class="team-stats">
            <h4>Team Stats</h4>
            <p><strong>Joined:</strong> ${team.yearJoined}</p>
            <p><strong>Championships:</strong> ${team.championships}</p>
            <p><strong>Wins:</strong> ${team.wins}</p>
            <p><strong>Podiums:</strong> ${team.podiums}</p>
          </div>
        `;

        // Update background image for the team info container
        teamInfoContainer.style.backgroundImage = `url('${team.bgImage}')`;

        // Fade-in the updated content
        infoBox.classList.remove("fade-out");
        teamInfoContainer.classList.remove("fade-out");
      }, 300); // Wait 300ms to match the fade-out animation duration
    }
  });
});

// Create a new Intersection Observer to trigger animations when elements come into view
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            // When the observed element is at least 50% visible in the viewport:
            car.classList.add('show'); // Trigger F1 car animation
            pgTxt.forEach(txt => txt.classList.add('show')); // Trigger animations for each text element
            observer.unobserve(entry.target); // Stop observing this element to prevent repeated animations
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the element is visible

// Set the observer for the main page
observer.observe(document.querySelector('#page0'));

// Create a new Intersection Observer to trigger animations when elements come into view
const ruleObserver = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    if(entry.isIntersecting) {
      // When the observed element is at least 25% visible in the viewport:
      ruleTxt.forEach(txt => txt.classList.add('show')); // Trigger animation for each text element
      rulePics.forEach(pic => pic.classList.add('show')); // Trigger animation for each picture
      observer.unobserve(entry.target); // Stop observing this element to prevent repeated animations
    }
  })
}, { threshold: 0.25}); // Trigger when 25% of the element is visible

// Set the observer for page 3
ruleObserver.observe(document.querySelector('#page3'));

// Add click event to the V10 engine image
document.getElementById("v10-image").addEventListener("click", () => {
  const sound = document.getElementById("v10-sound"); // Get the corresponding audio element (V10 audio)

  // If the sound is already playing, stop and reset it
  if(!sound.paused){
    sound.pause(); // Pause the sound
    sound.currentTime = 0; // Rewind to the beginning
  }
  else {
    sound.play(); // Otherwise, play the sound
  }
});

// Add click event to the V6 engine image
document.getElementById("v6-image").addEventListener("click", () => {
  const sound = document.getElementById("v6-sound"); // Get the V6 Hybrid audio element

  // If the sound is already playing, stop and reset it
  if(!sound.paused){
    sound.pause(); // Pause the sound
    sound.currentTime = 0; // Rewind to the beginning
  }
  else {
    sound.play(); // Otherwise, play the sound
  }
})

// For the lights out minigame

// Game state variables
let startTime, reacted, timeout, falseStart = false;

// Reset the game state to initial conditions
function resetGame() {
  lights.forEach(light => {
    light.classList.remove("on");
    light.classList.remove("off");
    light.classList.add("red");
  });
  message.textContent = "Wait for the lights to go out...";
  result.textContent = "";
  falseStart = false;
  reacted = false;
}

function startGame() {
  resetGame(); // Prepare the initial game visuals
  startBtn.disabled = true; // Disable the button to prevent multiple presses

  // Turn on the lights one by one with a 400ms delay between each
  lights.forEach((light, index) => {
    setTimeout(() => light.classList.add("on"), index * 400);
  });

  // Wait until all lights are on, then apply a random delay before lights go out
  const delay = Math.floor(Math.random() * 2000) + 2000;

  // Set a timeout to turn the lights off and signal the user to react
  timeout = setTimeout(() => {
    if (reacted) return; // Prevent lights out if the user already reacted early

    // Lights go out — user must now react
    lights.forEach(light =>{
      light.classList.remove("on");
      light.classList.add("off");
    });

    message.textContent = "GO!";
    startTime = Date.now(); // Start the reaction timer
  }, 5 * 400 + delay); // Wait until all lights are on (5 x 400ms) + random delay
}

// Handles the user's reaction (any key press)
function registerReaction() {
  if (startTime) {
    // If the user reacts after "GO!"
    if (!reacted && !falseStart) {
      const reactionTime = Date.now() - startTime; // Calculate reaction time
      result.textContent = `Your reaction time is ${reactionTime} ms`;
      reacted = true;
      startBtn.disabled = false; // Re-enable the start button
    }
  }
  else {
    // If user presses a key before the lights go out (false start)
    clearTimeout(timeout); // Cancel the "GO!" trigger
    message.textContent = "False start! Wait for lights!";
    falseStart =  true;
    result.textContent = "";
    startBtn.disabled = false;
  }
}

startBtn.addEventListener("click", startGame);
document.addEventListener("keydown", registerReaction);

// For the track quiz

// Game state variables
let currentAnswer = null; // Stores the correct answer for current question
let score = 0; // User's score
let answered = false; // Flag to prevent multiple answers per question

// Pick a random track object from the slideData array
function getRandomTrack() {
  return slideData[Math.floor(Math.random() * slideData.length)];
}

// Generates a new quiz question with options
function generateQuizQuestion() {
  nextQns.style.display = "none"; // Hide next question button
  quizOptionsEl.innerHTML = ""; // Clear previous answer buttons
  answered = false; // Reset answered flag
  quizResultsEl.textContent = "";

  const track = getRandomTrack(); // Choose a random track
  const keys = Object.keys(track.stats); // Get all stat keys (e.g., laps, length)
  const factKey = keys[Math.floor(Math.random() * keys.length)]; // Random stat to ask about
  const correctAnswer = track.stats[factKey]; // Correct value for that stat
  currentAnswer = correctAnswer; // Store for validation

  // Format and display the question
  quizQuestionEl.textContent = `What is the ${factKey.replace(/([A-Z])/g, ' $1').toLowerCase()} of ${track.name}?`;

  // Generate answer choices (1 correct + 3 unique incorrect options)
  const options = [correctAnswer];
  while (options.length < 4) {
    const distractor = getRandomTrack().stats[factKey];
    if (distractor && !options.includes(distractor)) {
      options.push(distractor);
    }
  }

  // Shuffle the options for randomness
  shuffleArray(options);

  // Create a button for each option
  options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;

    // Style the buttons
    btn.style.backgroundColor = "darkkhaki"; // Yellow buttons by default
    btn.style.padding = "10px";
    btn.style.margin = "5px";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";
    btn.style.cursor = "pointer";

    // Handle answer checking when this option is clicked
    btn.addEventListener("click", () => checkAnswer(option, btn));
    quizOptionsEl.appendChild(btn);
  });
}

// Validates the selected answer
function checkAnswer(selected, clickedBtn) {
  if (answered) return; // Prevent multiple answers
  answered = true;

  const buttons = quizOptionsEl.querySelectorAll("button");

  // Highlight the correct answer in green
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === currentAnswer) {
      btn.style.backgroundColor = "green"; // Correct answer
      btn.style.color = "white";
    }
  });

  if (selected === currentAnswer) {
    score += 100;
    clickedBtn.style.backgroundColor = "green";
    clickedBtn.style.color = "white";
    quizResultsEl.textContent = "Correct!";1
  } else {
    clickedBtn.style.backgroundColor = "red";
    clickedBtn.style.color = "white";
    quizResultsEl.textContent =  `Wrong! The correct answer is ${currentAnswer}`;
  }

  nextQns.style.display = "inline-block"; // Show "Next Question" button
  quizScoreEl.textContent =  `Score: ${score}`; // Update score display
}

// Utility function to shuffle an array in-place (Fisher-Yates shuffle)
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Event listener for the "Next Question" button
nextQns.addEventListener("click", generateQuizQuestion);

// Start the quiz
generateQuizQuestion();
