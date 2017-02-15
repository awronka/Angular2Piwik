import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UsePiwikTracker, ConfigurePiwikTracker } from '../piwik-functions';
import 'rxjs/add/operator/filter';

@Injectable()
export class TrackAngularRouter {
    private previousRoute: {[name: string]: string};

    constructor(public upt: UsePiwikTracker, public cpt: ConfigurePiwikTracker){
        this.upt =  upt;
        this.cpt = cpt;
    }

    track (router: Router, activatedRoute: ActivatedRoute) {
        router.events   
            .filter (val => val instanceof NavigationEnd)
            .subscribe(val => {
                let currentRoute = activatedRoute.root;
                while(currentRoute.children[0] !== undefined){
                    currentRoute = currentRoute.children[0];
                }
            // set referrer if it exists
            if(this.previousRoute) {
                this.cpt.setReferrerUrl(this.previousRoute['url']);
            }    
            
            // track current page
            this.upt.setPageAndTrack(window.location.href, currentRoute.snapshot.data['name']);
            
            // set previous route
            this.previousRoute = { name : currentRoute.snapshot.data['name'], url : window.location.href}

        });
    }
}
