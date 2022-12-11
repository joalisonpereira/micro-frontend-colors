import {
  registerApplication,
  start,
  LifeCycles,
  RegisterApplicationConfig,
} from "single-spa";

const apps: RegisterApplicationConfig<{}>[] = [
  {
    name: "@single-spa/welcome",
    app: () =>
      System.import<LifeCycles>(
        "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
      ),
    activeWhen: "/",
  },
  {
    name: "@colors/blue",
    app: () => System.import<LifeCycles>("@colors/blue"),
    activeWhen: "/blue",
  },
];

apps.forEach((app) => {
  registerApplication({
    ...app,
    activeWhen: (location) => location.pathname === app.activeWhen,
  });
});

start({ urlRerouteOnly: true });
