import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/about.module.css";
import aboutData from "@/data/about.json";
import experiencesData from "@/data/experiences.json";

// Technology icons with SVG
const skillsWithIcons = [
    { name: "React", icon: `<svg viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g></svg>` },
    { name: "Next.js", icon: `<svg viewBox="0 0 128 128"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" fill="currentColor"/></svg>` },
    { name: "TypeScript", icon: `<svg viewBox="0 0 128 128"><path fill="#007acc" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"/></svg>` },
    { name: "JavaScript", icon: `<svg viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/></svg>` },
    { name: "Node.js", icon: `<svg viewBox="0 0 128 128"><path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645 1.13 1.255 1.13h5.764c.354 0 .701-.272.883-.531.172-.271.472-.665.397-1.146-1.09-12.828-9.53-18.779-22.14-18.779-12.664 0-20.199 5.334-20.199 14.29 0 9.698 7.529 12.378 19.672 13.566 14.556 1.428 15.586 3.58 15.586 6.453 0 4.989-4.065 7.453-13.281 7.453z"/></svg>` },
    { name: "C#", icon: `<svg viewBox="0 0 128 128"><path fill="#68217A" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zm-53.5 70c-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8zM115 62h-3.2l-.9 4h4.1v5h-5l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6H94v-5h3.5l.9-4H94v-5h5.3l1.2-6h4.9l-1.2 6h3.8l1.2-6h4.8l-1.2 6h2.2v5zm-12.7 4h3.8l.9-4h-3.8z"/></svg>` },
    { name: "ASP.NET", icon: `<svg viewBox="0 0 128 128"><path fill="#5C2D91" d="M64.142 1.517c-34.567 0-62.622 28.055-62.622 62.622 0 34.568 28.055 62.623 62.622 62.623 34.567 0 62.621-28.055 62.621-62.623 0-34.567-28.054-62.622-62.621-62.622zm30.057 94.123H77.549V62.017L64.142 89.404 50.735 62.017v33.623H34.085V32.477h16.65l13.407 27.386 13.407-27.386h16.65z"/></svg>` },
    { name: "SQL Server", icon: `<svg viewBox="0 0 128 128"><path fill="#CC2927" d="M96.137 51.753c-7.518-.282-16.137.228-24.5 1.433v-4.186c0-.667.333-1.167 1-1.5 7.666-3.667 16-5.667 25-6l.5-.5v-6.5l-.5-.5c-12 .333-23.167 3.167-33.5 8.5v-7c0-.667.333-1.167 1-1.5 10.666-5.333 22.333-8.167 35-8.5l.5-.5v-6.5l-.5-.5c-14.667.333-28.167 3.833-40.5 10.5v-8c0-.667.333-1.167 1-1.5 13-6.667 27.333-10.167 43-10.5l.5-.5v-6.5l-.5-.5c-17.333.333-33.5 4.333-48.5 12-.333.167-.5.5-.5 1v78l.5.5c11.333-5.667 23.667-9.333 37-11 7.518-1.027 15.04-1.473 22.235-1.368.072-.019.147-.032.228-.032.089 0 .174.015.257.038.122-.008.232-.038.343-.038l.437.012V51.753z"/><path fill="#CC2927" d="M116.137 34c-.333-.167-.667-.167-1 0l-8.5 4.5-.5.5v9c0 .667.333 1.167 1 1.5l8 4 1.5-.5v-18l-.5-.5v-.5z"/><path fill="#CC2927" d="M116.137 61c-.333-.167-.667-.167-1 0l-8.5 4.5-.5.5v9c0 .667.333 1.167 1 1.5l8 4 1.5-.5V62l-.5-.5v-.5z"/><path fill="#CC2927" d="M116.137 87c-.333-.167-.667-.167-1 0l-8.5 4.5-.5.5v9c0 .667.333 1.167 1 1.5l8 4.5 1.5-.5V88l-.5-.5v-.5z"/></svg>` },
    { name: "WordPress", icon: `<svg viewBox="0 0 128 128"><path fill="#21759B" d="M64.094 126.224c34.275-.052 62.021-27.933 62.021-62.325 0-33.574-26.689-60.909-59.894-62.28a63.677 63.677 0 00-2.318-.05c-33.574 0-60.962 27.149-62.27 60.665-.022.553-.04 1.106-.04 1.666.001 34.392 27.792 62.273 62.501 62.324z"/><path fill="#FFF" d="M64.094 119.912c30.849-.054 55.813-25.127 55.813-56.104 0-30.287-24.065-54.893-53.949-56.064a55.653 55.653 0 00-2.067-.045c-30.234 0-54.903 24.467-56.06 54.639-.018.478-.026.957-.026 1.437.002 30.978 24.992 56.082 56.289 56.137z"/><path fill="#21759B" d="M17.279 63.812c0 19.097 11.193 35.676 27.406 43.474l-23.2-63.305c-2.705 6.086-4.206 12.83-4.206 19.831zM95.333 61.218c0-5.964-2.157-10.091-4.003-13.306-2.461-3.969-4.768-7.326-4.768-11.294 0-4.43 3.379-8.553 8.148-8.553.215 0 .42.027.628.039-8.636-7.856-20.154-12.679-32.865-12.679-17.004 0-31.967 8.679-40.654 21.859.727.022 1.412.037 2.012.037 3.27 0 8.336-.393 8.336-.393 1.684-.098 1.886 2.362.202 2.559 0 0-1.694.197-3.577.295l19.048 56.316 11.445-34.057-8.145-22.259c-1.684-.098-3.279-.295-3.279-.295-1.685-.098-1.487-2.656.196-2.559 0 0 5.168.393 8.238.393 3.27 0 8.337-.393 8.337-.393 1.683-.098 1.886 2.362.201 2.559 0 0-1.694.197-3.577.295l18.9 55.899 5.218-17.338c2.259-7.179 3.979-12.333 3.979-16.774z"/><path fill="#21759B" d="M64.815 67.735l-15.687 45.293c4.686 1.371 9.633 2.119 14.757 2.119 6.087 0 11.94-1.045 17.389-2.944-.141-.221-.269-.454-.373-.712zM101.957 40.205a38.96 38.96 0 01.335 5.175c0 5.104-.959 10.847-3.853 18.031l-15.476 44.44c15.064-8.71 25.194-25.016 25.194-43.748-.001-8.674-2.293-16.818-6.2-23.898z"/></svg>` },
    { name: "Shopify", icon: `<svg viewBox="0 0 128 128"><path fill="#95BF47" d="M106.6 31.4c-.1-.6-.6-1-1.1-1-.5 0-9.4-.1-9.4-.1s-6.2-6.2-6.9-6.9c-.7-.7-2-.5-2.5-.3 0 0-1.3.4-3.5 1.1-2.1-6-5.7-11.5-12.1-11.5h-.5c-1.8-2.4-4.1-3.4-6-3.4-14.9 0-22 18.6-24.2 28.1-5.8 1.8-9.9 3.1-10.4 3.2-3.2 1-3.3 1.1-3.7 4.2-.3 2.3-8.7 67.1-8.7 67.1l65.7 12.3 35.6-7.7s-11.2-74.3-11.3-75.1zm-27.8-5.6c-1.7.5-3.5 1.1-5.6 1.7v-1.2c0-3.7-.5-6.7-1.4-9.1 3.4.5 5.6 4.4 7 8.6zm-11.2-7.9c1 2.4 1.6 5.8 1.6 10.5v.6c-3.6 1.1-7.5 2.3-11.5 3.5 2.2-8.5 6.4-12.6 9.9-14.6zm-4.5-4.1c.6 0 1.3.2 1.9.6-4.7 2.2-9.7 7.8-11.8 19-3.2 1-6.3 1.9-9.2 2.8 2.5-8.8 8.6-22.4 19.1-22.4z"/><path fill="#5E8E3E" d="M105.5 30.4c-.5 0-9.4-.1-9.4-.1s-6.2-6.2-6.9-6.9c-.3-.3-.6-.4-.9-.4l-5 103 35.6-7.7s-11.2-74.3-11.3-75.1c-.1-.5-.6-.8-1.1-.8z"/><path fill="#fff" d="M80.3 49l-4.4 13.3s-3.9-2.1-8.6-2.1c-7 0-7.3 4.4-7.3 5.5 0 6 15.7 8.3 15.7 22.4 0 11.1-7 18.2-16.5 18.2-11.3 0-17.1-7.1-17.1-7.1l3-10s6 5.1 11 5.1c3.3 0 4.6-2.6 4.6-4.5 0-7.8-12.9-8.2-12.9-21.1 0-10.9 7.8-21.4 23.5-21.4 6 .1 9 1.7 9 1.7z"/></svg>` },
    { name: "Git", icon: `<svg viewBox="0 0 128 128"><path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"/></svg>` },
    { name: "REST APIs", icon: `<svg viewBox="0 0 128 128"><path fill="#007bff" d="M64 8C35.374 8 12 31.374 12 60c0 23.05 15.004 42.568 35.771 49.362l.226-13.163C34.148 91.233 24 76.853 24 60c0-22.091 17.909-40 40-40s40 17.909 40 40c0 16.853-10.148 31.233-24.003 36.199l.226 13.163C101.003 102.568 116 83.05 116 60c0-28.626-23.374-52-52-52z"/><path fill="#007bff" d="M64 32c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zm0 44c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16z"/><circle fill="#007bff" cx="64" cy="60" r="8"/><path fill="#007bff" d="M62 68h4v52h-4z"/></svg>` },
    { name: "HTML5", icon: `<svg viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/></svg>` },
    { name: "CSS3", icon: `<svg viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543z"/><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95z"/><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018z"/><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.633-7.012-.331-3.711zm-.047 27.994v13.831H48.792l-.277-3.108-.631-7.012-.332-3.711z"/></svg>` },
    { name: "Python", icon: `<svg viewBox="0 0 128 128"><linearGradient id="a" x1="70.252" x2="170.659" y1="1237.476" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5A9FD4"/><stop offset="1" stop-color="#306998"/></linearGradient><path fill="url(#a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/><linearGradient id="b" x1="209.474" x2="173.62" y1="1098.811" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFD43B"/><stop offset="1" stop-color="#FFE873"/></linearGradient><path fill="url(#b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/></svg>` },
    { name: "Tailwind", icon: `<svg viewBox="0 0 128 128"><path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64z"/></svg>` },
];

export default function About() {
    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>About Munees Tariq | Full-Stack Developer from Pakistan</title>
                <meta name="title" content="About Munees Tariq | Full-Stack Developer from Pakistan" />
                <meta name="description" content="Learn about Munees Tariq - BSCS student at UET Lahore graduating in 2027. Full-stack developer specializing in React, Next.js, C#, Node.js, WordPress, and SaaS development. Hire Munees Tariq for web development." />
                <meta name="keywords" content="Munees Tariq, About Munees Tariq, Munees Tariq Developer, Munees Tariq UET, Munees Tariq Portfolio, BSCS UET Lahore, Full Stack Developer Pakistan, React Developer, Next.js Developer, C# Developer, WordPress Developer, Web Developer Pakistan, moontariq" />
                <meta name="author" content="Munees Tariq" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://moon-folio.vercel.app/about" />
                <link rel="icon" href="/favicon.ico" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="profile" />
                <meta property="og:url" content="https://moon-folio.vercel.app/about" />
                <meta property="og:title" content="About Munees Tariq | Full-Stack Developer" />
                <meta property="og:description" content="BSCS student at UET Lahore, graduating 2027. Full-stack developer specializing in modern web apps, React, Next.js, and C#." />
                <meta property="og:site_name" content="Munees Tariq Portfolio" />
                <meta property="profile:first_name" content="Munees" />
                <meta property="profile:last_name" content="Tariq" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://moon-folio.vercel.app/about" />
                <meta name="twitter:title" content="About Munees Tariq | Full-Stack Developer" />
                <meta name="twitter:description" content="BSCS student at UET Lahore. Full-stack developer specializing in React, Next.js, C#, and WordPress." />

                {/* Structured Data - Person Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Munees Tariq",
                            "alternateName": "moontariq",
                            "url": "https://moon-folio.vercel.app/about",
                            "email": "moojntariq@gmail.com",
                            "jobTitle": "Full-Stack Developer",
                            "alumniOf": {
                                "@type": "CollegeOrUniversity",
                                "name": "University of Engineering and Technology, Lahore"
                            },
                            "description": "BSCS student at UET Lahore graduating in 2027. Full-stack developer specializing in modern web apps, SaaS, React, Next.js, and C#.",
                            "knowsAbout": ["React", "Next.js", "TypeScript", "JavaScript", "C#", "ASP.NET", "Node.js", "WordPress", "Shopify", "SQL Server"],
                            "sameAs": []
                        })
                    }}
                />
            </Head>

            {/* Navigation Back */}
            <nav style={{
                position: 'fixed',
                top: '20px',
                left: '20px',
                zIndex: 100
            }}>
                <Link href="/" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    background: 'var(--navbar-bg)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '50px',
                    border: '1px solid var(--navbar-border)',
                    color: 'var(--text)',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'transform 0.2s ease'
                }}>
                    ← Back to Home
                </Link>
            </nav>

            <main className={styles.about}>
                {/* Background Orbs */}
                <div className={styles.background}>
                    <div className={styles.gradientOrb}></div>
                    <div className={styles.gradientOrb}></div>
                </div>

                <div className={styles.container}>
                    {/* Hero Section */}
                    <section className={styles.heroSection}>
                        <p className={styles.greeting}>Hello, I&apos;m</p>
                        <h1 className={styles.name}>
                            <span className={styles.gradientText}>{aboutData.name}</span>
                        </h1>
                        <h2 className={styles.title}>{aboutData.title} • {aboutData.tagline}</h2>

                        <div className={styles.educationBadge}>
                            <span className={styles.icon}>🎓</span>
                            <span>
                                <strong>{aboutData.education.degree}</strong> at {aboutData.education.institution} • Class of {aboutData.education.graduationYear}
                            </span>
                        </div>
                    </section>

                    {/* Bio Section */}
                    <section className={styles.bioSection}>
                        <p className={styles.bioText}>{aboutData.bio}</p>
                    </section>

                    {/* Stats Grid */}
                    <section className={styles.statsGrid}>
                        {aboutData.stats.map((stat, index) => (
                            <div key={index} className={styles.statCard}>
                                <div className={styles.statValue}>{stat.value}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </div>
                        ))}
                    </section>

                    {/* Skills Section - Infinite Scroll */}
                    <section className={styles.skillsSection}>
                        <h2 className={styles.sectionTitle}>Technical Skills</h2>
                        <div className={styles.skillsMarquee}>
                            <div className={styles.skillsTrack}>
                                {/* First set of skills */}
                                {skillsWithIcons.map((skill, index) => (
                                    <div key={index} className={styles.skillItem}>
                                        <div className={styles.skillIcon} dangerouslySetInnerHTML={{ __html: skill.icon }} />
                                        <span className={styles.skillName}>{skill.name}</span>
                                    </div>
                                ))}
                                {/* Duplicate for seamless loop */}
                                {skillsWithIcons.map((skill, index) => (
                                    <div key={`dup-${index}`} className={styles.skillItem}>
                                        <div className={styles.skillIcon} dangerouslySetInnerHTML={{ __html: skill.icon }} />
                                        <span className={styles.skillName}>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Key Highlights */}
                    <section className={styles.highlightsSection}>
                        <h2 className={styles.sectionTitle}>Key Achievements</h2>
                        <div className={styles.highlightsGrid}>
                            {aboutData.highlights.map((highlight, index) => (
                                <div key={index} className={styles.highlightCard}>
                                    {highlight}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section className={styles.experienceSection}>
                        <h2 className={styles.sectionTitle}>Professional Experience</h2>
                        <div className={styles.experienceGrid}>
                            {experiencesData.map((exp, index) => (
                                <article key={index} className={styles.experienceCard}>
                                    <div className={styles.experienceHeader}>
                                        <h3 className={styles.experienceCompany}>{exp.company}</h3>
                                        <p className={styles.experienceRole}>{exp.role}</p>
                                        <p className={styles.experiencePeriod}>{exp.period}</p>
                                    </div>
                                    <ul className={styles.experiencePoints}>
                                        {exp.points.slice(0, 2).map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Interested in working together?</h2>
                        <a href={`mailto:${aboutData.contact.email}`} className={styles.ctaButton}>
                            Get in Touch
                        </a>
                    </section>
                </div>
            </main>
        </>
    );
}
