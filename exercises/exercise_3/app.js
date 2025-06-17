// --- Part 1: Setting Up the Student's Profile ---

// 1. Mastering Variables
const studentName = 'Emily Davis';
let studentId = 2023001;
const isCurrentlyEnrolled = true;

// 2. Arrays Introduction & JavaScript Objects (gradesRecord)
let gradesRecord = []; // This will store individual subject grades as objects

// 3. JavaScript Objects (studentProfile)
const studentProfile = {
  fullName: 'Emily Davis',
  major: 'Computer Science',
  currentYear: 1,
  hasScholarship: false, // Initially false for this example

  // Object Method: addGrade
  addGrade: function (subject, score) {
    if (score < 0 || score > 100) {
      console.log('Error: Score must be between 0 and 100.');
      return;
    }
    // Add an object { subject: subject, score: score } to the global gradesRecord array.
    gradesRecord.push({ subject: subject, score: score });
    // Print a confirmation message
    console.log('Added grade for ' + subject + ': ' + score + '.');
  },

  // Object Method: updateMajor
  updateMajor: function (newMajor) {
    this.major = newMajor;
    console.log(this.fullName + "'s major updated to " + this.major + '.');
  },

  // Object Method: toggleScholarship
  toggleScholarship: function (status) {
    this.hasScholarship = status;
    if (status) {
      console.log(this.fullName + ' now has an active scholarship.');
    } else {
      console.log(this.fullName + "'s scholarship is now inactive.");
    }
  },
};

console.log('--- Student Grade Tracker Setup ---');
console.log('Student Name:', studentName);
console.log('Student ID:', studentId);
console.log('Currently Enrolled:', isCurrentlyEnrolled);
console.log('Grades Record (initially empty):', gradesRecord);
console.log('Student Profile:', studentProfile);

// --- Part 2: Recording Grades and Analyzing Performance ---

console.log('\n--- Recording Grades ---');

// Call studentProfile.addGrade() multiple times
studentProfile.addGrade('Math', 85);
studentProfile.addGrade('Science', 72);
studentProfile.addGrade('English', 91);
studentProfile.addGrade('History', 68);
studentProfile.addGrade('Art', 95);
studentProfile.addGrade('Physics', 55); // A lower score to test conditions

console.log('\nUpdated Grades Record:', gradesRecord);

console.log('\n--- Calculating Average Score ---');

// 2. For Loop & Working with Numbers: Calculate totalScore
let totalScore = 0;
for (let i = 0; i < gradesRecord.length; i++) {
  const gradeEntry = gradesRecord[i];
  totalScore = totalScore + gradeEntry.score; // Or totalScore += gradeEntry.score;
}
console.log('Total Score:', totalScore);

// 3. Functions Basics (Function Declaration): calculateAverageScore
function calculateAverageScore() {
  if (gradesRecord.length === 0) {
    return 0;
  }
  const average = totalScore / gradesRecord.length;
  return average;
}

let studentAverage = calculateAverageScore();
console.log('Student Average Score:', studentAverage.toFixed(2)); // .toFixed(2) for 2 decimal places

console.log('\n--- Overall Passing Status ---');

// 4. Grasping Booleans & Comparison Operators: isOverallPassing
const passingThreshold = 70;
let isOverallPassing = studentAverage >= passingThreshold;
console.log(
  'Is Overall Passing (average >= ' +
    passingThreshold +
    ')? ' +
    isOverallPassing
);

// Initializing this for later use in the While Loop
let hasPassedAllSubjects = true;

console.log('\n--- Student Status Message ---');

// 5. Logical Operations & Conditional Statements: studentStatusMessage
let studentStatusMessage = '';

// Temporarily set hasScholarship to true for testing this branch
// studentProfile.hasScholarship = true;

if (isOverallPassing && studentProfile.hasScholarship) {
  studentStatusMessage =
    'Excellent progress! Scholar student maintaining good grades.';
} else if (isOverallPassing) {
  studentStatusMessage = 'Good progress! Keep up the hard work.';
} else if (isCurrentlyEnrolled && studentAverage < 60) {
  studentStatusMessage =
    'Warning: Performance significantly below expectations. Immediate review needed.';
} else {
  studentStatusMessage =
    'Review required. Please check individual subject scores.';
}
console.log('Student Status Message:', studentStatusMessage);

console.log('\n--- Type Conversion Examples ---');

// 6. Type Conversion (Implicit/Explicit)
const studentIdText = String(studentId); // Explicit conversion Number to String
console.log(
  'Explicit: studentId (' +
    typeof studentId +
    ') to studentIdText (' +
    typeof studentIdText +
    '): "' +
    studentIdText +
    '"'
);

// Implicit conversion: Number to String when concatenating
console.log(
  'Implicit: "Student ID: " + studentId = "Student ID: ' + studentId + '"'
);

// --- Part 3: Reporting and Interactive Checks ---

console.log('\n--- Letter Grade Assessment ---');

// 1. Switch Statements: gradeLetter
let gradeLetter;
if (studentAverage >= 90) {
  gradeLetter = 'A';
} else if (studentAverage >= 80) {
  gradeLetter = 'B';
} else if (studentAverage >= 70) {
  gradeLetter = 'C';
} else if (studentAverage >= 60) {
  gradeLetter = 'D';
} else {
  gradeLetter = 'F';
}

console.log("Student's Overall Grade Letter: " + gradeLetter);

switch (gradeLetter) {
  case 'A':
    console.log('Assessment: Outstanding achievement!');
    break;
  case 'B':
    console.log('Assessment: Very good performance.');
    break;
  case 'C':
    console.log('Assessment: Solid effort.');
    break;
  case 'D':
    console.log('Assessment: Needs improvement.');
    break;
  case 'F':
    console.log('Assessment: Requires immediate attention.');
    break;
  default:
    console.log('Assessment: Grade calculation error.');
}

console.log('\n--- Checking Individual Subject Pass/Fail (While Loop) ---');

// 2. While Loop: Reviewing individual low scores
let subjectIndex = 0;
// Reset hasPassedAllSubjects to true before the loop, then set to false if any subject is below passing
hasPassedAllSubjects = true;

while (subjectIndex < gradesRecord.length && hasPassedAllSubjects === true) {
  const gradeEntry = gradesRecord[subjectIndex];
  if (gradeEntry.score < passingThreshold) {
    hasPassedAllSubjects = false; // Found a failing grade
    console.log(
      '! ALERT: Failing grade (' +
        gradeEntry.score +
        ') in ' +
        gradeEntry.subject +
        '!'
    );
  }
  subjectIndex++;
}
console.log(
  'Passed all subjects above ' + passingThreshold + ': ' + hasPassedAllSubjects
);

console.log('\n--- Simulating Study Progress (Do-While Loop) ---');

// 3. Do-While Loop: Checking study progress
let studyHoursGoal = 5;
let actualStudyHours = 0;
console.log(
  'Starting study session to meet goal of ' + studyHoursGoal + ' hours...'
);

do {
  actualStudyHours++;
  console.log('Studied for ' + actualStudyHours + ' hour(s).');

  // To prevent an infinite loop in case goal is unreachable or for quick demo:
  if (actualStudyHours >= 8) {
    // Max 8 hours for this demo
    console.log('Reached maximum simulated study hours.');
    break;
  }
} while (actualStudyHours < studyHoursGoal);

if (actualStudyHours >= studyHoursGoal) {
  console.log('Study goal of ' + studyHoursGoal + ' hours met!');
} else {
  console.log(
    'Study goal not fully met. Studied ' + actualStudyHours + ' hours.'
  );
}

console.log('\n--- Updating Student Profile (Object Methods) ---');

// Calling Object Methods:
studentProfile.updateMajor('Data Science'); // Call the updateMajor method
studentProfile.toggleScholarship(true); // Call the toggleScholarship method

console.log('\n--- Generating Detailed Report (Callback Function) ---');

// 5. Callback Functions & Function Types (Function Expression / Anonymous)
function generateDetailedReport(gradesList, reportItemCallback) {
  console.log('Generating detailed report for student ID ' + studentId + '...');
  let reportCount = 0;
  for (let i = 0; i < gradesList.length; i++) {
    const gradeEntry = gradesList[i];
    // Call the provided callback for each grade entry
    reportItemCallback(gradeEntry); // 'reportItemCallback' is the callback function
    reportCount++;
  }
  console.log('Detailed report generated. Total entries: ' + reportCount);
}

// Call generateDetailedReport with an anonymous function as the callback
generateDetailedReport(gradesRecord, function (grade) {
  // This is our anonymous callback function expression
  const status = grade.score >= passingThreshold ? 'Passing' : 'Failing';
  console.log(
    '- Subject: ' +
      grade.subject +
      ', Score: ' +
      grade.score +
      ', Status: ' +
      status
  );
});

// 6. Variable Scope (Observing)
console.log('\n--- Variable Scope Check ---');

// Accessing a variable declared outside any function (global scope for this script)
console.log("Accessing 'studentName' (global scope):", studentName);

function illustrateLocalScope() {
  const reportLine = 'This is a line in the report.'; // Declared inside illustrateLocalScope
  console.log(
    "Inside illustrateLocalScope, accessing 'reportLine':",
    reportLine
  );
}
illustrateLocalScope();
