import { Component } from '@angular/core';
import { FaqComponent, FaqItem } from '../../../../shared/components/faq/faq.component';

/**
 * Homepage FAQ section (Section 8 / "SECTION 13: FAQ").
 * Copy is verbatim from template-parts/home/home-page-faqs.php.
 * Rendering is delegated to the shared <app-faq> so every page's
 * FAQ stays 100% visually identical.
 */
@Component({
  selector: 'app-home-faq',
  imports: [FaqComponent],
  template: `<app-faq [faqs]="faqs" />`,
})
export class HomeFaqComponent {
  readonly faqs: FaqItem[] = [
    {
      q: 'What construction services does 320 Grit provide?',
      a: '320 Grit provides Bid-Build, Design-Build, Expert Witness, and Forensic Accounting services. Our approach is centered on helping owners and project teams make informed decisions, manage risk, control costs, and successfully deliver complex construction projects.',
    },
    {
      q: 'What industries does 320 Grit specialize in?',
      a: '320 Grit serves a range of commercial and specialized markets, including Rail Road, Hospital/MOB/Imaging, Behavioral Health, Advanced Technology/Lab, Commercial, Tenant Improvement, Educational, and Hospitality projects.',
    },
    {
      q: "What is 320 Grit's approach to construction projects?",
      a: 'Our approach is owner and team-centric, bringing the project team together from the earliest stages through completion. We focus on preconstruction, design and planning, construction, and delivery, with attention to communication, risk management, cost, schedule, and quality.',
    },
    {
      q: 'Can 320 Grit help with construction disputes or expert witness services?',
      a: 'Yes. 320 Grit provides Expert Witness services for construction-related matters, drawing on project knowledge and technical understanding to help evaluate issues, documentation, and project circumstances.',
    },
    {
      q: 'What is the difference between Bid-Build and Design-Build?',
      a: 'Bid-Build typically separates the design and construction phases, while Design-Build brings design and construction together under a more integrated delivery model. 320 Grit can help project owners determine which approach best aligns with their goals, schedule, budget, and project requirements.',
    },
    {
      q: 'What is construction forensic accounting?',
      a: 'Construction forensic accounting involves examining financial records, project documentation, costs, and other relevant information to help identify and evaluate financial issues associated with a construction project. 320 Grit provides Forensic Accounting services to support owners and project teams when detailed financial analysis is required.',
    },
    {
      q: 'How can I get started with 320 Grit on a construction project?',
      a: 'The first step is to contact 320 Grit and discuss your project, goals, challenges, and requirements. Our team can then determine how our construction services and expertise can best support your project from planning through delivery.',
    },
  ];
}
