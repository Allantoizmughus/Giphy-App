import { Component, OnInit } from '@angular/core';
import { GifService } from '../gif.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private gifService:GifService) { }

  ngOnInit(): void {
  }

  search(searchTerm:string){
    if (searchTerm !==""){
       this.gifService.searchGifs(searchTerm)
       
    }
  }

}
