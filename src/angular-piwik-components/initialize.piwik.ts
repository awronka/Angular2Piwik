import { Injectable } from '@angular/core';

@Injectable()
export class InitializePiwik {
    init(url: string, id: number) {
        var _paq: any = _paq || [];
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function () {
            var u = url;
            _paq.push(['setTrackerUrl', u + 'piwik.php']);
            _paq.push(['setSiteId', id.toString()]);
            var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
            g.type = 'text/javascript'; 
            g.async = true; 
            g.defer = true; 
            g.src = u + 'piwik.js'; 
            s.parentNode.insertBefore(g, s);
        })();
    }
}