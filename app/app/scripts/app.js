  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
pth=require("path");
require('app-module-path').addPath(process.cwd());
require('app-module-path').addPath(pth.join(process.cwd(),"src"));
require("colors");
//require('nw.gui').Window.get().showDevTools();


  // Sets app default base URL
  app.baseUrl = '/';
  if (window.location.port === '') {  // if production
    // Uncomment app.baseURL below and
    // set app.baseURL to '/your-pathname/' if running from folder in production
    // app.baseUrl = '/polymer-starter-kit/';
  }

  app.displayInstalledToast = function() {
    // Check to make sure caching is actually enabled—it won't be in the dev environment.
    if (!Polymer.dom(document).querySelector('platinum-sw-cache').disabled) {
      Polymer.dom(document).querySelector('#caching-complete').show();
    }
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
    /*["close","maxi","mini"].map(function(f) {
      app[f]=function() {
        app.$.wcc[f]();
      };
    });*/
    app.tabit();
  });
  function frameres() {
    var wh=document.body.scrollHeight-112;
    document.querySelectorAll("iframe").map(function(e) {
      e.style.height=wh+"px";
    });
  }

  app.tabs=[{src:"https://google.com",id:0,name:"Google"},{src:"http://ubuntu.com",id:1,name:"Ubuntu"}];
  app.stab=0;
  app.tabit=function() {
    app.stab=app.$.tabss.selected;
    app.url=app.tabs[app.stab].url;
    frameres();
  };
  app.tabclose=function(e1) {
    var tabid=e1.toElement.parentElement.parentElement.parentElement.parentElement.dataHost.item.id;
    app.tabs[tabid]=null;
    app.set("tabs."+tabid,null);
  };

  // Scroll page to top and expand header
  app.scrollPageToTop = function() {
    app.$.headerPanelMain.scrollToTop(true);
  };

  app.closeDrawer = function() {
    app.$.paperDrawerPanel.closeDrawer();
  };
