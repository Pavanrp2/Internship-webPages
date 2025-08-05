import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-preference-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './preference-page.component.html',
  styleUrl: './preference-page.component.scss'
})
export class PreferencePageComponent implements OnInit {
  constructor(private http: HttpClient) {}

  categories: any[] = [];
  options: { option_id: number; value: boolean }[] = [];

  ngOnInit(): void {
    this.loadPreferences();
  }

  fetchCategories() {
    return this.http.get<any>('http://192.168.0.109:8010/event/fetch/preference/category');
  }

  fetchOptions() {
    return this.http.get<any>('http://192.168.0.109:8010/event/fetch/preference/options');
  }

  updatePreference(option_id: number, value: boolean) {
    const update = {
      preferences: [{ option_id, value }]
    };
    return this.http.post('http://192.168.0.109:8010/event/api/user/preferences/bulk', update);
  }

  loadPreferences() {
    this.fetchCategories().subscribe((categoryRes: any) => {
      this.fetchOptions().subscribe((optionRes: any) => {
        console.log('Categories from backend:', categoryRes);
        console.log('Options from backend:', optionRes);

        this.options = optionRes.map((opt: any) => ({
          option_id: opt.id,
          value: false
        }));

        this.categories = categoryRes.map((category: any) => {
          return {
            ...category,
            options: optionRes.filter((optn: any) => optn.category === category.id)
          };
        });
      });
    });
  }

  getOptionValue(optionId: number): boolean {
    return this.options.find(option => option.option_id === optionId)?.value || false;
  }

  onToggle(optionId: number): void {
    const currentValue = this.getOptionValue(optionId);
    const newValue = !currentValue;

    this.updatePreference(optionId, newValue).subscribe(() => {
      const option = this.options.find(opt => opt.option_id === optionId);
      if (option) {
        option.value = newValue;
      }
      console.log(`Updated option ${optionId} to ${newValue}`);
    });
  }
}
