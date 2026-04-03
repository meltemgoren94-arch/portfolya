/// <reference types="vite/client" />

// Declare JSON imports with ?url suffix
declare module '*.json?url' {
  const src: string;
  export default src;
}

// Static asset imports
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}
