# Finzor QA Automation Framework

## Overview

This project is an end-to-end UI automation framework developed using Playwright and JavaScript for automating customer management workflows in the Finzor application.

The framework follows the Page Object Model (POM) design pattern to improve maintainability, reusability, and scalability of test scripts.

---

## Tech Stack

* Playwright
* JavaScript
* Node.js
* Page Object Model (POM)
* Allure Reporting
* Git & GitHub

---

## Framework Structure

```text
Finzor-QA-Automation
│
├── PageObjects
├── Tests
├── TestData
├── Workflows
├── Utils
├── playwright.config.js
├── package.json
├── README.md
└── TestCases.txt
```

---

## Covered Test Scenarios

### Customer Creation

* Create customer with valid details
* Validate customer creation workflow

### Draft Functionality

* Save customer as Draft
* Edit Draft customer
* Submit Draft customer

### Authorization Workflow

* Search customer in Unauthorized Inbox
* Authorize customer record
* Verify customer in Authorized tab

### Revision & Rejection Workflow

* Request Revision for customer
* Reject customer record

### Customer Update Workflow

* Edit existing customer
* Re-submit updated customer
* Re-authorize updated customer

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to project folder:

```bash
cd Finzor-QA-Automation
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/<test-file-name>
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

---

## Test Reporting

Generate Allure results:

```bash
npx playwright test
```

Generate Allure report:

```bash
allure generate ./allure-results --clean
```

Open Allure report:

```bash
allure open
```

---

## Key Features

* Page Object Model Architecture
* Reusable Components
* Workflow-Based Automation
* Dynamic Test Data Handling
* Assertions and Validations
* Allure Reporting Integration
* Git Version Control

---

## Author

Mani Maran

QA Automation Engineer | Playwright | JavaScript | API Testing
