import { Injectable } from '@angular/core';

declare var _paq: any;
@Injectable()
export class ConfigurePiwikTracker {

        constructor() {
        if (typeof (_paq) === 'undefined') {
          console.warn('Piwik not found');
        }
    }

      pageCustomUrl(path: string) {
      try {
        _paq.push(['setCustomUrl', path]);
      } catch (e) {
        if (!(e instanceof ReferenceError)) {
          throw e;
        }
      }
    }

    setDocumentTitle() {
    try {
      _paq.push(['setDocumentTitle', window.document.title]);
      } catch (e) {
        if (!(e instanceof ReferenceError)) {
          throw e;
        }
      }
    }


     setUserId(userId: string) {
        try {
          _paq.push(['setUserId', userId]);
        } catch (e) {
          if (!(e instanceof ReferenceError)) {
            throw e;
          }
        }
      }

      setCustomVariable(properties: any) {
        try {
          _paq.push(['setCustomVariable', properties.value, properties.other ]);
        } catch (e) {
          if (!(e instanceof ReferenceError)) {
            throw e;
          }
        }
      }
}