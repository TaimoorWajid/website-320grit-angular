import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { MarketIconComponent } from '../shared/market-icon/market-icon.component';
import { MARKET_IMG } from '../shared/market-assets';

interface IndustryCard {
  number: string;
  icon: string;
  eyebrow: string;
  title: string;
  bullets: string[];
  paragraph: string;
  href: string;
  bg: string;
}

/** Industries index page — full directory of the markets 320 Grit serves. */
@Component({
  selector: 'app-all-industries-page',
  imports: [RouterLink, RevealDirective, MarketIconComponent],
  templateUrl: './all-industries-page.component.html',
  styleUrl: './all-industries-page.component.scss',
})
export class AllIndustriesPageComponent {
  protected readonly heroBg = MARKET_IMG.industries;

  protected readonly industries: IndustryCard[] = [
    {
      number: '01',
      icon: 'train',
      eyebrow: 'Railroad',
      title: 'Rail Infrastructure',
      bullets: ['Track Systems', 'Operations Facilities', 'Signal Buildings', 'Maintenance Yards'],
      paragraph:
        '320 Grit delivers railroad construction with safety, precision, and a relentless focus on performance — ' +
        'from new rail construction and expansions to complex trackwork and system improvements that keep people ' +
        'and industries moving forward.',
      href: '/industries/railroads',
      bg: MARKET_IMG.railroad,
    },
    {
      number: '02',
      icon: 'building-medical',
      eyebrow: 'Healthcare',
      title: 'Hospital / MOB / Imaging',
      bullets: ['Hospitals', 'Medical Office Buildings', 'Imaging Centers', 'Outpatient Facilities'],
      paragraph:
        'Precision-built healthcare environments designed around patient care. From hospitals and medical office ' +
        'buildings to imaging centers, we deliver code-compliant, mission-critical facilities that support healing — ' +
        'on time and on budget.',
      href: '/industries/healthcare',
      bg: MARKET_IMG.healthcare,
    },
    {
      number: '03',
      icon: 'plus-circle',
      eyebrow: 'Behavioral Health',
      title: 'Healing Environments',
      bullets: [
        'Inpatient Psychiatric Units',
        'Residential Treatment Centers',
        'Outpatient Behavioral Clinics',
        'Crisis Stabilization Units',
      ],
      paragraph:
        '320 Grit designs and builds behavioral health facilities where safety and dignity come first. From ' +
        'ligature-resistant inpatient units to warm residential treatment centers, we deliver therapeutic ' +
        'environments that meet OSHPD and licensing standards across California.',
      href: '/industries/behavioral-health',
      bg: MARKET_IMG.behavioralHealth,
    },
    {
      number: '04',
      icon: 'cpu',
      eyebrow: 'Advanced Technology',
      title: 'Research & Laboratory',
      bullets: [
        'Data Centers & Mission-Critical',
        'Life Sciences Laboratories',
        'Cleanrooms & Controlled Environments',
        'Advanced Manufacturing',
      ],
      paragraph:
        'Technology facilities leave no room for error — and neither do we. 320 Grit builds data centers, ' +
        'laboratories, and cleanrooms with the power redundancy, precision environmental controls, and security ' +
        'that mission-critical operations demand, delivering zero-downtime construction.',
      href: '/industries/advanced-technology',
      bg: MARKET_IMG.lab,
    },
    {
      number: '05',
      icon: 'pencil',
      eyebrow: 'Tenant Improvement',
      title: 'Modern Interior Transformations',
      bullets: [
        'Office Build-Outs & Reconfigurations',
        'Corporate HQ Renovations',
        'Retail & Restaurant TI',
        'Medical & Lab Fit-Outs',
      ],
      paragraph:
        'From concept to keys, 320 Grit delivers tenant improvements that turn empty shells into high-performing ' +
        'workplaces. Our California TI teams specialize in fast-track office build-outs, corporate renovations, and ' +
        'occupied-space construction — minimizing downtime while maximizing the return on your space.',
      href: '/industries/tenant-improvement',
      bg: MARKET_IMG.planning,
    },
    {
      number: '06',
      icon: 'graduation-cap',
      eyebrow: 'Education',
      title: 'Learning Environments',
      bullets: ['K-12 Schools & Campuses', 'Higher Education', 'Classroom Modernizations', 'Gyms, Labs & Libraries'],
      paragraph:
        '320 Grit builds learning environments engineered for the next generation. From K-12 campuses to university ' +
        'facilities, we deliver classrooms, laboratories, and athletic spaces on tight academic calendars — with ' +
        'student safety, durability, and the learning experience at the center of every build.',
      href: '/industries/education',
      bg: MARKET_IMG.banner,
    },
    {
      number: '07',
      icon: 'bell',
      eyebrow: 'Hospitality',
      title: 'Hotels & Guest Experiences',
      bullets: ['Hotels & Resorts', 'Restaurants & Bars', 'Lobbies & Common Areas', 'Guest Room Renovations'],
      paragraph:
        'Great hospitality is built on unforgettable guest experiences — and so is 320 Grit. We deliver hotel ' +
        'construction, restaurant build-outs, and resort renovations, crafting lobbies, guest rooms, and dining ' +
        'spaces that keep guests coming back.',
      href: '/industries/hospitality',
      bg: MARKET_IMG.lobby,
    },
  ];

  constructor() {
    inject(SeoService).update({
      title: 'Industries We Serve',
      description:
        '320 Grit builds across railroads, healthcare, behavioral health, advanced technology, tenant improvement, education, and hospitality — California construction expertise in every market.',
      canonicalPath: '/industries',
      image: MARKET_IMG.industries,
    });
  }
}
