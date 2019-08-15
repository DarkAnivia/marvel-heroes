import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd, Event   } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'marvel-heroes';
  public showBack: boolean;
  constructor(private translate: TranslateService,
    public router: Router) {
    translate.setDefaultLang('en');
    translate.use('en');
    this.router.events.pipe(
      filter(( event: Event  ) =>{ return (event instanceof NavigationEnd )
      } )
    )
    .subscribe( (event : NavigationEnd) => {
      if (event.url.startsWith('/heroe-detail')){
        this.showBack= true
      }else{
        this.showBack = false
      }
    
    })

  }
}
