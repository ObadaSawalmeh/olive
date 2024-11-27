import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconService } from '../../Services/Icons/icon.service';
@Component({
  standalone: true,
  selector: 'app-icon',
  template: ` <div [innerHTML]="svg"></div> `,
})
export class IconComponent {
  @Input() name!: string;
  svg: SafeHtml = '';

  constructor(
    private iconService: IconService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnChanges() {
    this.svg = this.sanitizer.bypassSecurityTrustHtml(
      this.iconService.getIcon(this.name)
    );
  }
}
