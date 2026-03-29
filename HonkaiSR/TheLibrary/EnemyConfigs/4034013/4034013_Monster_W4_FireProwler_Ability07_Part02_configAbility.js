const configAbility = {
  "fileName": "4034013_Monster_W4_FireProwler_Ability07_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-415724336\">Monster_W4_FireProwler_MainStory_04</a>"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "valueType": "Layer",
      "variableName": "AttackCount",
      "modifierName": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
      "multiplier": {
        "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
        "displayLines": "{[Skill07[0]]}",
        "constants": [],
        "variables": [
          "{[Skill07[0]]}"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
      "addStacksPerTrigger": {
        "operator": "Variables[0] (AttackCount) || INVERT || Variables[1] ({[Skill07[0]]}) || DIV || RETURN",
        "displayLines": "(-AttackCount / {[Skill07[0]]})",
        "constants": [],
        "variables": [
          "AttackCount",
          "{[Skill07[0]]}"
        ]
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "entityClass": "Enemy",
      "maximum": 0,
      "assignState": "True",
      "barType": "FireProwler",
      "trigger": "Step_01"
    },
    {
      "name": "Update Displayed Energy Bar",
      "entityClass": "Enemy",
      "barType": "FireProwler",
      "trigger": "NumChange_Purge"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
          "displayLines": "{[Skill07[2]]}",
          "constants": [],
          "variables": [
            "{[Skill07[2]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (AttackCount) || RETURN",
        "displayLines": "AttackCount",
        "constants": [],
        "variables": [
          "AttackCount"
        ]
      },
      "Event": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill07[1]]}) || RETURN",
              "displayLines": "{[Skill07[1]]}",
              "constants": [],
              "variables": [
                "{[Skill07[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1484368126\">Enemy_W4_FireProwler_10_NoMask</a>"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-415724336\">Monster_W4_FireProwler_MainStory_04</a>"
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "Skill07_HealHP"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill07_HealHP",
          "value": {
            "operator": "Variables[0] (Skill07_HealHP) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Skill07_HealHP + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Skill07_HealHP"
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-834356036\">Enemy_W4_FireProwler_01_HPBack</a>[<span class=\"descriptionNumberColor\">Enfettered</span>]"
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        }
      ]
    },
    {
      "name": "Reconstruct Modifier",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "casterFilter": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "counter": 1,
      "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
      "execute": [
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
          "variable": "MDF_RallyHP",
          "target2": null,
          "variable2": "Skill07_HealHPRatio"
        }
      ]
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "healPercent": {
        "operator": "Variables[0] (Skill07_HealHPRatio) || Variables[1] (Skill07_HealHP) || MUL || RETURN",
        "displayLines": "(Skill07_HealHPRatio * Skill07_HealHP)",
        "constants": [],
        "variables": [
          "Skill07_HealHPRatio",
          "Skill07_HealHP"
        ]
      },
      "formula": "Heal from Target MaxHP"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
      "onlyRemoveOwnersInstance": true,
      "removeAllInstances": true
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1169574682\">Enemy_W4_FireProwler_Charge</a>[<span class=\"descriptionNumberColor\">Silent Sorrow</span>]"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__309826148\">Monster_W4_FireProwler_Ability07Mark</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}