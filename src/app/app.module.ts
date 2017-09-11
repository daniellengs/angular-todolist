import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { AboutComponent } from './about/about.component';

import { TasksService } from './tasks/tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    TasksComponent,
    TaskComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/tasks',
        pathMatch: 'full'
      },
      {
        path: 'tasks',
        component: TasksComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
