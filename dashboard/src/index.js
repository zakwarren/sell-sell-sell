import("./bootstrap").then(({ mount }) => {
  if (process.env.NODE_ENV === "development") {
    mount(document.querySelector("#_dashboard-dev-root"));
  }
});
