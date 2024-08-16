import { Component } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrl: './loan.component.css'
})
export class LoanComponent {
 name: string = '';
 annual: number = 0;
 bureauscore: string = '' // to check bureauscore
 submitted: boolean = false;

 ngOnInit()
 {
    this.CalculateBureauScore(); //initiating the Bureau Score
 }

 
 CalculateBureauScore()
 {
   if(this.annual > 10000 && this.annual < 20000)
   {
      this.bureauscore = "400, You are Eligible For The Loan Upto 50,000 to 1 Lakh(T&C Apply)";
   }

   else if(this.annual > 20000 && this.annual < 50000)
   {
    this.bureauscore = "650, You are Eligible For the Loan Upto 1 lakh to 2 Lakh(T&C Apply)";
   }

   else if(this.annual > 50000 && this.annual < 199999)
   {
    this.bureauscore = "850, You are Eligible For the Loan Upto 2 Lakh to 5 Lakh(T&C Apply)";
   }

   else if(this.annual >= 200000)
   {
    this.bureauscore = "Sorry, Income More than 200000 is Over Exceed For Loan";
   }

   else if(this.annual <= 10000)
   {
    this.bureauscore = "Sorry, You Are Not Eligible for the Loan";
   }

 }

 onSubmit(form: any): void {
  this.submitted = true;
  this.CalculateBureauScore(); // Ensure the score is calculated when submitting
  if (form.valid) {
    this.submitted = true;
  } else {
    alert('Please fill in all the required fields.');
  }
 }
}
