import {Component} from '@angular/core';
import {StSwiperCardComponent} from "../../widgets/st-swiper-card/st-swiper-card.component";
import { StBackTopComponent } from '../../widgets/st-back-top/st-back-top.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    StSwiperCardComponent,
    StBackTopComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

export default HomeComponent;
