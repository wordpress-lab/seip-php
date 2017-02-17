function amzn_ads(t){"use strict";try{amznads.updateAds(t)}catch(e){try{console.log("amzn_ads: "+e)}catch(a){}}}function aax_write(t,e){t.write(e);t.close()}function aax_render_ad(t){if(t.passback){aax_write(document,t.html);return}var e=t.slotSize;if(!e){aax_write(document,t.html);return}var a=e.indexOf("x");var n=e.substring(0,a);var r=e.substring(a+1);var i="amznad"+Math.round(Math.random()*1e6);aax_write(document,'<iframe id="'+i+'" width="'+n+'" height="'+r+'" src="javascript:\'\'" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" bgcolor="#FFFFFF" topmargin="0" leftmargin="0" rightmargin="0" bottommargin="0"></iframe>');var o;try{o=document.getElementById(i);var s=o.contentWindow||o.contentDocument;if(s.document)s=s.document;aax_write(s,t.html)}catch(d){if(o){o.style.display="none"}}}var amzn_console=function(){"use strict";var t={};t.log=function(){};return t}();if(window.console){amzn_console=window.console}var amznads=function(t,e,a,n){"use strict";var r="https:"===e.location.protocol;t.protocol=r?"https://":"http://";t.host="aax.amazon-adsystem.com";t.dtb_svc="/e/dtb/bid";t.pb_svc="/x/getad";t.px_svc="/x/px/";t.debug_mode=t.debug_mode||false;t.MIN_TIMEOUT=0;t.DEFAULT_TIMEOUT=1e3;t.targetingKey="amznslots";t.vidKey="amzn_vid";t.tasks=t.tasks||[];t.$jQ=t.$jQ||null;t.VIEWABILITY_CUTOFF_AREA=t.VIEWABILITY_CUTOFF_AREA||.5;t.VIEWABILITY_CUTOFF_DURATION_SEC=t.VIEWABILITY_CUTOFF_DURATION_SEC||1;t.isjQueryPresent=function(){if(typeof t.$jQ==="function")return true;try{if(a.top.jQuery&&a.top.jQuery.fn.on&&a.top.jQuery.fn.scrollTop){t.$jQ=a.top.jQuery;return true}}catch(e){}return false};t.log=function(e){try{if(t.debug_mode){n.log(e)}}catch(a){}};t.log("Initiating amznads");if(!t.ads){t.ads={}}t.updateAds=function(e){t.ads=e.ads;if(e.vads){if(!t.ads){t.ads={}}var a;for(a in e.vads){if(e.vads.hasOwnProperty(a)){t.ads[a]=e.vads[a];t.amzn_vid=e.vads[a]}}}t.log("Updated ads. Executing rest of the task queue");t.doAllTasks();t.tasks.push=function(e){t.doTask(e)}};t.saveAds=function(e){t.saved_ads=e.ads;t.updateAds(e)};t.getAdForSlot=function(a,n,r){t.src_id=a;var i=i||{};var o=i.u;if(!o){o=t.getReferrerURL()}if(o&&o.indexOf("amzn_debug_mode")!==-1){t.debug_mode=true}t.log("amznads.getAdForSlot: Using url="+o);var s="src="+t.src_id+"&slot_uuid="+n+"&c=100"+"&u="+o+"&cb="+Math.round(Math.random()*1e7);var d=t.protocol+t.host+t.pb_svc+"?jsd=1&"+s;t.log("amznads.getAdAdForSlot: "+(r?"Async ":"")+"Call to: "+d);if(r){t.appendScriptTag(d)}else{aax_write(e,"<script type='text/javascript' src='"+d+"'></script>")}};t.getAdsCallback=function(e,a,n,r,i){var o=null;var i=i||{};try{if(a&&typeof a==="function"){o=t.handleCallBack(a,n)}}catch(s){t.log("amznads.getAdsAsyncWithCallback(): Error occured in setting up callback functionality."+s)}if(!i.to){i.to=n}t.doGetAdsAsync(e,r,i,o)};t.getVideoAdsCallback=function(e,a,n,r,i){var i=i||{};i.mt="V";t.getAdsCallback(e,a,n,r,i)};t.getDisplayAdsCallback=function(e,a,n,r,i){var i=i||{};i.mt="D";t.getAdsCallback(e,a,n,r,i)};t.getAdsAsync=function(e,a,n){t.doGetAdsAsync(e,a,n)};t.getVideoAdsAsync=function(e,a,n){var n=n||{};n.mt="V";t.getAdsAsync(e,a,n)};t.getDisplayAdsAsync=function(e,a,n){var n=n||{};n.mt="D";t.getAdsAsync(e,a,n)};t.handleCallBack=function(e,n){var r=false;var i=null;var o=function(t){if(!r){try{e(t);if(i){clearTimeout(i)}}catch(a){}r=true}};var s=t.getValidMilliseconds(n);if(s){i=a.setTimeout(o,s)}else{i=a.setTimeout(o,t.DEFAULT_TIMEOUT)}return o};t.getValidMilliseconds=function(e){if(!e){return false}try{var a=~~Number(e);if(a>t.MIN_TIMEOUT){return a}}catch(n){t.log("amznads.isValidMilliseconds(): Invalid timeout specified."+n);return false}return false};t.getAds=function(a,n,r,i){if(i){t.doGetAdsAsync(a,n,r);return}else{var o=t.getScriptSource(a,n,r);t.log("amznads.getAds: Call to: "+o);aax_write(e,"<script type='text/javascript' src='"+o+"'></script>")}};t.getVideoAds=function(e,a,n,r){var n=n||{};n.mt="V";t.getAds(e,a,n,r)};t.getDisplayAds=function(e,a,n,r){var n=n||{};n.mt="D";t.getAds(e,a,n,r)};t.doGetAdsAsync=function(e,a,n,r){var i=t.getScriptSource(e,a,n);t.log("amznads.getAds: Async Call to: "+i);t.appendScriptTag(i,r)};t.getScriptSource=function(a,n,r){t.src_id=a;var r=r||{};var i=r.u;var o=r.d;var s=r.to;var d=r.mt;if(!i){i=t.getReferrerURL()}if(i&&i.indexOf("amzn_debug_mode")!==-1){t.debug_mode=true}if(t.ads){t.log("amznads.getAds(): clear out existing ads");t.clearTargetingFromGPTAsync();t.ads={}}if(t.saved_ads){t.ads=t.saved_ads}if(o){try{e.domain=o;t.log("amznads.getAds(): Using domain="+o)}catch(c){t.log("amznads.getAds(): Unable to override document domain with '"+o+"'; exception="+c)}}t.log("amznads.getAds(): Using url="+i);var l="src="+a+"&u="+i+"&cb="+Math.round(Math.random()*1e7);if(n){l+="&sz="+n}if(s){l+="&t="+s}if(d){l+="&mt="+d}var g=t.protocol+t.host+t.dtb_svc+"?"+l;return g};t.getReferrerURL=function(){var n=encodeURIComponent(e.documentURI);try{n=encodeURIComponent(a.top.location.href);if(!n||n=="undefined")n=t.detectIframeAndGetURL()}catch(r){n=t.detectIframeAndGetURL()}return n};t.detectIframeAndGetURL=function(){try{if(a.top!==a.self){t.log("Script is loaded within iFrame. url="+url);return encodeURIComponent(e.referrer)}}catch(n){return encodeURIComponent(e.documentURI)}};t.appendScriptTag=function(a,n){var r=e.getElementsByTagName("script")[0];var i=e.createElement("script");i.type="text/javascript";i.async=true;i.src=a;try{if(n&&typeof n==="function"){if(i.readyState){i.onreadystatechange=function(){if(i.readyState=="loaded"||i.readyState=="complete"){i.onreadystatechange=null;n(true)}};t.log("amznads.appendScriptTag: setting callBack function for < IE-8 ")}else{i.onload=function(){n(true)};t.log("amznads.appendScriptTag: setting callBack function for all other browsers exluding  < IE-8")}}}catch(o){t.log("amznads.appendScriptTag: Could not associate callBack function; "+o)}r.parentNode.insertBefore(i,r)};t.renderAd=function(e,a){t.log("amznads.renderAd: key="+a+"; ad-tag="+t.ads[a]);if(t.ads[a]){aax_write(e,t.ads[a])}else{var n=new Object;n.c="dtb";n.src=t.src_id;n.kvmismatch=1;n.pubReturnedKey=a;n.aaxReturnedKeys=t.getTokens();n.cb=Math.round(Math.random()*1e7);try{n.u=encodeURIComponent(location.host+location.pathname);if(navigator){n.ua=encodeURIComponent(navigator.userAgent)}}catch(r){}var i=encodeURIComponent(JSON.stringify(n));var o=t.protocol+t.host+"/x/px/p/0/"+i;t.log("amznads.renderAd: keyValueMismatch detected, "+"pubReturnedKey="+a+", aaxReturnedKeys="+t.getTokens());aax_write(e,"<img src='"+o+"'/>")}};t.detectViewability=function(e,n,r,o){if(t.isjQueryPresent()){if(r===a.top){new i(e,t.VIEWABILITY_CUTOFF_AREA,t.VIEWABILITY_CUTOFF_DURATION_SEC,true,n,r,o).collectData()}else{new i(r.frameElement,t.VIEWABILITY_CUTOFF_AREA,t.VIEWABILITY_CUTOFF_DURATION_SEC,true,n,r,o).collectData()}}};function i(n,r,o,s,d,c,l){this.element=n;this.impId=d;this.win=c;this.doc=l;this.start=null;this.end=null;this.area=null;this.cutoff=r;this.cutoffTime=o*1e3;this.focused=null;this.timer=false;this.timerStarted=false;this.getDuration=s;this.reported=false;this.above=null;this.totalTime=0;this.leftPos=null;this.topPos=null;i.prototype.calcArea=function(){try{var n=e.getElementsByTagName("body")[0];var r=a.top.innerWidth||e.documentElement.clientWidth||n.clientWidth;var i=a.top.innerHeight||e.documentElement.clientHeight||n.clientHeight;var o=t.$jQ(a).scrollTop();var s=t.$jQ(this.element).offset().top;var d=t.$jQ(this.element).height();var c=t.$jQ(a).scrollLeft();var l=t.$jQ(this.element).offset().left;var g=t.$jQ(this.element).width();var u=Math.max(s,o);var f=Math.min(s+d,o+i);var m=f-u;m=Math.max(0,m);var h=Math.max(l,c);var p=Math.min(l+g,c+r);var y=p-h;y=Math.max(0,y);var v=m*y;var T=g*d;this.leftPos=l/t.$jQ(e).width();this.topPos=s/t.$jQ(e).height();return v/T}catch(A){t.log("calcArea failed for ad id="+this.element+"; error="+A)}return 0};i.prototype.displayTime=function(){if(this.getDuration){var e=this.end-this.start;t.log(this.element+" viewed for: "+e);this.totalTime+=e}};i.prototype.adInView=function(){t.log(this.element+" IN VIEW")};i.prototype.adNotInView=function(){t.log(this.element+" NOT IN VIEW")};i.prototype.seenForTime=function(){t.log(this.element+" displayed for "+this.cutoffTime/1e3+" seconds");t.log(" ");this.reported=true;try{var e=encodeURIComponent(location.protocol+location.host+location.pathname)}catch(a){this.firePixel('/{"adViewability":[{"error": '+JSON.stringify(encodeURIComponent("Error encoding url - "+a))+"}]}")}try{this.firePixel('/{"adViewability":[{"viewable": true }]}')}catch(a){t.log(a);this.firePixel('/{"adViewability":[{"error": '+JSON.stringify(encodeURIComponent("Error sending pixel - "+a))+"}]}")}};i.prototype.firePixel=function(e){(new Image).src=t.protocol+t.host+t.px_svc+this.impId+e+"&cb="+Math.round(Math.random()*1e7)};i.prototype.getAreaTime=function(){var a=this;function n(){if(!a.reported){a.timer=setTimeout(function(){a.seenForTime()},a.cutoffTime)}}function r(){a.adInView();a.start=new Date;n();a.timerStarted=true}function i(){clearTimeout(a.timer);a.timerStarted=false;a.end=new Date;a.adNotInView();a.displayTime()}if(this.area==null){this.area=this.calcArea();if(this.area>this.cutoff){this.above=true}else{this.above=false}try{this.firePixel('/{"adViewability":[{"above_the_fold": '+this.above+', "topPos": '+this.topPos+', "leftPos": '+this.leftPos+"}]}")}catch(o){t.log(o);this.firePixel('/{"adViewability":[{"error": '+JSON.stringify(encodeURIComponent("Error sending pixel - "+o))+"}]}")}}var s=this.calcArea();if(e.hasFocus()&&(this.focused==false||this.focused==null)&&s>this.cutoff&&this.timerStarted==false){r()}if(e.hasFocus()){this.focused=true}else{if(this.area>this.cutoff&&this.focused==true){i();this.focused=false}}if(this.area>=this.cutoff&&s<this.cutoff||this.area<this.cutoff&&s>=this.cutoff){if(s>=this.cutoff&&this.timerStarted==false){r()}else if(s<this.area){i()}}this.area=s};i.prototype.collectData=function(){var e=this;e.getAreaTime();t.$jQ(a).on("scroll resize focus blur",function(){if(!e.reported){e.getAreaTime()}})}}t.hasAds=function(e){var a;if(!e){try{return Object.keys(t.ads).length>0}catch(n){t.log("amznads.hasAds: looks like IE 8 (and below): "+n);for(a in t.ads){if(t.ads.hasOwnProperty(a)){return true}}}}for(a in t.ads){if(t.ads.hasOwnProperty(a)){if(a.indexOf(e)>0){return true}}}return false};t.getTargeting=function(e){var a={};if(t.getTokens()&&t.getTokens().length>0){a[t.targetingKey]=t.getTokens();if(t.amzn_vid){a[t.vidKey]=t.amzn_vid}}return a};t.setTargeting=function(e,a){var n;for(n in t.ads){if(t.ads.hasOwnProperty(n)){if(a&&n.indexOf(a)<0){continue}e(n,"1")}}};t.setTargetingForGPTAsync=function(e){try{if(e){t.targetingKey=e;var a=t.getTokens();if(typeof a!="undefined"&&a.length>0){googletag.cmd.push(function(){googletag.pubads().setTargeting(e,a);if(t.amzn_vid){googletag.pubads().setTargeting(t.vidKey,t.amzn_vid)}})}}else{var n;for(n in t.ads){if(t.ads.hasOwnProperty(n)){(function(){var e=n;t.log("amznads.setTargetingForGPTAsync: pushing localKey="+e);googletag.cmd.push(function(){if(amznads.debug_mode){amznads.log("amznads.setTargetingForGPTAsync: localKey="+e)}googletag.pubads().setTargeting(e,"1");if(t.amzn_vid){googletag.pubads().setTargeting(t.vidKey,t.amzn_vid)}})})()}}}t.log("amznads.setTargetingForGPTAsync: Completed successfully. Number of ads returned by Amazon: "+Object.keys(t.ads).length)}catch(r){t.log("amznads.setTargetingForGPTAsync: ERROR - "+r)}};t.setTargetingForGPTSync=function(e){try{if(e){t.targetingKey=e;var a=t.getTokens();if(typeof a!="undefined"&&a.length>0){googletag.pubads().setTargeting(e,a);if(t.amzn_vid){googletag.pubads().setTargeting(t.vidKey,t.amzn_vid)}}}else{var n;for(n in t.ads){if(t.ads.hasOwnProperty(n)){googletag.pubads().setTargeting(n,"1");if(t.amzn_vid){googletag.pubads().setTargeting(t.vidKey,t.amzn_vid)}}}}t.log("amznads.setTargetingForGPTSync: Completed successfully. Number of ads returned by Amazon: "+Object.keys(t.ads).length)}catch(r){t.log("amznads.setTargetingForGPTSync: ERROR - "+r)}};t.clearTargetingFromGPTAsync=function(){try{if(googletag&&googletag.pubads())googletag.pubads().clearTargeting(t.targetingKey);googletag.pubads().clearTargeting(t.vidKey)}catch(e){}};t.appendTargetingToAdServerUrl=function(e){var a=e;try{if(e.indexOf("?")===-1){e=e+"?"}var n;for(n in t.ads){if(t.ads.hasOwnProperty(n)){e+="&"+n+"=1"}}t.log("amznads.appendTargetingToAdServerUrl: Completed successfully. Number of ads returned by Amazon: "+t.ads.length)}catch(r){t.log("amznads.appendTargetingToAdServerUrl: ERROR - "+r)}t.log("amznads.appendTargetingToAdServerUrl: input url: "+a+"\nreturning url: "+e);return e};t.appendTargetingToQueryString=function(e){var a=e;try{var n;for(n in t.ads){if(t.ads.hasOwnProperty(n)){e+="&"+n+"=1"}}}catch(r){t.log("amznads.appendTargetingToQueryString: ERROR - "+r)}t.log("amznads.appendTargetingToQueryString: input query-string:"+a+"\nreturning query-string:"+e);return e};t.getTokens=function(e){var a,n=[];try{for(a in t.ads){if(t.ads.hasOwnProperty(a)){if(e&&a.indexOf(e)<0){continue}n.push(a)}}}catch(r){t.log("amznads.getTokens: ERROR - "+r)}t.log("amznads.getTokens: returning tokens = "+n);return n};t.getKeys=t.getTokens;t.getVid=function(){return t.amzn_vid};t.doAllTasks=function(){while(t.tasks.length>0){var e=t.tasks.shift();t.doTask(e)}};t.doTask=function(e){try{e.call()}catch(a){t.log("Failed calling task: "+a)}};t.tryGetAdsAsync=function(){if(t.asyncParams){t.getAdsCallback(t.asyncParams.id,t.asyncParams.callbackFn,t.asyncParams.timeout,t.asyncParams.size,t.asyncParams.data)}};return t}(amznads||{},document,window,amzn_console);amznads.tryGetAdsAsync();window["amzn_ads"]=amzn_ads;window["amznads"]=amznads;