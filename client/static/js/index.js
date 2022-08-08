import Main from "./views/Main.js";
import MyTaraes from "./views/taraes/MyTaraes.js";
import Tarae from "./views/taraes/Tarae.js";
import AddTarae from "./views/taraes/Add.js";

import ViewKakaoMap from "./viewMap.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

  // console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)));

  return Object.fromEntries(keys.map((key, i) => {
    return [key, values[i]];
  }));
}

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}

const router = async () => {
  const routes = [
    { path: "/", view: Main },
    { path: "/taraes", view: MyTaraes },
    { path: "/taraes/:id", view: Tarae },
    { path: "/add", view: AddTarae },
    // { path: "/map", view: () => console.log("타래맵") },
    // { path: "/mypage", view: () => console.log("마이페이지") },

  ];

  const potentialMatches = routes.map(route => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path))
    };
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

  if(!match) {
    match = {
      route: routes[0],
      result: [location.pathname]
    }
  }

  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();

  window.scrollTo(0, 0);

  if(match.result == "/add") {
    ViewKakaoMap();
  }

}

window.addEventListener("popstate", router);


document.addEventListener("DOMContentLoaded", () => {

  document.body.addEventListener("click", e => {

    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    } else if(e.target.closest('a').matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.closest('a').href);
    }


  });

  router();

});