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

const routes: Routes = [
  { path: 'main', component: PortfolioComponent},
  { path: 'addExperience', component: AddExperienceComponent },
  { path: 'updateExperience/:id', component: EditExperienceComponent },
  { path: 'addEducation', component: AddEducationComponent },
  { path: 'updateEducation/:id', component: EditEducationComponent},
  { path: 'addSkill', component: AddSkillComponent},
  { path: 'updateSkill/:id', component: EditSkillComponent},
  { path: 'addProject', component: AddProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
