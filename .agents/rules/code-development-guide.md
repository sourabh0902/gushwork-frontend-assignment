---
trigger: always_on
---

# SYSTEM INSTRUCTION FOR AI

This file contains the highest-priority implementation rules for this project.

If any instruction in future prompts conflicts with this file,
this file overrides those instructions.

You must strictly follow all constraints defined below.

---

# Frontend Precision Implementation Challenge — Vanilla Stack

This is a frontend technical assessment.

It is NOT:
- A product build
- A redesign exercise
- A backend implementation
- A creative improvement task
- A feature expansion task

It is a precision-based UI implementation challenge using vanilla technologies.

The objective is to replicate the provided Figma design exactly
with production-grade frontend code quality.

---

# 1. Core Stack Constraints (STRICT)

Use only:

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

Strictly prohibited:

- React
- Vue
- Angular
- jQuery
- Bootstrap
- Tailwind
- UI kits
- Component libraries
- Carousel plugins
- Zoom libraries
- Animation libraries
- Prebuilt templates

Everything must be built from scratch.

---

# 2. Core Objective

Recreate the provided Figma UI exactly as shown.

Focus on:

- Pixel-accurate layout
- Typography accuracy
- Spacing precision
- Correct color usage
- Layout proportions
- Responsive behavior
- Smooth UI interactions
- Clean code structure

No deviation from the reference design is allowed.

---

# 3. Pixel Accuracy Rules (Non-Negotiable)

You must:

- Match spacing precisely.
- Match paddings and margins.
- Match border radius scale.
- Match typography hierarchy.
- Match font sizes.
- Match font weights.
- Match alignment and layout proportions.
- Match hover states.
- Match animation timing.

You must NOT:

- Redesign any section.
- Simplify layout.
- Reinterpret UI patterns.
- Add new UI ideas.
- Improve aesthetics beyond the reference.
- Remove elements shown in the design.

Implement exactly what is shown.
No more. No less.

---

# 4. Sticky Header Requirements

Functional behavior:

- Header is hidden initially.
- When user scrolls beyond first fold:
  - Header appears.
  - Positioned above navigation.
  - Smooth transition required.
- When scrolling back up:
  - Header disappears smoothly.

Technical requirements:

- Use `position: fixed`
- Use optimized scroll listener
- Avoid layout shift
- Use CSS transitions for animation
- No animation libraries

---

# 5. Image Carousel + Zoom Behavior

Carousel:

- Interactive horizontal slider.
- Smooth sliding animation.
- Fully responsive.
- No external libraries.

Zoom:

- Hover displays zoomed preview.
- Use CSS transform or background-position technique.
- Maintain correct aspect ratio.
- Smooth transition.
- No third-party zoom tools.

---

# 6. Responsiveness (Mandatory)

Must render correctly at:

- Mobile (375px)
- Desktop (1280px+)

Requirements:

- Layout stacks cleanly on mobile.
- No broken alignment.
- No unintended overflow.
- No layout shifts.
- Use Flexbox and/or Grid.
- Use proper media queries.
- Avoid fixed-width hacks.

Responsive behavior must feel intentional.

---

# 7. Accessibility Requirements

- Use semantic HTML5 elements.
- Use proper alt attributes.
- Maintain logical document structure.
- Ensure keyboard accessibility.
- Maintain visible focus states.
- Maintain sufficient color contrast.

Accessibility must not be ignored.

---

# 8. Code Quality Standards

HTML:

- Semantic structure only.
- No unnecessary wrapper divs.
- Clean indentation.

CSS:

- Organized structure.
- Avoid unnecessary specificity.
- Reusable classes where appropriate.
- No inline styles unless absolutely required.
- Maintain spacing consistency.
- Maintain radius consistency.
- Maintain typography consistency.

JavaScript:

- Modular logic.
- No global namespace pollution.
- Use DOMContentLoaded.
- Cache DOM selectors.
- Avoid redundant queries.
- Avoid unnecessary abstractions.
- No unused variables.

---

# 9. UI-Only Scope

This project must:

- Have no backend.
- Make no API calls.
- Use no database.
- Use mock/static data only.
- Implement no real authentication.

No business logic beyond UI interaction.

---

# 10. Animation Discipline

- Subtle only.
- Enterprise-level transitions.
- No dramatic motion.
- No unnecessary micro-interactions.
- Animations must support usability.
- Prefer CSS transitions over JS animation.

---

# 11. Codebase Must NOT Look AI-Generated

This is critical.

The codebase must:

- Not contain tutorial-style comments.
- Not contain verbose explanatory comments.
- Not contain unnecessary comments.
- Not include demo components.
- Not include unused utilities.
- Not include over-engineered abstractions.
- Not include placeholder lorem ipsum.
- Not include unnecessary config.
- Not include generic boilerplate patterns.
- Not over-structure small components.

Write code like an experienced frontend engineer working under time constraints.

Only write code required for the UI.

---

# 12. Cross-Browser Compatibility

Must support:

- Chrome
- Edge
- Firefox
- Safari

Avoid experimental features unless well supported.

---

# 13. Evaluation Criteria Alignment

The implementation will be evaluated based on:

- Visual Accuracy
- Sticky Header Implementation
- Carousel + Zoom Smoothness
- Responsive Integrity
- Code Cleanliness
- Separation of Concerns
- Production-Ready Structure

All implementation decisions must support these criteria.

---

# 14. Implementation Philosophy

When generating or modifying code:

- Think like a senior frontend engineer.
- Prefer clarity over cleverness.
- Do not overengineer.
- Do not underbuild.
- Avoid hacky inline fixes.
- Maintain consistency across the entire UI.

Build exactly what is shown.
Nothing extra.
Nothing missing.