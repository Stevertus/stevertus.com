// @Pipe({ name: 'safeHtml'})
// export class SafeHtmlPipe implements PipeTransform  {
//   constructor(private sanitized: DomSanitizer) {}
//   transform(value) {
//     return this.sanitized.bypassSecurityTrustHtml(value);
//     //return this.sanitized.bypassSecurityTrustHtml(value);
//   }
// }
import 'package:angular/angular.dart';
import 'package:angular/security.dart';

@Pipe('safeURL')
class SafeURLPipe implements PipeTransform {
  DomSanitizationService sanitizer;

  SafeURLPipe(this.sanitizer);

  transform(url) {
    return sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
