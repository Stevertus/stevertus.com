define(['dart_sdk'], (function load__packages__objd__basic__types__attribute(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var attribute = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $toString = dartx.toString;
  var AttributeTypeL = () => (AttributeTypeL = dart.constFn(dart.legacy(attribute.AttributeType)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  const CT = Object.create(null);
  var L0 = "package:objd/basic/types/attribute.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: attribute.AttributeType.prototype,
        [AttributeType_type]: "minecraft:generic.armor"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: attribute.AttributeType.prototype,
        [AttributeType_type]: "minecraft:generic.armor_toughness"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: attribute.AttributeType.prototype,
        [AttributeType_type]: "minecraft:generic.attack_damage"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: attribute.AttributeType.prototype,
        [AttributeType_type]: "minecraft:generic.attack_knockback"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: attribute.AttributeType.prototype,
        [AttributeType_type]: "minecraft:generic.attack_speed"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: attribute.AttributeType.prototype,
        [AttributeType_type]: "minecraft:generic.flying_speed"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: attribute.AttributeType.prototype,
        [AttributeType_type]: "minecraft:generic.follow_range"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: attribute.AttributeType.prototype,
        [AttributeType_type]: "minecraft:generic.knockback_resistance"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: attribute.AttributeType.prototype,
        [AttributeType_type]: "minecraft:generic.luck"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: attribute.AttributeType.prototype,
        [AttributeType_type]: "minecraft:generic.max_health"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: attribute.AttributeType.prototype,
        [AttributeType_type]: "minecraft:generic.movement_speed"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: attribute.AttributeType.prototype,
        [AttributeType_type]: "minecraft:horse.jump_strength"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: attribute.AttributeType.prototype,
        [AttributeType_type]: "minecraft:zombie.spawn_reinforcements"
      });
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], AttributeTypeL());
    },
    get C14() {
      return C14 = dart.constList([C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], AttributeTypeL());
    }
  }, false);
  var AttributeType_type = dart.privateName(attribute, "AttributeType.type");
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
  var C0;
  var C14;
  attribute.Attributes = class Attributes extends core.Object {};
  (attribute.Attributes.new = function() {
    ;
  }).prototype = attribute.Attributes.prototype;
  dart.addTypeTests(attribute.Attributes);
  dart.addTypeCaches(attribute.Attributes);
  dart.setLibraryUri(attribute.Attributes, L0);
  dart.defineLazy(attribute.Attributes, {
    /*attribute.Attributes.all*/get all() {
      return C0 || CT.C0;
    },
    /*attribute.Attributes.generic*/get generic() {
      return C14 || CT.C14;
    },
    /*attribute.Attributes.armor*/get armor() {
      return C1 || CT.C1;
    },
    /*attribute.Attributes.armor_toughness*/get armor_toughness() {
      return C2 || CT.C2;
    },
    /*attribute.Attributes.attack_damage*/get attack_damage() {
      return C3 || CT.C3;
    },
    /*attribute.Attributes.attack_knockback*/get attack_knockback() {
      return C4 || CT.C4;
    },
    /*attribute.Attributes.attack_speed*/get attack_speed() {
      return C5 || CT.C5;
    },
    /*attribute.Attributes.flying_speed*/get flying_speed() {
      return C6 || CT.C6;
    },
    /*attribute.Attributes.follow_range*/get follow_range() {
      return C7 || CT.C7;
    },
    /*attribute.Attributes.knockback_resistance*/get knockback_resistance() {
      return C8 || CT.C8;
    },
    /*attribute.Attributes.luck*/get luck() {
      return C9 || CT.C9;
    },
    /*attribute.Attributes.max_health*/get max_health() {
      return C10 || CT.C10;
    },
    /*attribute.Attributes.movement_speed*/get movement_speed() {
      return C11 || CT.C11;
    },
    /*attribute.Attributes.horse_jump_strength*/get horse_jump_strength() {
      return C12 || CT.C12;
    },
    /*attribute.Attributes.zombie_spawn_reinforcements*/get zombie_spawn_reinforcements() {
      return C13 || CT.C13;
    }
  }, true);
  attribute.AttributeType = class AttributeType extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (AttributeTypeL().is(other) && other.type == this.type) {
        return true;
      }
      if (StringL().is(other) && other == this.type) {
        return true;
      }
      return false;
    }
    toString() {
      return this.type;
    }
  };
  (attribute.AttributeType.new = function(type) {
    this[type$] = type;
    ;
  }).prototype = attribute.AttributeType.prototype;
  dart.addTypeTests(attribute.AttributeType);
  dart.addTypeCaches(attribute.AttributeType);
  const type$ = AttributeType_type;
  dart.setMethodSignature(attribute.AttributeType, () => ({
    __proto__: dart.getMethods(attribute.AttributeType.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(attribute.AttributeType, L0);
  dart.setFieldSignature(attribute.AttributeType, () => ({
    __proto__: dart.getFields(attribute.AttributeType.__proto__),
    type: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(attribute.AttributeType, ['_equals', 'toString']);
  dart.trackLibraries("packages/objd/basic/types/attribute", {
    "package:objd/basic/types/attribute.dart": attribute
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["attribute.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAkFA;;;;;MAhFmC,wBAAG;;;MAiBH,4BAAO;;;MAeb,0BAAK;;;MAGL,oCAAe;;;MAIf,kCAAa;;;MAIb,qCAAgB;;;MAIhB,iCAAY;;;MAIZ,iCAAY;;;MAIZ,iCAAY;;;MAIZ,yCAAoB;;;MAIpB,yBAAI;;;MAGJ,+BAAU;;;MAIV,mCAAc;;;MAId,wCAAmB;;;MAInB,gDAA2B;;;;;IAKzC;;;;;;;UAIY;AACvB,UAAU,oBAAN,KAAK,KAAqB,AAAM,AAAK,KAAN,SAAS;AAC1C,cAAO;;AAET,UAAU,aAAN,KAAK,KAAc,AAAM,KAAD,IAAI;AAC9B,cAAO;;AAET,YAAO;IACT;;AAIE,YAAO;IACT;;;IAhByB;;EAAK","file":"attribute.unsound.ddc.js"}');
  // Exports:
  return {
    basic__types__attribute: attribute
  };
}));

//# sourceMappingURL=attribute.unsound.ddc.js.map
