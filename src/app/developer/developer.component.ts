import { Component } from '@angular/core';
import { Developer } from '../models/developer.models';
import { Skill } from '../models/skill.models';
import { SkillComponent } from '../skill/skill.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [SkillComponent,CommonModule],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css'
})
export class DeveloperComponent {

  skill1 = new Skill (
    "JS",
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png',
    'https://en.wikipedia.org/wiki/JavaScript'
  );

  skill2 = new Skill  (
    'CSS',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
    'https://en.wikipedia.org/wiki/Cascading_Style_Sheets'
  )

  skills = [this.skill1, this.skill2];


  developer1 = new Developer(
    'Dohn',
    'Joe',
    26,
    'Homme',
    "I'm a developer",
    this.skills,
  );



  }

  
  

  

