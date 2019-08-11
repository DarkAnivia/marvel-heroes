import { NgModule, SkipSelf, Optional, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule, routerReducer, RouterStateSerializer} from '@ngrx/router-store'
import { StoreDevtoolsModule} from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { appReducer, appMetaReducers } from './app.reducer';
import { CustomSerializer } from './shared/utils';



@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducer, {
      metaReducers: appMetaReducers
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
      AppEffects
    ]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: []
})
export class StateModule {

  constructor(@Optional() @SkipSelf() parentModule: StateModule) {
    if (parentModule) {
      throw new Error(
        'StateModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: [
        {
          provide: RouterStateSerializer,
          useClass: CustomSerializer
        }
      ]
    };
  }
}