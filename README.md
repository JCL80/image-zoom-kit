# 🖼️ Image Zoom Kit

**Image Zoom Kit** is a lightweight, flexible library for adding interactive image zoom effects to your **Next.js** projects. It includes multiple components, each offering a different style of zoom interaction, so you can choose the one that best fits your design and user experience.

> 🧪 Note: This library is early in development and has limited testing coverage. Use in production with care, and feel free to report bugs or contribute improvements.

---

## 🔍 Overview

Image Zoom Kit offers **three main components**:

### 🧲 `ImageZoom`
A magnifying-glass effect that displays a zoomed portion of the image in a separate "result" area. It uses a lens overlay that follows the mouse cursor over the image.

### 🖱️ `MouseMoveViewer`
A hover-based zoom effect where the main image fades out to reveal a background image that dynamically shifts based on mouse position.

### ⚡ `SimpleZoomer`
A simple, lightweight component that scales the image on hover using CSS transitions.

Each component uses **Next.js’s built-in `<Image>` component** for optimized, responsive image delivery and is built with modern **React + TypeScript** for a smooth developer experience.

---

## ✨ Features

- **Multiple Zoom Styles:** Choose from magnifying-glass, mouse-move background zoom, or simple hover zoom.
- **Responsive Behavior:** Components can adapt to screen size (e.g., disable effects on mobile).
- **Customizable:** Components like `ImageZoom` allow you to override default styles (e.g., lens size, result area) via props or CSS.
- **Easy Integration:** Drop the components into your Next.js project. Use our default styles or fully customize them.

---

## 📦 Installation

Install via npm:

```bash
npm install image-zoom-kit

🎮 Demo
A working example can be found live at:

🌐 https://tiendaparaguaya.com
📁 Repo: github.com/JCL80/tiendaparaguaya

🧱 Built With
Next.js

React

TypeScript

🤝 Contributing
You're more than welcome to contribute!

Fork the repository

Submit bug reports or feature suggestions

Open a pull request for improvements or fixes

Note: Tests are limited, so real-world feedback is appreciated!

📄 License
MIT License — you are free to use, modify, and distribute this library with proper attribution.


