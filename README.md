# Angular2Piwik 

A small easy to use wrapper component for Piwik to work with your Angular 2 application.

## Install through source files

Download directly from github and place the src files in your Angular 2 application. 

##npm install

```npm install --save angular2piwik```


### Adding Piwik into your application via Script Tag.

To illustrate the set up, here's the code to inject into your header to initialize Piwik in your application. Piwik's [site](https://developer.piwik.org/guides/tracking-javascript-guide) has the detailed documentation on how to set up communication between Piwik and your application. 
Make sure you replace the PIWIK_URL with your piwik server. You can remove all the _paq methods in this script and set them up in your Angular 2 application. 

```html
<!-- Piwik -->
<script type="text/javascript">
  var _paq = _paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//{$PIWIK_URL}/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', {$IDSITE}]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<!-- End Piwik Code -->
```

### Initialize Piwik via Root Component 

To enable Piwik via your root component you can now export InitializePiwik provider and inject it in your roop component.

```ts
import { Component } from '@angular/core';
import { InitializePiwik } from 'Angular2Piwik';

@Component({
  selector: 'app',
  template: `<router-outlet></router-outlet>` // Or what your root template is.
})
export class AppComponent {
  constructor(
    private initializePiwik: InitializePiwik
    ) {
      const url = `//*************:*****/anayltics/`; // set your url to whatever should be communicating with Piwik with the correct backslashes
      initializePiwik.init(url);
    }
}

```

## Include it in your application

Bootrapping this application is easy. Import ```Angular2PiwikModule``` into your root ```NgModule```.

```ts
// bootstrap
 import { NgModule } from '@angular/core';
  import { Angular2PiwikModule } from 'Angular2Piwik';

  ////
  @NgModule({
    imports :[ Angular2PiwikModule ]
  })
```

Once that's done you can import ```ConfigurePiwikTracker``` and ```UsePiwikTracker``` into any component in your application. Always use the configure piwik tracker methods before the use piwik tracker.

```ts

// component
import { Component } from '@angular/core';
import { ConfigurePiwikTracker, UsePiwikTracker } from 'Angular2Piwik';

@Component({
  selector: 'app',
  template: `<router-outlet></router-outlet>` // Or what your root template is.
})
export class AppComponent {
  constructor(
    private configurePiwikTracker: ConfigurePiwikTracker
    private usePiwikTracker: UsePiwikTracker
    ) {
      configurePiwikTracker.setUserId('test-123');
      configurePiwikTracker.setDocumentTitle();
      usePiwikTracker.trackPageView();
    }
}


```


## Tracking events

For now tracking events and actions is manual and is not injected into the html. 

```html
<button (click)="whatHappensOnClick(value)"></button>
```

```ts
// component
import { Component } from '@angular/core';
import { UsePiwikTracker } from 'Angular2Piwik';

@Component({
  selector: 'app',
  templateUrl: './myButton.html'
})
export class AppComponent {
  constructor(
    private usePiwikTracker: UsePiwikTracker
    ) {
    }

    whatHappensOnClick(someVal){
      /*
      * some code...
      */
      usePiwikTracker.trackEvent('clickEvent', {category : 'myClickEvents', label: 'generalClicks', value: someVal})
    }
  
}
```


## Contributing

Please see the [CONTRIBUTING](https://github.com/awronka/Angular2Piwik/blob/master/.github/contribute.md) and [CODE_OF_CONDUCT](https://github.com/awronka/Angular2Piwik/blob/master/.github/codeOfConduct.md) files for guidelines.

## Original Source

All contributers from the source repository have been left in the package.json. It can be viewed [here.](https://github.com/angulartics/angulartics2)

## License

[MIT](LICENSE)
