const section = document.getElementById("case-studies");
if (section) {
  const tabs = section.querySelectorAll(".case-tab");
  const details = section.querySelectorAll(".case-study-detail");
  const wrapper = section.querySelector(".case-container-wrapper");
  const mobileSelect = section.querySelector("#case-studies-select");

  const inactiveStyles = {
    pink: { bg: "bg-pink", text: "text-white" },
    blue: { bg: "bg-blue", text: "text-white" },
    coral: { bg: "bg-coral", text: "text-white" },
  };
  const activeStyles = {
    pink: { bg: "bg-pink", text: "text-white", border: "border-pink" },
    blue: { bg: "bg-blue", text: "text-white", border: "border-blue" },
    coral: { bg: "bg-coral", text: "text-white", border: "border-coral" },
  };

  function select(index) {
    section.dataset.selected = String(index);
    const activeTab = tabs[index];
    const activeAccent =
      (activeTab && activeTab.getAttribute("data-accent")) || "blue";

    tabs.forEach((tab, i) => {
      const isActive = i === index;
      const accent = tab.getAttribute("data-accent") || "blue";
      const inactive = inactiveStyles[accent];
      const active = activeStyles[accent];

      tab.classList.toggle("case-tab--active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.classList.remove(
        "bg-pink",
        "bg-coral",
        "bg-blue",
        "text-white",
        "text-dark",
        "border-blue",
        "border-pink",
        "border-coral",
        "border-dark/10"
      );

      if (isActive) {
        tab.classList.add(active.bg, active.text, active.border);
      } else {
        tab.classList.add(inactive.bg, inactive.text, "border-dark/10");
      }
    });

    if (wrapper) {
      wrapper.classList.remove(
        "border-blue",
        "border-pink",
        "border-coral",
        "bg-blue",
        "bg-pink",
        "bg-coral"
      );
      wrapper.setAttribute("data-accent", activeAccent);
      const activeStyle = activeStyles[activeAccent];
      wrapper.classList.add(activeStyle.border, activeStyle.bg);
    }

    details.forEach((panel, i) => {
      const isActive = i === index;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });

    if (mobileSelect) {
      mobileSelect.value = String(index);
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => select(index));
  });

  if (mobileSelect) {
    mobileSelect.addEventListener("change", () => {
      select(parseInt(mobileSelect.value, 10));
    });
  }

  select(0);
}
