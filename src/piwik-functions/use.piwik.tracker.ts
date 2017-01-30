import { Injectable } from '@angular/core';

declare var _paq: any;
@Injectable()
export class UsePiwikTracker {

    constructor() {
        if (typeof (_paq) === 'undefined') {
          console.warn('Piwik not found');
        }
    }

    
   // left this function in as an apply all in your application
    pageTrack(path: string, location: any) {
    try {
      _paq.push(['setDocumentTitle', window.document.title]);
      _paq.push(['setCustomUrl', path]);
      _paq.push(['trackPageView']);
      } catch (e) {
        if (!(e instanceof ReferenceError)) {
          throw e;
        }
      }
    }

   trackPageView(title?: string) {
    try {
      _paq.push(['trackPageView'], title);
      } catch (e) {
        if (!(e instanceof ReferenceError)) {
          throw e;
        }
      }
    }

  trackEvent(action: string, properties: any) {
    try {
      if (properties.value) {
        var parsed = parseInt(properties.value, 10);
        properties.value = isNaN(parsed) ? 0 : parsed;
      }
      _paq.push(['trackEvent', properties.category, action, properties.label, properties.value]);
      } catch (e) {
        if (!(e instanceof ReferenceError)) {
          throw e;
        }
      }
    }

    trackSiteSearch(searchQuery: string, category: string, resultsCount: number){
      try {
      _paq.push(['trackSiteSearch'], searchQuery, category, resultsCount);
      } catch (e) {
        if (!(e instanceof ReferenceError)) {
          throw e;
        }
      }
    }


    enableHeartBeatTimer(){
      try {
      _paq.push(['enableHeartBeatTimer']);
      } catch (e) {
        if (!(e instanceof ReferenceError)) {
          throw e;
        }
      }
    }
}