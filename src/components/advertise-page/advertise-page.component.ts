import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-advertise-page',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './advertise-page.component.html',
  styleUrl: './advertise-page.component.scss'
})
export class AdvertisePageComponent {
  message: string = '';
  private apiUrl = 'http://192.168.0.109:8010/event/request/advertisement';

  constructor(private http: HttpClient) {}

  formData = {
    user_name: '',
    user_email: '',
    date: '',
    subject: '',
    description: ''
  };

  onSubmit(form: NgForm): void {
    this.http.post(this.apiUrl, this.formData).subscribe({
      next: (res) => {
        this.message = 'Submitted Successfully!';
        form.resetForm();
      },
      error: (err) => {
        this.message = 'Submission Error!';
      }
    });
  }
}
