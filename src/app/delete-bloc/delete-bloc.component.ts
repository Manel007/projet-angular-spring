
import { Component, OnInit } from '@angular/core';
import { BlocServiceService } from '../bloc-service.service';
import { Bloc } from '../model/Bloc';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-delete-bloc',
  templateUrl: './delete-bloc.component.html',
  styleUrls: ['./delete-bloc.component.css']
})
export class DeleteBlocComponent implements OnInit {
  deleteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private blocService: BlocServiceService) {}

  ngOnInit(): void {
    this.deleteForm = this.formBuilder.group({
      idBloc: ['']
    });
  }

  onSubmit() {
    const blocId = this.deleteForm.value.idBloc;
    this.blocService.removeBloc(blocId).subscribe(
      () => {
        console.log('Bloc supprimé avec succès');
        // Ajoutez des actions supplémentaires si nécessaire (par exemple, rediriger vers une autre page)
      },
      error => {
        console.error('Erreur lors de la suppression du bloc:', error);
        // Gérez les erreurs ici
      }
    );
  }
}


