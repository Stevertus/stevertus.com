import 'package:angular/angular.dart';

@Component(
  selector: 'my-not-found',
  styles: [
    'div {height: 400px;margin: 64px}',
    'h2 { font-size: 36px;color: var(--primary);font-weight: 900; }'
  ],
  template:
      '<div><h2>Page not found</h2><br><p>I know of this issue and a majority of my generators are not working at the moment. Currently I am investigating the build issues that probably caused this. I am very sorry.</p></div>',
)
class NotFoundComponent {}
