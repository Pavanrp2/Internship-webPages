import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-subscription-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscription-page.component.html',
  styleUrl: './subscription-page.component.scss'
})
export class SubscriptionPageComponent {
  user = {
    name : 'David Smith',
    email: 'Davidsmith@gmail.com',
    initial: 'DS'
  }

  currentPlan = {
    type: 'Premium',
    expiresIn: '30 Days',
    validTill: '24 May 2025'
  }

  standardPlans = [
    {
      name : 'standard',
      price : 2999,
      features : [
        '30 Quotes per month',
        '5 GB of disk space',
        'Standard profile',
        '24/7 support',
        'Direct chat with customers',
        'Verified badge',
        '24/7 Priority support'
      ]
    }
  ]
  premiumPlans = [
    {
      name: 'Premium',
      price : 4999,
      features : [
        '50 Quotes per month',
        '8 GB storage access',
        'Standard profile',
        'Direct chat with customers',
        'Verified badge',
        '24/7 Priority support',
        'Direct chat with customers',
        'Verified badge',
        '24/7 Priority support'
      ]
    }
  ]

}
