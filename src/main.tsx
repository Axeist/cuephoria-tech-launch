import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

try {
  document.title =
    "Cuephoria Tech — Technology Simplified | Cuetronix 14-Day Free Trial";
  const iconHref = "/favicon.png";
  let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.type = "image/png";
  link.href = iconHref;
  let apple = document.querySelector<HTMLLinkElement>('link[rel="apple-touch-icon"]');
  if (!apple) {
    apple = document.createElement("link");
    apple.rel = "apple-touch-icon";
    document.head.appendChild(apple);
  }
  apple.href = iconHref;
} catch {}

createRoot(document.getElementById("root")!).render(<App />);
