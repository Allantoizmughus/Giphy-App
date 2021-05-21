import { Component, OnInit, OnDestroy } from '@angular/core';
import { GifService } from '../gif.service';
import{Subscription} from 'rxjs'

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit,OnDestroy {
gifs:any[]=[];
subscription:Subscription

  constructor(private gifService:GifService) { }

  ngOnInit(): void {
    this.gifService.getTrendingGifs()
    this.subscription=this.gifService.getGifs()
    .subscribe((response:any)=>{
      this.gifs=response
    })
  }
 ngOnDestroy(){
   this.subscription.unsubscribe();
 }
}
