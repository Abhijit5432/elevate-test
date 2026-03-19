# Elevate - Job Portal & Preparation Hub

Elevate is a premium, beautifully designed Single Page Application (SPA) built using pure Vanilla HTML, CSS, and JavaScript. It serves as an ultimate destination for tech professionals to discover high-impact jobs, master interview preparation, and conquer dynamic DSA problem sets.

## Features

- **Premium Aesthetics**: A stunning UI utilizing glassmorphism, dynamic gradients, sub-pixel animations, and complete Light/Dark mode toggling.
- **Client-Side Routing**: Custom hash-based Vanilla router for seamless, instantaneous navigation without page reloads.
- **Authentication UI Flow**: A sleek, responsive modal overlay for Sign Up/Log In featuring dynamic visual state transitions and mock profiles.
- **Realistic Job Board**: A highly-detailed data grid mirroring premium LinkedIn tier-1 postings with precise skill tags and expected salary bandwidths.
- **Curated Preparation Hub**: Real, in-depth study modules covering Quantitative Aptitude, Technical Core (OS/DBMS), and the Behavioral HR STAR Method.
- **Definitive DSA Tracker**: A structured tracker mirroring the "Top 150 FAANG Interview Questions", linking directly to active LeetCode problems spanning DP, Trees, Graphs, Pointers, and more.

## Tech Stack

- **HTML5** for semantic structuring.
- **Vanilla CSS3** for all premium styling (no Tailwind or external CSS frameworks used).
- **Vanilla Modern JavaScript (ES6+)** for state, mock data arrays, routing, and DOM manipulation.

## File Structure

- `index.html`: The main shell layout and entry point containing core UI hooks and routing outlet.
- `index.css`: The comprehensive design system containing all CSS custom variables, responsive grids, dark/light modes, and animations.
- `main.js`: Contains all application logic, mock data structures, auth states, and DOM rendering functions.

## Getting Started

Because Elevate is a strictly Vanilla application engineered to bypass CORS policies without a backend, testing it is incredibly straightforward:

1. Clone or download the repository.
2. Navigate to the project directory.
3. Simply **double-click the `index.html` file** to instantly open and run the fully functional application natively in your web browser!

That's it! No `npm install`, databases, or local servers required.

## Usage

- Click the **Log In** button in the navbar to test the mock Authentication interactions.
- Click the **Sun/Moon** icon in the navbar to immediately toggle the application's appearance between Light and Dark mode.
- Navigate to the **DSA Tracker**, and click the `Solve` button on any row to instantly jump to its actual LeetCode problem.
