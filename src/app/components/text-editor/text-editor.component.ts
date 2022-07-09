import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import 'froala-editor/js/languages/fr';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/char_counter.min.js';
import 'froala-editor/js/plugins/code_beautifier.min.js';
import 'froala-editor/js/plugins/draggable.min.js';
import 'froala-editor/js/plugins/emoticons.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/third_party/image_tui.min.js';
import 'froala-editor/js/plugins/line_breaker.min.js';
import 'froala-editor/js/plugins/link.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/paragraph_style.min.js';
import 'froala-editor/js/plugins/paragraph_format.min.js';
import 'froala-editor/js/plugins/table.min.js';
import 'froala-editor/js/plugins/url.min.js';
import 'froala-editor/js/plugins/video.min.js';
import 'froala-editor/js/plugins/word_paste.min.js';


@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css'],
})
export class TextEditorComponent implements OnInit {
  @Input() text: string | null = '';
  @Output() updtText = new EventEmitter<string | null>();

  options: Object = {
    placeholderText: 'Descriptif',
    charCounterCount: true,
    language: 'fr',
    videoUpload: false,
    heightMin: 300,
    heightMax: 1000,
    imageUploadRemoteUrls: false,
    imageInsertButtons: ['imageBack', '|', 'imageByURL'],
    videoInsertButtons: ['videoBack', '|', 'videoByURL']
  };

  constructor() {}

  ngOnInit(): void {}
}
