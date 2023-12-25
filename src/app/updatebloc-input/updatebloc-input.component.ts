import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Bloc } from '../model/Bloc';
import { BlocServiceService } from '../bloc-service.service';

@Component({
  selector: 'app-updatebloc-input',
  templateUrl: './updatebloc-input.component.html',
  styleUrls: ['./updatebloc-input.component.css']
})
export class UpdateblocInputComponent{
  @Input() bloc: Bloc = new Bloc();
  @Output() notification = new EventEmitter();

  constructor(private blocService: BlocServiceService) {}
  updateBloc() {
    this.blocService.editBloc(this.bloc).subscribe(
      (data) => {
        console.log('Bloc updated successfully:', data);
        this.notification.emit('update-success');
      },
      (error) => {
        console.error('Error updating bloc:', error);
      }
    );
  }
}