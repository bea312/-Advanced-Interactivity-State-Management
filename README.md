

# Jane Bloglife - Interactive Fashion Blog

A responsive blog template developed using **HTML5**, **Tailwind CSS**, and **Vanilla JavaScript**. This project focuses on DOM manipulation, real-time data filtering, and interactive user interface components.

## Technical Features

### Dynamic Search and Navigation

* **Real-time Filter**: Implemented a search bar that monitors user input. Using the `input` event listener and `innerText.includes()`, the application filters and displays matching blog posts instantly.
* **Smooth Scrolling**: Navigation links are configured with `addEventListener` to provide smooth transitions to different page sections, enhancing the single-page application feel.

### Engagement Score Logic

* **Global State Management**: Uses a JavaScript variable to track a "Score" across the entire session.
* **Interactive Feedback**: Every "Like" action triggers an `updateScore()` function that modifies the DOM in real-time.
* **Conditional Styling**: Includes logic to monitor the score value; once the counter reaches 10, the element’s style is programmatically changed to a gold color to reward user interaction.


## Project Architecture

### File Structure

* **index.html**: Contains the semantic layout and Tailwind CSS utility classes for responsive design.
* **script.js**: Contains the functional logic for the search engine, score tracking, modal toggles, and tag filtering.

### Responsive Design

The layout utilizes a mobile-first approach. The sidebar stacks vertically on mobile devices and aligns to a two-column grid on desktop screens (using `lg:flex-row`). Components like the Subscribe Modal are centered using Flexbox to ensure accessibility across all screen sizes.

## How to Use

1. Download the project files.
2. Open `index.html` in a web browser.
3. Use the search bar in the sidebar to find specific topics.
4. Interact with the "Like" buttons to see the Engagement Score update.
5. Click tags in the Tag Cloud to filter articles by category.

## Technologies Used

* HTML5
* Tailwind CSS (via CDN)
*  JavaScript 

Name of dtudent 
m.Beatrice




