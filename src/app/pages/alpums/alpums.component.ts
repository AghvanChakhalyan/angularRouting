import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {AlbumsModel} from '../../core/models/albumModel';
import {AlbumsService} from '../../core/services/albums.service';


@Component({
  selector: 'app-alpums',
  templateUrl: './alpums.component.html',
  styleUrls: ['./alpums.component.css']
})
export class AlpumsComponent implements OnInit {

  public albums: Array<AlbumsModel> = [];

  constructor(private activeRoute: ActivatedRoute, private albume: AlbumsService) {
  }

  ngOnInit() {
    this.albume.getAlbume()
      .subscribe((data: Array<AlbumsModel>) => {
          this.albums = data;
        },
        (err) => {
          this.albums = err;
        });
  }

}
