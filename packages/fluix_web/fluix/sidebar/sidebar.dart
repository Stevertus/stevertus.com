
import 'dart:async';

import 'package:angular/angular.dart';
import 'package:fluix_web/fluix/icon/icon.dart';
import 'package:fluix_web/fluix/sidebar/sidebar-item/item.dart';
export 'package:fluix_web/fluix/sidebar/sidebar-item/item.dart';


@Component(
  selector: 'fluid-sidebar',
  styleUrls: ['sidebar.css'],
  templateUrl: 'sidebar.html',
  providers: [],
  directives: [NgIf,NgClass,FluidIcon,FluidSidebarItem],
  exports: [FluidSidebarItem]
)
class FluidSidebar {

  @Input('fixed') bool fixed = true;

  @Input('expanded') bool expanded = false;
  @Input('expandable') bool expandable = true;

  final _onChangeController = StreamController<bool>.broadcast();

  @Output()
  Stream<bool> get onChange => _onChangeController.stream;

  @ContentChildren(FluidSidebarItem,descendants: true)
  List<FluidSidebarItem> children;

  expand(){
    expanded = true;
    children.forEach((child) => child.expand());
  }
  shrink(){
    expanded = false;
    children.forEach((child) => child.shrink());
  }
  handleToggleExpand(){
    if(expandable){
      expanded ? shrink() : expand();
    }
    
  }

}