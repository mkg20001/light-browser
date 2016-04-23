  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
pth=require("path");
require('app-module-path').addPath(process.cwd());
require('app-module-path').addPath(pth.join(process.cwd(),"src"));
require("colors");
//require('nw.gui').Window.get().showDevTools();

  app.mainurl=window.location.href;
  function gUrl(p) {
    return app.mainurl.replace("index.html",p);
  }
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
    emptyTab();
  });
  function frameres() {
    var wh=document.body.scrollHeight-112;
    app.wh=wh;
    app.set("wh",wh);
    updateTabs();
  }

  //app.tabs=[{src:"https://google.com",id:0,name:"Google"},{src:"http://ubuntu.com",id:1,name:"Ubuntu"}];
  app.tabs=[];
  function setTab(i) {
    app.$.tabss.selected=i;
    app.stab=i;
    app.url=app.tabs[app.stab].url;
  }
  function emptyTab() {
    newTab({src:gUrl("newtab.html"),name:"New Tab"});
  }
  function newTab(i) {
    updateTabs(i);
    app.callow=app.tabs.length<10;
    setTab(app.tabs.length-1);
  }
  app.newTab=emptyTab;
  app.callow=true;
  app.tabit=function() {
    setTab(app.$.tabss.selected);
    setTimeout(updateTabs,100);
  };
  frameres();
  app.urlFire=function(e) {
    updateTabs({src:this.$.urlIn.value,name:this.$.urlIn.value});
    app.$.urlIn.value="";
  };
  app.urlKey=function(e) {
    if (e.keyCode===13) {
      app.urlFire();
    } else {

    }
  };
  app.tabclose=function(e1) {
    var tabid=e1.toElement.parentElement.parentElement.parentElement.parentElement.dataHost.item.id;
    app.tabs[tabid]=null;
    app.set("tabs."+tabid,null);
    updateTabs();
  };
  //var gtest;
  /*function iload(frame) {
    console.log(frame);
    gtest=frame;
    app.url=frame.contentWindow.location.href;
    app.tabs[app.stab].src=frame.contentWindow.location.href;
  }
  function ierror(frame) {
    frame.contentWindow.location.href=gUrl("error.html");
  }*/
  function updateTabs(inp) {
    var o=[];
    var i=0;
    var wh=document.body.scrollHeight-112;
    var ok=app.tabs.filter(function(t) {
      if (t) return t;
    });
    if (inp) ok.push(inp);
    for (var p in ok) {
      var t=ok[p];
      t.id=i;
      t.wh=wh;
      i++;
      o.push(t);
    }
    app.set("tabs",o);
    for (var pp in o) {
      var tt=o[pp];
      if (tt.own) tt.own._item(tt);
      if (tt.tabown) tt.tabown._item(tt);
    }
    return o;
  }

  app.openSettings=function() {
    newTab({name:"Settings",src:gUrl("settings.html"),internal:true});
  };

  // Scroll page to top and expand header
  app.scrollPageToTop = function() {
    app.$.headerPanelMain.scrollToTop(true);
  };

  app.closeDrawer = function() {
    app.$.paperDrawerPanel.closeDrawer();
  };
