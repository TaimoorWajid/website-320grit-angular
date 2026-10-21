import { Component } from '@angular/core';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

/**
 * MAIN-BRANCH ONLY: the live site shows a temporary under-construction
 * page until the client approves the staging website. The full site lives
 * on develop/staging; restoring = merge staging into main.
 */
@Component({
  selector: 'app-root',
  imports: [UnderConstructionComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
