class UsedItems {
  static final items = <String>[];

  static void add(String b) {
    if (items.contains(b)) return;
    items.add(b);
  }
}
