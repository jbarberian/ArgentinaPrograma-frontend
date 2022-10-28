import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { AddExperienceComponent } from './components/experience/add-experience.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { AddEducationComponent } from './components/education/add-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { AddSkillComponent } from './components/skills/add-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { AddProjectComponent } from './components/projects/add-project.component';
import { EditProjectComponent } from './components/projects/edit-project.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    AddExperienceComponent,
    PortfolioComponent,
    EditExperienceComponent,
    AddEducationComponent,
    EditEducationComponent,
    AddSkillComponent,
    EditSkillComponent,
    AddProjectComponent,
    EditProjectComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
