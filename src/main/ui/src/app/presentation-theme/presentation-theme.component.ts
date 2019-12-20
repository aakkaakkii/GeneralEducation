import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PresentationTheme} from "../models/PresentationTheme";
import {PresentationThemeServiceService} from "../providers/presentation-theme-service.service";

@Component({
  selector: 'app-presentation-theme',
  templateUrl: './presentation-theme.component.html',
  styleUrls: ['./presentation-theme.component.css']
})
export class PresentationThemeComponent implements OnInit {

  presentationThemes: PresentationTheme[];
  selectedTheme: PresentationTheme;
  displayedColumns: string[] = ['id', 'title', 'description', 'action'];


  constructor(private presentationThemeService: PresentationThemeServiceService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.selectedTheme = new PresentationTheme();
    this.presentationThemes = [];
    this.presentationThemeService.loadData().subscribe(d => this.presentationThemes = d);
  }

  addTheme(){
    this.selectedTheme.creator = null;
    this.presentationThemeService.addData(this.selectedTheme).subscribe(d => this.presentationThemes.push(d));
  }

  deleteTheme(el){
    let index = this.presentationThemes.findIndex(e => e.id === el.id);
    this.presentationThemes.splice(index, index +1);
    console.log(el)

    this.presentationThemeService.deleteData(el).subscribe();
  }

  editTheme(){

  }

}
