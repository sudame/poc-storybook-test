import { createRoot } from "react-dom/client";
import { Task } from "./Task";

document.addEventListener("DOMContentLoaded", () => {
  const rootHtmlElement = document.getElementById("root");
  if (rootHtmlElement == null) {
    throw new Error("Root element not found");
  }

  createRoot(rootHtmlElement).render(<Task />);
});
