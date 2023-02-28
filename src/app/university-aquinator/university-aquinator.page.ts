import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface University {
  name: string;
  domains: string[];
  web_pages: string[];
}

@Component({
  selector: 'app-university-aquinator',
  templateUrl: './university-aquinator.page.html',
  styleUrls: ['./university-aquinator.page.scss'],
})

export class UniversityAquinatorPage {
  countryName: string = '';
  universities: University[] = [];

  constructor(private http: HttpClient) {}

  searchUniversities() {
    const apiUrl = `http://universities.hipolabs.com/search?country=${this.countryName}`;
    this.http.get<University[]>(apiUrl).subscribe(data => {
      this.universities = data;
    });
  }

  
}