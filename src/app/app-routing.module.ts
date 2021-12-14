import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: "", redirectTo: "/eCommerce", pathMatch: "full"
},
{ path: "animation", loadChildren: () => import("./animation/animation.module").then(m => m.AnimationModule) },
{ path: "eCommerce", loadChildren: () => import("./e-commerce/e-commerce.module").then(m => m.ECommerceModule) },
{ path: "countdownTimerIO", loadChildren: () => import("./countdown-timer/countdown-timer.module").then(m => m.CountdownTimerModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
