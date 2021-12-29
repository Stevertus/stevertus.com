// @Pipe({ name: 'safeHtml'})
// export class SafeHtmlPipe implements PipeTransform  {
//   constructor(private sanitized: DomSanitizer) {}
//   transform(value) {
//     return this.sanitized.bypassSecurityTrustHtml(value);
//     //return this.sanitized.bypassSecurityTrustHtml(value);
//   }
// }
import 'package:angular/angular.dart';
import 'package:ngsecurity/security.dart';

@Pipe('safeURL')
class SafeURLPipe {
  DomSanitizationService sanitizer;

  SafeURLPipe(this.sanitizer);

  SafeResourceUrl transform(String url) {
    return sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
