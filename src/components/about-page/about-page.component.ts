import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {
  middle_section = [
    {
      img: 'assets/about-page/Innovation.svg',
      title: 'Innovation',
      text: 'To make event planning easy, accessible, and enjoyable for everyone.'
    },
    {
      img: 'assets/about-page/Trust.svg',
      title: 'Trust',
      text: 'To be most trusted event service marketplace by connecting creativity with convenience.'
    },
    {
      img: 'assets/about-page/Customer-Centric.svg',
      title: 'Customer-Centric',
      text: 'Customer-centric event service marketplace by blending creativity with seamless convenience.'
    }
  ]

  last_section = [
    {
      icon: 'assets/about-page/Choose-your-event-type.svg',
      title: 'Choose your event type',
      text: "Select the type of event you're planning - whether it's a wedding, corporate event, birthday party, or any special occasion."
    },
    {
      icon: 'assets/about-page/Browse-vendors-by-pricing-or-rating.svg',
      title: 'Browse vendors by pricing or rating',
      text: 'Explore our curated list of professional vendors. Filter by price range, ratings, or specific services to find the perfect match for your event.'
    },
    {
      icon: 'assets/about-page/Send-enquiries-or-book-instantly.svg',
      title: 'Send enquiries or book instantly',
      text: 'Contact vendors directly with your requirements or use our instant booking feature for immediate confirmation. Secure your preferred vendors with ease.'
    },
    {
      icon: 'assets/about-page/Celebrate-with-confidence!.svg',
      title: 'Celebrate with confidence!',
      text: 'Relax and enjoy your special day knowing that all the details are taken care of by trusted professionals from Eventographer.'
    }
  ];


}
