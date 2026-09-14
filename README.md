# Carlos Rivas — Portfolio

A complete, single-page portfolio using React 19, Vite, Motion (`motion/react`), Three.js through React Three Fiber, Lucide and plain CSS.

## Run

Requires Node.js 22.12+ (or 20.19+) and npm.

```sh
npm install
npm run dev
npm run build
```

The development site runs at http://127.0.0.1:5173. `npm run preview` serves the production build. Deploy the contents of `dist/` to a static host.

If Windows PowerShell finds a broken globally installed npm shim, use the npm executable supplied with Node.js, for example `& 'C:/Program Files/nodejs/npm.cmd' run dev`.

## Structure

- `src/components/`: isolated, reusable portfolio sections and interactions.
- `src/styles/`: shared tokens and section styles.
- `src/components/SelectedWork.jsx`: project descriptions and GitHub links.
- `src/components/Experience.jsx`: work history.
- `src/components/Contact.jsx`: contact and social links.

## Accessibility and performance

The menu supports keyboard focus containment, Escape, focus restoration and background inertness. Links have visible focus states. Native anchor navigation preserves browser scrolling. A lazy-loaded 3D chunk keeps the main document independent of WebGL; a render boundary lets the portfolio remain readable if the sculpture fails. Mobile uses simpler geometry. Rendering pauses outside the hero and while the document is hidden. Device pixel ratio is capped at 1.5.

The operating system's reduced-motion preference disables parallax, cursor decoration, marquee animation and continuous 3D rotation. Touch devices keep their standard pointer behavior. Inter and DM Mono load from Google Fonts with system fallbacks.

Project descriptions, roles and dates follow the supplied brief. Kitchen OS is explicitly private and has no repository link. External URLs are preserved exactly as supplied; remote availability depends on repository visibility and third-party access controls.
