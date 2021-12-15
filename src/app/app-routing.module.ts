import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "", redirectTo: "/countdownTimerIO", pathMatch: "full" },
  { path: "animation", loadChildren: () => import("./animation/animation.module").then(m => m.AnimationModule) },
  { path: "eCommerce", loadChildren: () => import("./e-commerce/e-commerce.module").then(m => m.ECommerceModule) },
  { path: "countdownTimerIO", loadChildren: () => import("./countdown-timer/countdown-timer.module").then(m => m.CountdownTimerModule) },
  { path: "studentsMarksTable", loadChildren: () => import("./students-marks-table/students-marks-table.module").then(m=>m.StudentsMarksTableModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
