import 'dart:html';

import 'package:angular/angular.dart';
import 'package:fluix_web/fluix/icon/icon.dart';
import 'package:fluix_web/fluix/modal/modal_service.dart';

@Component(
  selector: 'fluid-modal',
  styleUrls: ['modal.css'],
  templateUrl: 'modal.html',
  providers: [ClassProvider(ModalService)],
  directives: [Input, NgIf, FluidIcon],
)
class FluidModal implements OnInit, OnDestroy {
  ModalService modalService;
  HtmlElement element;

  FluidModal(this.modalService, this.element);

  @Input()
  String id;

  @Input()
  String title;

  @override
  void ngOnInit() {
    if (id != null) {
      document.body.append(element);
      modalService.add(this);
    } else {
      open();
    }
  }

  void open() {
    element.classes.add("fluidModal-open");
  }

  void close() {
    element.classes.remove("fluidModal-open");
  }

  void ngOnDestroy() {
    if (id != null) {
      modalService.remove(id);
    }
    //element.remove();
  }
}
