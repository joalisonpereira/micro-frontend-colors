import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@colors/navbar",
  app: () => System.import<LifeCycles>("@colors/navbar"),
  activeWhen: () => true,
});

registerApplication({
  name: "@colors/boxes",
  app: () => System.import<LifeCycles>("@colors/boxes"),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@colors/blue",
  app: () => System.import<LifeCycles>("@colors/blue"),
  activeWhen: (location) => location.pathname === "/blue",
});

registerApplication({
  name: "@colors/gold",
  app: () => System.import<LifeCycles>("@colors/gold"),
  activeWhen: ["/gold"],
});

registerApplication({
  name: "@single-spa/welcome",
  app: () => System.import<LifeCycles>("@single-spa/welcome"),
  activeWhen: (location) => location.pathname === "/welcome",
});

start({ urlRerouteOnly: true });
