import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { WindTurbineComponent } from './components/wind-turbine/wind-turbine.component';
import { RainEffectComponent } from './components/rain-effect/rain-effect.component';
import { SunComponent } from './components/sun/sun.component';

// Pipes
import { ImgPipe } from './pipes/img.pipe';

// Packages
import { NgSelectModule } from '@ng-select/ng-select';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    CurrentWeatherComponent,
    WindTurbineComponent,
    ImgPipe,
    RainEffectComponent,
    SunComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    CommonModule,
    NgCircleProgressModule.forRoot()
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
