let loadScript = function (url: string) {
  let script = document.createElement('script');
  script.src = url;
  script.type = 'text/javascript';
  document.getElementsByTagName('HEAD')[0].appendChild(script);
};

loadScript('http://localhost:8081/remoteEntry.js');
loadScript('http://localhost:8082/remoteEntry.js');

import('./bootstrap').catch((err) => console.error(err));
