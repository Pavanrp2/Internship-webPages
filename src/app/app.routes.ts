import { Routes } from '@angular/router';
import { AdvertisePageComponent } from '../components/advertise-page/advertise-page.component';
import { ReviewPageComponent } from '../components/review-page/review-page.component';
import { PreferencePageComponent } from '../components/preference-page/preference-page.component';
import { AboutPageComponent } from '../components/about-page/about-page.component';
import { ContactPageComponent } from '../components/contact-page/contact-page.component';
import { SubscriptionPageComponent } from '../components/subscription-page/subscription-page.component';
import { AcSettingsComponent } from '../components/ac-settings/ac-settings.component';

export const routes: Routes = [
    {
        path:'advertise',
        component: AdvertisePageComponent
    },
    {
        path: 'review',
        component: ReviewPageComponent
    },
    {
        path:'preferences',
        component: PreferencePageComponent
    },
    {
        path:'about',
        component: AboutPageComponent
    },
    {
        path:'contact',
        component: ContactPageComponent
    },
    {
        path: 'subscription',
        component:SubscriptionPageComponent
    },
    {
        path: 'acsettings',
        component: AcSettingsComponent
    }
];
