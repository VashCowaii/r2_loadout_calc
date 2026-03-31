const configAbility = {
  "fileName": "60012_MissionBattleEvent60012_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Character ID",
            "ID": 8005,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Trailblazer - Harmony[M]"
          },
          {
            "name": "Character ID",
            "ID": 8006,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Trailblazer - Harmony[F]"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-721276260\">MissionBattleEvent60012_CharacterForceVisible</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "UseTimes",
      "value": {
        "operator": "Variables[0] (UseTimes) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(UseTimes + 1)",
        "constants": [
          1
        ],
        "variables": [
          "UseTimes"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "UseTimes",
        "compareType": "<=",
        "value2": 5
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
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1,
            "conditions": {
              "name": "Enemy ID",
              "ID": 3025010,
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "characterName": "\"Harmonious Choir\" The Great Septimus"
            }
          },
          {
            "name": "Compare: Variable",
            "value1": "BGMChangeFlag",
            "compareType": "=",
            "value2": 0
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "BGMChangeFlag",
          "value": 1
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Enemy ID",
        "ID": 3025010,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": "\"Harmonious Choir\" The Great Septimus"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"252376560\">Enemy_W3_Sunday_P2SongState</a>"
        }
      ]
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
      "modifier": "<a class=\"gModGreen\" id=\"-721276260\">MissionBattleEvent60012_CharacterForceVisible</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1718357040\">Enemy_W3_Sunday_DuringBE</a>"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-721276260\">MissionBattleEvent60012_CharacterForceVisible</a>",
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