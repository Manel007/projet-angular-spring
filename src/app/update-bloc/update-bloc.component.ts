import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlocServiceService } from '../bloc-service.service';
import { ChambreServiceService } from '../chambre-service.service';
import { FoyerServiceService } from '../foyer-service.service';
import { Bloc } from '../model/Bloc';
import { Chambre } from '../model/Chambre';
import { Foyer } from '../model/Foyer';

@Component({
  selector: 'app-update-bloc',
  templateUrl: './update-bloc.component.html',
  styleUrls: ['./update-bloc.component.css']
})
export class UpdateBlocComponent implements OnInit {
  showUpdateBlocForm = false;
  blocs: Bloc[] = [];
  blocToUpdate: Bloc = new Bloc();

  constructor(private blocService: BlocServiceService) {}

  ngOnInit(): void {
    this.blocService.getBloc().subscribe(
      (data) => {
        console.log(data);
        this.blocs = data;
      }
    );
  }

  updateBloc(bloc: Bloc) {
    this.showUpdateBlocForm = true;
    this.blocToUpdate = bloc;
  }

  handleNotification(event: any) {
    this.showUpdateBlocForm = !this.showUpdateBlocForm;
  }
}