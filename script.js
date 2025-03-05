
    // Navigation functions for 7 pages
    function goToPage1() {
      document.getElementById("page1").classList.remove("hidden");
      document.getElementById("page2").classList.add("hidden");
      document.getElementById("page3").classList.add("hidden");
      document.getElementById("page4").classList.add("hidden");
      document.getElementById("page5").classList.add("hidden");
      document.getElementById("page6").classList.add("hidden");
      document.getElementById("page7").classList.add("hidden");
    }
    function goToPage2() {
      document.getElementById("page1").classList.add("hidden");
      document.getElementById("page2").classList.remove("hidden");
      document.getElementById("page3").classList.add("hidden");
      document.getElementById("page4").classList.add("hidden");
      document.getElementById("page5").classList.add("hidden");
      document.getElementById("page6").classList.add("hidden");
      document.getElementById("page7").classList.add("hidden");
    }
    function goToPage3() {
      document.getElementById("page1").classList.add("hidden");
      document.getElementById("page2").classList.add("hidden");
      document.getElementById("page3").classList.remove("hidden");
      document.getElementById("page4").classList.add("hidden");
      document.getElementById("page5").classList.add("hidden");
      document.getElementById("page6").classList.add("hidden");
      document.getElementById("page7").classList.add("hidden");
    }
    function goToPage4() {
      document.getElementById("page1").classList.add("hidden");
      document.getElementById("page2").classList.add("hidden");
      document.getElementById("page3").classList.add("hidden");
      document.getElementById("page4").classList.remove("hidden");
      document.getElementById("page5").classList.add("hidden");
      document.getElementById("page6").classList.add("hidden");
      document.getElementById("page7").classList.add("hidden");
    }
    function goToPage5() {
      document.getElementById("page1").classList.add("hidden");
      document.getElementById("page2").classList.add("hidden");
      document.getElementById("page3").classList.add("hidden");
      document.getElementById("page4").classList.add("hidden");
      document.getElementById("page5").classList.remove("hidden");
      document.getElementById("page6").classList.add("hidden");
      document.getElementById("page7").classList.add("hidden");
    }
    function goToPage6() {
      document.getElementById("page1").classList.add("hidden");
      document.getElementById("page2").classList.add("hidden");
      document.getElementById("page3").classList.add("hidden");
      document.getElementById("page4").classList.add("hidden");
      document.getElementById("page5").classList.add("hidden");
      document.getElementById("page6").classList.remove("hidden");
      document.getElementById("page7").classList.add("hidden");
    }
    function goToPage7() {
      document.getElementById("page1").classList.add("hidden");
      document.getElementById("page2").classList.add("hidden");
      document.getElementById("page3").classList.add("hidden");
      document.getElementById("page4").classList.add("hidden");
      document.getElementById("page5").classList.add("hidden");
      document.getElementById("page6").classList.add("hidden");
      document.getElementById("page7").classList.remove("hidden");
    }

    document.getElementById("deviceSelect")
      .addEventListener("change", function () {
        var selected = this.value;
        // Hide all instruction divs
        document.getElementById("iphoneInstructions").style.display = "none";
        document.getElementById("androidInstructions").style.display = "none";
        document.getElementById("samsungInstructions").style.display = "none";
        document.getElementById("otherAndroidInstructions").style.display =
          "none";

        // Show the selected device's instructions if a valid option is chosen
        if (selected) {
          document.getElementById(selected + "Instructions").style.display =
            "block";
        }
      });

    // New activity functions
    function addEntry() {
      const resultsInput = document.getElementById("resultsInput");
      const entryCount = resultsInput.getElementsByClassName("resultEntry").length;
      const newEntry = document.createElement("div");
      newEntry.className = "resultEntry";
      newEntry.innerHTML = '<label>Απάντηση ' + (entryCount + 1) + ':</label>' +
                      '<select class="resultSelect">' +
                      '<option value="0-1">0-1</option>' +
                      '<option value="1-2">1-2</option>' +
                      '<option value="2-3">2-3</option>' +
                      '<option value="3-4">3-4</option>' +
                      '<option value="4-5">4-5</option>' +
                      '<option value="5-6">5-6</option>' +
                      '<option value="6-7">6-7</option>' +
                      '<option value="7+">7+</option>' +
                      '</select>';
      resultsInput.appendChild(newEntry);
    }

    function generateResults() {
      const selects = document.getElementsByClassName("resultSelect");
      let values = [];
      for (let select of selects) {
        values.push(select.value);
      }
      
      // Map options to numerical midpoints
      const mapping = {
        "0-1": 0.5,
        "1-2": 1.5,
        "2-3": 2.5,
        "3-4": 3.5,
        "4-5": 4.5,
        "5-6": 5.5,
        "6-7": 6.5,
        "7+": 7.5
      };
      let numericValues = values.map(val => mapping[val]);
      numericValues.sort((a, b) => a - b);
      
      // Compute median
      let median;
      const len = numericValues.length;
      if (len % 2 === 0) {
        median = (numericValues[len/2 - 1] + numericValues[len/2]) / 2;
      } else {
        median = numericValues[Math.floor(len/2)];
      }
      
      document.getElementById("medianResult").textContent = "Ο διάμεσος χρόνος είναι: " + median + " ώρες";
      
      // Create frequency distribution for line graph
       const frequencies = {
        "0-1": 0,
        "1-2": 0,
        "2-3": 0,
        "3-4": 0,
        "4-5": 0,
        "5-6": 0,
        "6-7": 0,
        "7+": 0
      };
      for (let val of values) {
        frequencies[val]++;
      }
      
      // Build line graph using Chart.js
      const graphContainer = document.getElementById("graphContainer");
      graphContainer.innerHTML = "<canvas id='lineGraphCanvas' width='400' height='200'></canvas>";
      
      const ctx = document.getElementById('lineGraphCanvas').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: Object.keys(frequencies),
          datasets: [{
            label: 'Αριθμός Απαντήσεων',
            data: Object.values(frequencies),
            fill: false,
            borderColor: 'blue',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: { precision: 0 }
            }
          }
        }
      });
    }

    // Existing functions for updating sliders remain unchanged
    function updateScreenTime(value) {
      document.getElementById("screenHours").textContent = value;
      let screenTimePercentage = (value / 10) * 100;
      let screenBar = document.getElementById("screenTimeBar");

      screenBar.style.width = screenTimePercentage + "%";

      let messages = [
        "Τέλεια! Καθόλου χρόνος οθόνης σήμερα!",
        "Εξαιρετικά! Σχεδόν καθόλου οθόνη.",
        "Λίγος χρόνος οθόνης είναι καλός για μάθηση.",
        "Πρόσεχε! Ο χρόνος στην οθόνη αυξάνεται.",
        "Μήπως να κάνεις ένα διάλειμμα;",
        "Ήρθε η ώρα να ξεκουραστείς από την οθόνη.",
        "Προσοχή! Ξεκινά να επηρεάζει την υγεία σου.",
        "Πολύς χρόνος στην οθόνη μπορεί να είναι επιβλαβής!",
        "Είναι σημαντικό να έχεις ισορροπία!",
        "Μήπως να βγεις έξω λίγο;",
        "Πάρα πολλές ώρες! Προσπάθησε να μειώσεις τον χρόνο οθόνης.",
      ];

      let colors = [
        "green",
        "green",
        "green",
        "yellow",
        "yellow",
        "orange",
        "orange",
        "red",
        "red",
        "darkred",
        "darkred",
      ];
      screenBar.style.backgroundColor = colors[value];
      document.getElementById("screenMessage").textContent = messages[value];
    }

    function updateActivityTime(value) {
      document.getElementById("activityHours").textContent = value;
      let activityTimePercentage = (value / 10) * 100;
      let activityBar = document.getElementById("activityTimeBar");

      activityBar.style.width = activityTimePercentage + "%";

      let messages = [
        "Καμία δραστηριότητα σήμερα. Ίσως να ξεκινήσεις;",
        "Λίγη κίνηση είναι πάντα χρήσιμη!",
        "Μια μικρή δραστηριότητα βοηθάει το σώμα σου.",
        "Καλή προσπάθεια! Συνέχισε!",
        "Μπράβο! Αρχίζεις να είσαι πιο δραστήριος!",
        "Συνεχίζεις καλά! Ο αθλητισμός είναι σημαντικός.",
        "Πολύ ωραία! Διατηρείς καλή φυσική κατάσταση!",
        "Υπέροχα! Κάνεις αρκετή δραστηριότητα!",
        "Εξαιρετικά! Η υγεία σου θα σε ευχαριστήσει!",
        "Τέλεια! Η άσκηση είναι απαραίτητη για ένα υγιές σώμα!",
        "Απλά φανταστικό! Συγχαρητήρια για την αφοσίωσή σου!",
      ];

      let colors = [
        "red",
        "red",
        "orange",
        "orange",
        "yellow",
        "yellow",
        "green",
        "green",
        "darkgreen",
        "darkgreen",
        "darkgreen",
      ];
      activityBar.style.backgroundColor = colors[value];
      document.getElementById("activityMessage").textContent = messages[value];
    }
