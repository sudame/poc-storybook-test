import { createRoot } from "react-dom/client";

document.addEventListener("DOMContentLoaded", () => {
  const rootHtmlElement = document.getElementById("root");
  if (rootHtmlElement == null) {
    throw new Error("Root element not found");
  }

  createRoot(rootHtmlElement).render(<div>Hello world!</div>);
});
