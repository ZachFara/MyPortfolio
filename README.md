# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# TODO
- [ ] Fix the images of myself
    - [ ] Make sure that the image no longer has an on-hover animation
    - [ ] Make sure that the image has it's shadow the whole time
- [ ] Ensure that there isn't any tracked items that shouldn't be
- [x] Make sure some of the mobile size issues are fixed
    - [x] Make sure that the image always covers my face and falls in a logical location
    - [x] Ensure content doesn't jump when sidebar opens/closes
    - [x] Maintain consistent profile picture formatting across screen sizes
    - [x] Fix sidebar background color consistency across screen sizes
- [ ] Create new hamburger menu from scratch
- [ ] Create a new, clean hamburger menu from scratch
    - [x] Remove all existing complex toggle button CSS and logic
    - [x] Hide original template's automatic hamburger menu
    - [x] Create new HamburgerMenu component with clean 3-line design
    - [x] Add smooth animations (hamburger ↔ X transformation)
    - [x] Implement click-outside-to-close functionality
    - [x] Add responsive positioning that moves with sidebar
    - [x] Style to match reference image with grey background