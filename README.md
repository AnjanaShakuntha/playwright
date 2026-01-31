IT3040 – Assignment 01
-- Singlish to Sinhala Converter – Test Automation (Playwright)
-- Assignment Overview
This assignment evaluates the ability to *test a real‑world system, design an **automation testing strategy, and **analyze weaknesses* in a structured manner.
*Option 1 – Sinhala Language Based Testing*
The system under test converts *Singlish (Romanized Sinhala)* input into *Sinhala Unicode* output. The focus of this assignment is:
* Accuracy of *Singlish → Sinhala conversion*
* Stability and usability of the *user interface* under different input conditions
*Out of Scope*:
* Backend APIs
* Performance testing
* Security testing
-- 🛠 Technologies Used
* *Node.js*
* *Playwright* (UI automation)
* *JavaScript*
* *Git & GitHub* (version control)
Framework: Playwright (Node.js)

Language: JavaScript

Test Runner: Playwright Test

│
├── node_modules/  Project dependencies
│
├── playwright-report/  HTML test reports
│ ├── data/
│ └── index.html
│
├── test-results/  Playwright execution artifacts
│
├── tests/
│ └── assignment.spec.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md


-- Test Coverage Summary
--  Positive Test Cases (24)
These verify that *valid Singlish input* is correctly converted into *Sinhala output*.
| Category  | Number of Test Cases |
|  | -- |
| Small     | 8                    |
| Medium    | 8                    |
| Large     | 8                    |
| *Total* | *24*               |


--  Negative Test Cases (11)
These validate system behavior for *invalid, incomplete, or unexpected inputs*.
| Category  | Number of Test Cases |
|  | -- |
| Small     | 4                    |
| Medium    | 3                    |
| Large     | 3                   |
| *Total* | *10*               |
Examples:
* Empty input
* Mixed English and Sinhala
* Random characters / symbols
* Unsupported Singlish patterns


📋 Prerequisites
Ensure you have Node.js installed on your system.
--  How to Run the Project
-- 1️ Clone the Repository
git clone- https://github.com/AnjanaShakuntha/playwright 
cd IT3040_asssigmnet01
-- 2️ Install Dependencies
npm install
-- 3️ Install Playwright Browsers
npx playwright install
-- 4️ Run All Test Cases
npx playwright test
-- 5️ Run Tests with UI (Optional)
npx playwright test --ui
-- 6️ View HTML Test Report
npx playwright show-report

--  Automation Strategy
* Tests are organized based on *input size and complexity*
* Each test validates:
  * User input
  * Converted Sinhala output
  * UI stability
* Assertions compare *expected Sinhala Unicode output* with actual output
--  Limitations Identified
* Some complex Singlish spellings are not consistently converted
* No suggestion or error message for invalid inputs
* Conversion accuracy depends heavily on predefined mappings
-- Conclusion
This project successfully demonstrates *UI automation testing* for a Sinhala language–based system using *Playwright. The test cases validate both **correct behavior* and *error handling*, providing a structured evaluation of system accuracy and usability.
Author

This README is written to meet academic submission standards.
