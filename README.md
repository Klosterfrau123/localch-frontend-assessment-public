# Frontend Engineer Home Assignment

## Setup

- This template lays out a basic structure for a NextJS app with Storybook (in the same repository)
  - Using NextJS v16 / React v19
  - Using yarn v1
  - Using node v22+
- To run the NextJS app:
  ```bash
  yarn dev
  ```
- To run the storybook:

  ```bash
  yarn storybook
  ```

  - You need to point the storybook to the correct directory in which you want to create the stories [here](.storybook/main.ts)

## Assignment

**Timebox: Max. 4 hours**

---

### **1\. Objective**

Implement a small set of UI components and a detail view using business-place data from a public JSON endpoint.

We want to understand your approach to **architecture, UX quality, accessibility, component design, and design-system
thinking.**

---

### **2\. Data Source**

Data for a place can be requested at:

`https://web.staticlocal.ch/coding-session-rest-api/{place_id}`

Example place IDs:

- `GXvPAor1ifNfpF0U5PTG0w`

- `ohGSnJtMIC5nPfYRi_HTAg`

Use the data as you see fit.

---

### **3\. Deliverables**

#### **A) Place Card**

A reusable preview component displaying the most relevant business information.

---

#### **B) Place Details View**

A full-page view displaying:

- name

- address

- opening hours (grouped by identical hours)

- rating summary

- a “Write a review” form (no persistence required)

---

#### **C) Storybook Documentation**

Provide Storybook entries for the Place Card and at least one additional component.

---

### **4\. Requirements**

- Use this provided template project

- Component structure aligned with modern design-system practices

- Responsive implementation

- Semantic HTML and accessibility considerations

- Predictable behaviour across different data and network states

Use your own judgment for the component architecture, abstractions, naming, and design conventions.

---

### **5\. Submission**

Please provide:

- link to your repository

---

### **6\. Next Steps**

In the follow-up session, we will extend or modify your solution together and discuss your architectural and UX
decisions.
