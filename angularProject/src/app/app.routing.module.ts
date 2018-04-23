import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Case0Component } from './case0/case0.component';
import { Case1Component } from './case1/case1.component';
import { Case3Component } from './case3/case3.component';
import { Case4Component } from './case4/case4.component';
import { Case5Component } from './case5/case5.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent },
    { path: 'case0', component: Case0Component },
    { path: 'case1', component: Case1Component },
    { path: 'case3', component: Case3Component },
    { path: 'case4', component: Case4Component },
    { path: 'case5', component: Case5Component }
    
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
