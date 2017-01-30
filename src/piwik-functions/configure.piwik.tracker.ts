import { Injectable } from '@angular/core';

declare var _paq: any;
@Injectable()
export class ConfigurePiwikTracker {

    constructor() {
        if (typeof (_paq) === 'undefined') {
          console.warn('Piwik not found');
        }
    }

      setCustomUrl(path: string) {
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

      setCustomVariable(name: string, index: string, type: string) {
        try {
          _paq.push(['setCustomVariable', index, name, type]);
        } catch (e) {
          if (!(e instanceof ReferenceError)) {
            throw e;
          }
        }
      }

      setCustomDimension(index: string, value: string) {
        try {
          _paq.push(['setCustomDimension', index, value]);
        } catch (e) {
          if (!(e instanceof ReferenceError)) {
            throw e;
          }
        }
      }
}