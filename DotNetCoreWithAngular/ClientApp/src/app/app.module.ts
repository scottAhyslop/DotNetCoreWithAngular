import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BetrayalComponent } from './betrayal/betrayal.component';
import { DarkSideComponent } from './dark-side/dark-side.component';
import { LightSideComponent} from './light-side/light-side.component';
import { RedemptionComponent } from './redemption/redemption.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    BetrayalComponent,
    DarkSideComponent,
    LightSideComponent,
    RedemptionComponent,
    FooterComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'light-side', component: LightSideComponent },
      { path: 'dark-side', component: DarkSideComponent },
      { path: 'betrayal', component: BetrayalComponent },
      { path: 'redemption', component: RedemptionComponent },
      { path: 'privacy', component: PrivacyComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
