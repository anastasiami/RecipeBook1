import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
condition: boolean;

  constructor(private router: Router) {
/*
    this.router.events.subscribe(val => {
      // tslint:disable-next-line:triple-equals
      if (location.pathname.toString() != '/recipes'){
        console.log(this.condition);
        this.condition = false;
        console.log(this.condition);
      }
    });*/
  }

  ngOnInit(): void {
   //this.condition =  this.router.isActive('/recipes',  true);


  }
  }

