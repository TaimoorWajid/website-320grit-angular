import { Routes } from '@angular/router';

/**
 * Route table. Slugs mirror the WordPress page URLs found in the
 * staging mega-menu / mobile menu (nav-forms.md). Home is eager;
 * every other page is lazy-loaded.
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home-page.component').then((m) => m.HomePageComponent),
    data: { title: 'Construction Consulting, Project Management & Owner Representation' },
  },
  {
    // Services index page — exact match only; child service routes follow.
    path: 'services',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/services/all-services/all-services-page.component').then(
        (m) => m.AllServicesPageComponent,
      ),
    data: { title: 'Our Services' },
  },
  {
    path: 'services',
    children: [
      {
        path: 'bid-build',
        loadComponent: () =>
          import('./features/services/bid-build/bid-build-page.component').then((m) => m.BidBuildPageComponent),
        data: { title: 'Bid-Build Construction Services' },
      },
      {
        path: 'design-build',
        loadComponent: () =>
          import('./features/services/design-build/design-build-page.component').then(
            (m) => m.DesignBuildPageComponent,
          ),
        data: { title: 'Design-Build Construction Services' },
      },
      {
        path: 'expert-witness',
        loadComponent: () =>
          import('./features/services/expert-witness/expert-witness-page.component').then(
            (m) => m.ExpertWitnessPageComponent,
          ),
        data: { title: 'Construction Expert Witness Services' },
      },
      {
        path: 'forensic-accounting',
        loadComponent: () =>
          import('./features/services/forensic-accounting/forensic-accounting-page.component').then(
            (m) => m.ForensicAccountingPageComponent,
          ),
        data: { title: 'Construction Forensic Accounting Services' },
      },
    ],
  },
  {
    path: 'commercial-construction',
    redirectTo: '/industries/commercial-construction',
    pathMatch: 'full',
  },
  {
    path: 'industries',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/markets/all-industries/all-industries-page.component').then(
        (m) => m.AllIndustriesPageComponent,
      ),
    data: { title: 'Industries We Serve' },
  },
  {
    path: 'industries',
    children: [
      {
        path: 'railroads',
        loadComponent: () =>
          import('./features/markets/railroads/railroads-page.component').then((m) => m.RailroadsPageComponent),
        data: { title: 'Railroad Construction' },
      },
      {
        path: 'healthcare',
        loadComponent: () =>
          import('./features/markets/healthcare/healthcare-page.component').then((m) => m.HealthcarePageComponent),
        data: { title: 'Healthcare Construction' },
      },
      {
        path: 'advanced-technology',
        loadComponent: () =>
          import('./features/markets/advanced-technology/advanced-technology-page.component').then(
            (m) => m.AdvancedTechnologyPageComponent,
          ),
        data: { title: 'Advanced Technology Construction' },
      },
      {
        path: 'behavioral-health',
        loadComponent: () =>
          import('./features/markets/behavioral-health/behavioral-health-page.component').then(
            (m) => m.BehavioralHealthPageComponent,
          ),
        data: { title: 'Behavioral Health Construction' },
      },
      {
        path: 'education',
        loadComponent: () =>
          import('./features/markets/education/education-page.component').then((m) => m.EducationPageComponent),
        data: { title: 'Education Construction' },
      },
      {
        path: 'hospitality',
        loadComponent: () =>
          import('./features/markets/hospitality/hospitality-page.component').then((m) => m.HospitalityPageComponent),
        data: { title: 'Hospitality Construction' },
      },
      {
        path: 'tenant-improvement',
        loadComponent: () =>
          import('./features/markets/tenant-improvement/tenant-improvement-page.component').then(
            (m) => m.TenantImprovementPageComponent,
          ),
        data: { title: 'Tenant Improvement Construction' },
      },
      {
        path: 'commercial-construction',
        loadComponent: () =>
          import('./features/markets/commercial/commercial-page.component').then(
            (m) => m.CommercialPageComponent,
          ),
        data: { title: 'Commercial Construction Services' },
      },
    ],
  },
  // Alias used by the "What we do" mega-menu (services list).
  { path: 'tenant-improvements', redirectTo: '/industries/tenant-improvement', pathMatch: 'full' },
  {
    path: 'our-story',
    loadComponent: () =>
      import('./features/about/our-story/our-story-page.component').then((m) => m.OurStoryPageComponent),
    data: { title: 'Our Story' },
  },
  {
    path: 'our-values',
    loadComponent: () =>
      import('./features/about/our-values/our-values-page.component').then((m) => m.OurValuesPageComponent),
    data: { title: 'Our Values' },
  },
  {
    path: 'our-leadership',
    loadComponent: () =>
      import('./features/about/our-leadership/our-leadership-page.component').then(
        (m) => m.OurLeadershipPageComponent,
      ),
    data: { title: 'Our Leadership' },
  },
  {
    path: 'awards',
    loadComponent: () => import('./features/about/awards/awards-page.component').then((m) => m.AwardsPageComponent),
    data: { title: 'Awards' },
  },
  // Alias used by the mobile menu.
  { path: 'awards-and-recognition', redirectTo: '/awards', pathMatch: 'full' },
  {
    path: 'community',
    loadComponent: () =>
      import('./features/about/community/community-page.component').then((m) => m.CommunityPageComponent),
    data: { title: 'Community' },
  },
  {
    path: 'quality',
    loadComponent: () =>
      import('./features/about/quality/quality-page.component').then((m) => m.QualityPageComponent),
    data: { title: 'Quality' },
  },
  {
    path: 'safety',
    loadComponent: () => import('./features/about/safety/safety-page.component').then((m) => m.SafetyPageComponent),
    data: { title: 'Safety' },
  },
  {
    path: 'sustainability',
    loadComponent: () =>
      import('./features/about/sustainability/sustainability-page.component').then(
        (m) => m.SustainabilityPageComponent,
      ),
    data: { title: 'Sustainability' },
  },
  {
    path: 'approach',
    children: [
      {
        path: 'owner-centric',
        loadComponent: () =>
          import('./features/approach/owner-centric/owner-centric-page.component').then(
            (m) => m.OwnerCentricPageComponent,
          ),
        data: { title: 'Owner-Centric Approach' },
      },
      {
        // Linked in the "What we do" mega-menu; no template exists in the
        // theme repo — flagged in the final report as needing content.
        path: 'owner-representation',
        loadComponent: () =>
          import('./features/approach/owner-representation/owner-representation-page.component').then(
            (m) => m.OwnerRepresentationPageComponent,
          ),
        data: { title: 'Owner Representation' },
      },
    ],
  },
  {
    // Locations index page — exact match only; child location routes follow.
    path: 'locations',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/locations/all-locations/all-locations-page.component').then(
        (m) => m.AllLocationsPageComponent,
      ),
    data: { title: 'Where We Work' },
  },
  {
    path: 'locations',
    children: [
      {
        path: 'california',
        loadComponent: () =>
          import('./features/locations/california/california-page.component').then(
            (m) => m.CaliforniaPageComponent,
          ),
        data: { title: 'California' },
      },
    ],
  },
  {
    path: 'careers',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./features/careers/careers-page.component').then((m) => m.CareersPageComponent),
        data: { title: 'Careers' },
      },
      // WP URL alias — the canonical route stays the flat /open-positions.
      { path: 'open-positions', redirectTo: '/open-positions', pathMatch: 'full' },
      {
        path: 'saved',
        loadComponent: () =>
          import('./features/careers/saved/saved-page.component').then((m) => m.SavedPageComponent),
        data: { title: 'Saved Positions' },
      },
      {
        path: 'introduce-yourself',
        loadComponent: () =>
          import('./features/careers/introduce-yourself/introduce-page.component').then(
            (m) => m.IntroducePageComponent,
          ),
        data: { title: 'Introduce Yourself' },
      },
      {
        path: 'apply',
        loadComponent: () =>
          import('./features/careers/apply/apply-page.component').then((m) => m.ApplyPageComponent),
        data: { title: 'Apply' },
      },
      {
        path: 'thank-you',
        loadComponent: () =>
          import('./features/careers/thank-you/thank-you-page.component').then((m) => m.ThankYouPageComponent),
        data: { title: 'Thank You' },
      },
      {
        // Job detail — must stay last so it doesn't swallow the flow routes.
        // Unknown slugs render a 404 (not the WP silent fallback).
        path: ':slug',
        loadComponent: () =>
          import('./features/careers/job-detail/job-detail-page.component').then(
            (m) => m.JobDetailPageComponent,
          ),
        data: { title: 'Careers' },
      },
    ],
  },
  {
    path: 'open-positions',
    loadComponent: () =>
      import('./features/careers/open-positions/open-positions-page.component').then(
        (m) => m.OpenPositionsPageComponent,
      ),
    data: { title: 'Open Positions' },
  },
  {
    // The mobile menu links Contact Us here; the inquiry form itself lives
    // on the homepage (#contact-form). This page reuses the shared form.
    path: 'contact-us',
    loadComponent: () => import('./features/contact/contact-page.component').then((m) => m.ContactPageComponent),
    data: { title: 'Contact Us' },
  },
  {
    path: '**',
    loadComponent: () => import('./shared/components/not-found/not-found.component').then((m) => m.NotFoundComponent),
    data: { title: 'Page Not Found' },
  },
];
