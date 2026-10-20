import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { MarketIconComponent } from '../shared/market-icon/market-icon.component';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
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
  imports: [RouterLink, RevealDirective, MarketIconComponent, CtaBandComponent],
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
        'Rail construction demands zero-compromise safety and precision scheduling around live operations. 320 Grit ' +
        'delivers track systems, signal buildings, and maintenance facilities engineered for FRA compliance and ' +
        'long-term performance — keeping freight and passengers moving without disruption.',
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
        'Healthcare construction is mission-critical: ICRA compliance, OSHPD/HCAI standards, and zero tolerance for ' +
        'downtime. 320 Grit builds hospitals, medical office buildings, and imaging centers with infection control, ' +
        'medical gas, and life-safety systems engineered around patient outcomes.',
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
        'Behavioral health facilities must balance clinical safety with human dignity. 320 Grit delivers ' +
        'ligature-resistant inpatient units, residential treatment centers, and crisis stabilization units that meet ' +
        'California licensing and HCAI requirements — therapeutic environments built for healing.',
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
        'Mission-critical facilities demand flawless execution. 320 Grit constructs data centers, life sciences ' +
        'laboratories, and cleanrooms with redundant power, precision environmental controls, and validated ' +
        'commissioning — delivering zero-downtime environments for research and technology operations.',
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
        'Tenant improvements live or die on schedule. 320 Grit delivers fast-track office build-outs, corporate ' +
        'renovations, and occupied-space construction across California — phased work plans, after-hours execution, ' +
        'and minimal disruption to your operations while maximizing the return on every square foot.',
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
        'School construction runs on the academic calendar — there are no extensions. 320 Grit delivers K-12 ' +
        'campuses, higher education facilities, and classroom modernizations phased around school sessions, with ' +
        'student safety, DSA compliance, and durable, low-maintenance materials built into every project.',
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
        'Hospitality construction is about revenue per available room — every day offline costs money. 320 Grit ' +
        'delivers hotel renovations, restaurant build-outs, and resort upgrades on aggressive schedules, with ' +
        'phased construction that keeps properties operational and guest experience uncompromised.',
      href: '/industries/hospitality',
      bg: MARKET_IMG.lobby,
    },
  ];

  constructor() {
    inject(SeoService).update({
      title: 'Industries We Serve',
      description:
        '320 Grit is a California commercial contractor serving railroads, healthcare, behavioral health, advanced technology, tenant improvement, education, and hospitality markets — specialized construction expertise, on time and on budget.',
      canonicalPath: '/industries',
      image: MARKET_IMG.industries,
    });
  }
}
