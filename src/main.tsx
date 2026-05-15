
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { StatsigWrapper } from "./components/StatsigWrapper.tsx";
import "./index.css";
import "./custom.css";
import "./styles/theme.css";

createRoot(document.getElementById("root")!).render(
  <StatsigWrapper>
    <App />
  </StatsigWrapper>
);
