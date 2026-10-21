import { Component } from '@angular/core';

/**
 * Temporary "under construction" page served from the `main` branch
 * (the live-site branch) until the client approves the staging website.
 * Deliberately dependency-free: no header, footer, router, or images —
 * just a branded holding page with contact details.
 */
@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrl: './under-construction.component.scss',
})
export class UnderConstructionComponent {}
