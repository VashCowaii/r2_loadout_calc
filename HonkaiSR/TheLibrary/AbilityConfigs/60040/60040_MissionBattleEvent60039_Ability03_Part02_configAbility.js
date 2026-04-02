const configAbility = {
  "fileName": "60040_MissionBattleEvent60039_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2000427421\">MissionBattleEvent60039_CharacterForceVisible</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "Monster_Sunday_MainStory380"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1718357040\">Enemy_W3_Sunday_DuringBE</a>"
    },
    {
      "name": "UI Display Event",
      "popUpText": "Horizon's Echo From Afar"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1153660745\">Enemy_W3_Sunday_P2BELockHP_2</a>"
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "variableName": "Train_TargetNumber"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
          "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}",
            "Train_TargetNumber"
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.2,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Imaginary"
        },
        "Tags": null,
        "attackType": "Ultimate"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
          "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}",
            "Train_TargetNumber"
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.2,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Imaginary"
        },
        "Tags": null,
        "attackType": "Ultimate"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
          "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}",
            "Train_TargetNumber"
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.2,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Imaginary"
        },
        "Tags": null,
        "attackType": "Ultimate"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
          "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}",
            "Train_TargetNumber"
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.2,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Imaginary"
        },
        "Tags": null,
        "attackType": "Ultimate"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
          "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}",
            "Train_TargetNumber"
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.2,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Imaginary"
        },
        "Tags": null,
        "attackType": "Ultimate"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "Monster_Sunday_MainStory380"
      },
      "ifTargetFound": [
        {
          "name": "Consume",
          "consumeFrom": "CurrentHP",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "consumePercent": 1,
          "consumeFloor": 0.0009999999,
          "attackType": "Ultra",
          "DamageType": {
            "name": "Damage Type Source",
            "sourceType": "Imaginary"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 0,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2000427421\">MissionBattleEvent60039_CharacterForceVisible</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1718357040\">Enemy_W3_Sunday_DuringBE</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "Monster_Sunday_MainStory380"
      }
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2000427421\">MissionBattleEvent60039_CharacterForceVisible</a>",
      "modifierFlags": [
        "STAT_ForceActionable"
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}