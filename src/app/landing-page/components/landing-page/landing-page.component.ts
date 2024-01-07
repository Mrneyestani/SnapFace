import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit{

  userEmail! : string;
  

  constructor(private router: Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onContinue() : void {
    this.router.navigateByUrl('facesnaps')
  }

  onSubmitForm(form: NgForm): void {
    console.log(form.value);

  }

}
