import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-age-aquinator',
  templateUrl: './age-aquinator.page.html',
  styleUrls: ['./age-aquinator.page.scss'],
})
export class AgeAquinatorPage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  clearContainer() {
    const answer = document.getElementById("AgeAnswer") as HTMLDivElement
    const ageText = document.getElementById("ageText") as HTMLInputElement

    while (answer.firstChild) {
      answer.removeChild(answer.firstChild);
    }

    ageText.value = ''
  }

  async ageAquinator() {
    const ageText = document.getElementById("ageText") as HTMLInputElement
    const answer = document.getElementById("AgeAnswer") as HTMLDivElement

    await this.http.get<any>('https://api.agify.io/', {
      params: {
        name: ageText.value
      }
    }).subscribe((response) => {
      if (response != null) {
        answer.appendChild(this.getContainer(response.age))
      }
    })
    ageText.value = ''
  }


   getContainer(age: any) {
    const divElement = document.createElement("div")
    divElement.setAttribute('class', 'mt-4 d-flex flex-column w-25')

    if (age <= 10) {
     
     divElement.innerHTML = `
     <h5 class="mt-2">Eres muy joven</h5>
     <h5 class="mt-2">Edad: ${age}</h5>
     <img style="width: 50px;" src="../../assets/img/children.png" alt="an image">
     `
    } else if (age < 18) { 
      divElement.innerHTML = `
      <h5 class="mt-2">Eres Joven</h5>
      <h5 class="mt-2">Edad: ${age}</h5>
      <img style="width: 50px;" src="../../assets/img/young.png" alt="an image">
      `
      
    } else if (age <= 30) {
      
      divElement.innerHTML = `
      <h5 class="mt-2">Eres Adulto</h5>
      <h5 class="mt-2">Edad: ${age}</h5>
      <img style="width: 50px;" src="../../assets/img/adult.png" alt="an image">
      `
    } else {
      divElement.innerHTML = `
      <h5 class="mt-2">Eres Anciano</h5>
      <h5 class="mt-2">Edad: ${age}</h5>
      <img style="width: 50px;" src="../../assets/img/ancient.png" alt="an image">
      `
    }
    


    return divElement
  }


}
