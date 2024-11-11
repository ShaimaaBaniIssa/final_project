import { Component } from '@angular/core';
import { ContactService } from 'src/app/Services/contact.service';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
constructor(public home:HomeService, public contact :ContactService){contact.getContactPage()}
logoimage =localStorage.getItem("logoimage");
}
