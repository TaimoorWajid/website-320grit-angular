import { Component, ElementRef, input, model, signal, viewChild } from '@angular/core';
import { CAREERS_ICONS } from '../careers-icons';
import { SafeHtmlPipe } from '../../../../shared/pipes/safe-html.pipe';

const MAX_BYTES = 5 * 1024 * 1024;
const ACCEPT = '.pdf,.doc,.docx';

/**
 * Resume/document dropzone. Verbatim behavior from the templates:
 * dashed zone with "<strong>Drag & drop …</strong> or <span>Browse …</span>"
 * text, PDF/DOC/DOCX ≤ 5MB rule (error "File must be 5MB or smaller."),
 * on select the zone hides and a filename preview + remove × shows.
 * The selected File is exposed via two-way `file` model binding.
 */
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss',
  imports: [SafeHtmlPipe],
})
export class FileUploadComponent {
  readonly label = input.required<string>();
  readonly hint = input('PDF, DOC, DOCX (Max 5MB)');
  readonly dropLead = input('Drag & drop your file here');
  readonly dropBrowse = input('Browse File');
  readonly multiple = input(false);
  readonly inputId = input.required<string>();
  readonly inputName = input.required<string>();

  /** Selected files (single mode exposes the first). */
  readonly file = model<File | null>(null);
  readonly files = model<File[]>([]);

  protected readonly icons = CAREERS_ICONS;
  protected readonly error = signal('');
  protected readonly dragging = signal(false);
  private readonly fileInput = viewChild<ElementRef<HTMLInputElement>>('fileInput');

  protected accept = ACCEPT;

  private handleFiles(list: FileList | null): void {
    this.error.set('');
    if (!list || list.length === 0) return;
    const picked = Array.from(list);
    const tooBig = picked.find((f) => f.size > MAX_BYTES);
    if (tooBig) {
      this.error.set('File must be 5MB or smaller.');
      return;
    }
    if (this.multiple()) {
      this.files.set(picked);
      this.file.set(picked[0] ?? null);
    } else {
      this.file.set(picked[0]);
      this.files.set([picked[0]]);
    }
  }

  onInputChange(event: Event): void {
    this.handleFiles((event.target as HTMLInputElement).files);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.dragging.set(false);
    this.handleFiles(event.dataTransfer?.files ?? null);
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragging.set(true);
  }

  onDragLeave(): void {
    this.dragging.set(false);
  }

  openPicker(): void {
    this.fileInput()?.nativeElement.click();
  }

  remove(index = 0): void {
    const next = this.files().filter((_, i) => i !== index);
    this.files.set(next);
    this.file.set(next[0] ?? null);
    const input = this.fileInput()?.nativeElement;
    if (input) input.value = '';
  }
}
