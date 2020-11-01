import 'package:fluix_web/fluix/modal/modal.dart';

final Map<String, FluidModal> modals = {};

class ModalService {
  void add(FluidModal modal) {
    // add modal to array of active modals
    if (modal.id != null) {
      modals[modal.id] = modal;
    }
  }

  void remove(String id) {
    // remove modal from array of active modals
    modals.remove(id);
  }

  void open(String id) {
    // open modal specified by id
    final mod = modals[id];
    if (mod != null) mod.open();
  }

  void close(String id) {
    // close modal specified by id
    final mod = modals[id];
    if (mod != null) mod.close();
  }
}
