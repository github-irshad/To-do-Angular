import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateService} from '../../services/state.service';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './header.component.html',
  styles: '',
})
export class HeaderComponent {
  searchService = inject(StateService);
  searchControl = new FormControl("");
  ngOnInit(){
    this.searchControl.valueChanges.pipe(debounceTime(300)).subscribe(
      (value)=>{
        this.searchService.searchSubject.next(value||"");
      }
    )
  }
}
