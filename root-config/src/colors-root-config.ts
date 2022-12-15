import { registerApplication, start, LifeCycles } from "single-spa";
import config from "./config.json";

config.applications.forEach((item) => {
  registerApplication({
    name: item.name,
    app: () => System.import<LifeCycles>(item.package),
    activeWhen: Array.isArray(item.activeWhen)
      ? item.activeWhen
      : (location) =>
          item.activeWhen === true
            ? true
            : location.pathname === item.activeWhen,
  });
});

start({ urlRerouteOnly: true });
