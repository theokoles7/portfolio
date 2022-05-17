import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.http.post("https://formspree.io/f/mlezazoj", {"email": "gabrieltrahan777@hotmail.com", "message": "asdkgfjhasdgljaskdfg"});
  }

}
