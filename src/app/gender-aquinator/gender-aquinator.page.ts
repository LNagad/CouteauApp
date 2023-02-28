import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gender-aquinator',
  templateUrl: './gender-aquinator.page.html',
  styleUrls: ['./gender-aquinator.page.scss'],
})
export class GenderAquinatorPage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  clearContainer() {
    const answer = document.getElementById("answer") as HTMLDivElement
    const genderText = document.getElementById("genderText") as HTMLInputElement

    while (answer.firstChild) {
      answer.removeChild(answer.firstChild);
    }

    genderText.value = ''
  }

  async genderAquinator() {
    const genderText = document.getElementById("genderText") as HTMLInputElement
    let genderResponse = ''

    const divElement = document.createElement("div")
    divElement.setAttribute('class', 'mt-4 d-flex w-100')

    await this.http.get<any>('https://api.genderize.io/', {
      params: {
        name: genderText.value
      }
    }).subscribe((response) => {
      
        genderResponse = response.gender;

        if (genderResponse === "male") {
          divElement.innerHTML = `
          <img style="width: 50px;" src="../../assets/img/male.png" alt="an image">
          <h5 class="ms-2">Hombre</h5>
          `

        } else if (genderResponse === "female") {
           divElement.innerHTML = `
           <img style="width: 50px;" src="../../assets/img/female.png" alt="an image">
           <h5 class="ms-2">Mujer</h5>
           `
         }
        
      })
        
    const answer = document.getElementById("answer") as HTMLDivElement
    answer.appendChild(divElement)
  }
}
