import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEducationComponent } from './components/education/add-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { AddExperienceComponent } from './components/experience/add-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AddSkillComponent } from './components/skills/add-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { AddProjectComponent } from './components/projects/add-project.component';
import { EditProjectComponent } from './components/projects/edit-project.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'main', component: PortfolioComponent},
  { path: 'updateAbout', component: EditAboutComponent},
  { path: 'addExperience', component: AddExperienceComponent },
  { path: 'updateExperience/:id', component: EditExperienceComponent },
  { path: 'addEducation', component: AddEducationComponent },
  { path: 'updateEducation/:id', component: EditEducationComponent},
  { path: 'addSkill', component: AddSkillComponent},
  { path: 'updateSkill/:id', component: EditSkillComponent},
  { path: 'addProject', component: AddProjectComponent},
  { path: 'updateProject/:id', component: EditProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
