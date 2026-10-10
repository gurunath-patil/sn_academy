# SN Academy — React + Tailwind CSS template

Marathi is the default language. English/Marathi buttons switch all authored UI text. The browser remembers the visitor's selection. This is a static site with no backend.

## Run
Install Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Build / hosting

```sh
npm run build
npm run preview
```

Upload the contents of `dist/` to a static hosting provider. Serve over HTTP; double-clicking index.html is not supported by Vite module builds. Relative asset paths support hosting in a subfolder.

## Change your content
- `src/content.js`: academy name, contact, map query, every Marathi and English text, courses, FAQs. Keep translated arrays in corresponding order.
- `src/main.jsx`: section layouts, components and form behavior.
- `src/styles.css`: navy/gold theme, fonts and responsive styles, together with Tailwind classes in JSX.
- `public/assets/logo.jpeg`: supplied academy logo.
- `public/assets/banner.jpg`: supplied banner. Image text is fixed in the image; replace with a separate translated image if desired.

Phone and founder details were taken from your supplied banner. Location is from your document. Confirm them before launch. Faculty, course coverage, timings, results and policy sections are sample content. Replace with verified details. No invented testimonials or selection counts are presented.

## Enquiry form
The demo validates required name, phone and course fields, then creates copyable enquiry text locally. It does NOT send enquiries, store them or pretend to submit them. Phone and Maps links work. Connect a form service or backend and update privacy copy if you need actual submissions. No email/social links are displayed until real details are configured.

## Language / fonts
Authored bilingual text, not automatic machine translation. Marathi system fonts (Nirmala UI/Mangal where available) are used without external font dependencies. Images are supplied assets and are not translated. Language preference uses localStorage with a safe Marathi fallback.

## Included
Responsive menu, course enquiry selection, native FAQ accordions, phone links, map search link, accessible language buttons and enquiry text generation. Build output is included in `dist/` for convenience; rebuild after edits. Source ZIP excludes node_modules.
