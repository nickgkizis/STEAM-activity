function goToPage2() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
  document.getElementById("page3").classList.add("hidden");
}

function goToPage1() {
  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page1").classList.remove("hidden");
  document.getElementById("page3").classList.add("hidden");
}

function goToPage3() {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page3").classList.remove("hidden");
}


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
