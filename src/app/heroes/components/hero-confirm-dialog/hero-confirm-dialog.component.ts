import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-confirm dialog',
  templateUrl: './hero-confirm-dialog.component.html',
  styles: [],
})
export class HeroConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<HeroConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero,
  ) {}

  public onNoClick(): void {
    this.dialogRef.close(false);
  }

  public onNoConfirm(): void {
    this.dialogRef.close(true);
  }
}
