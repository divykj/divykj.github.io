import { CRISP_WEBSITE_ID } from "constants/crisp";

export const initializeCrisp = () => {
  window.$crisp = [
    [
      "on",
      "session:loaded",
      () =>
        Array.from(document.querySelectorAll(".cc-unoo")).forEach((button) =>
          button.remove()
        ),
    ],
  ];
  window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

  (function () {
    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = 1;
    document.getElementsByTagName("head")[0].appendChild(script);
  })();
};

export const toggleCrispChat = () => {
  window.$crisp.push(["do", "chat:toggle"]);
};
