import { Injectable } from '@angular/core';

@Injectable()
export class InitializePiwik {
    init(url: string, id: number) {
        window['_paq'] =  window['_paq'] || [];
        window['_paq'].push(['trackPageView']);
        window['_paq'].push(['enableLinkTracking']);
        (function () {
            var u = url;
            window['_paq'].push(['setTrackerUrl', u + 'piwik.php']);
            window['_paq'].push(['setSiteId', id.toString()]);
            var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
            g.type = 'text/javascript'; 
            g.async = true; 
            g.defer = true; 
            g.src = u + 'piwik.js'; 
            s.parentNode.insertBefore(g, s);
        })();
    }
}

declare var window: {
    [key:string]: any; // missing index defintion
    prototype: Window;
    new(): Window;
}