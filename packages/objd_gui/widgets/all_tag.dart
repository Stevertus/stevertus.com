import 'dart:convert';

import 'package:objd/core.dart';
import 'package:objd_gui/data/items.dart';

class TagAll extends Widget {
  @override
  Widget generate(Context context) {
    return RawFile(
      'tags/items/all.json',
      json.encode(
        {
          'values': UsedItems.items,
        },
      ),
    );
  }
}
