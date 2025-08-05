import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-review-page',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent {
  constructor(private http: HttpClient) {}

  reviewData = {
    name: '',
    email: '',
    rating: 0,
    review_text: ''
  };

  private reviewAPI = 'http://192.168.0.109:8010/event/submit/customer/vendor/review/';

  onSubmit(form: NgForm) {
    console.log('Submitting form...', this.reviewData);
    this.http.post<any>(this.reviewAPI, this.reviewData).subscribe({
      next: (response) => {
        form.resetForm();
      },
      error: (err) => {
        console.error('API Error:', err);
        form.resetForm();
      }
    });
  }
}
