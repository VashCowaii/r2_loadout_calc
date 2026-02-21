const configAbility = {
  "fileName": "4013015_Monster_W4_Claymore_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 4013013,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Furiae Praetor (Bug)",
        "isBaseCompare": true
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MaxSummonCount",
          "value": 4
        }
      ],
      "failed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MaxSummonCount",
          "value": 2
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "maxTargets": {
        "operator": "Variables[0] (MaxSummonCount) || RETURN",
        "displayLines": "MaxSummonCount",
        "constants": [],
        "variables": [
          "MaxSummonCount"
        ]
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4013013,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Furiae Praetor (Bug)",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target List}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 2
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          },
          "variableName": "SummonCount"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target List}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target List}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 2
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-662328641\">MModifier_Monster_W4_Claymore_Ability03_WeaponEff</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"328409415\">MModifier_Monster_W4_Claymore_Ability03_Summon</a>"
        }
      ],
      "noTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4013013,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Furiae Praetor (Bug)",
            "isBaseCompare": true
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-662328641\">MModifier_Monster_W4_Claymore_Ability03_WeaponEff</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "variableName": "TargetCount",
      "livingTargets": true
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_154) || Variables[1] (UnusedUnderThisBase_401) || Variables[2] (SummonCount) || MUL || ADD || Variables[3] (TargetCount) || DIV || RETURN",
          "displayLines": "((UnusedUnderThisBase_154 + (UnusedUnderThisBase_401 * SummonCount)) / TargetCount)",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_154",
            "UnusedUnderThisBase_401",
            "SummonCount",
            "TargetCount"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"622644189\">MModifier_Monster_W4_Claymore_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-351944820\">MModifier_Monster_W4_Claymore_Ability04_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "duration": {
        "operator": "Variables[0] (UnusedUnderThisBase_402) || RETURN",
        "displayLines": "UnusedUnderThisBase_402",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_402"
        ]
      },
      "valuePerStack": {
        "MDF_DamageTakenUpRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_403) || Variables[1] (TargetCount) || DIV || RETURN",
          "displayLines": "(UnusedUnderThisBase_403 / TargetCount)",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_403",
            "TargetCount"
          ]
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SummonCount",
      "value": 0
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"328409415\">MModifier_Monster_W4_Claymore_Ability03_Summon</a>"
      },
      "ifTargetFound": [
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          }
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__328409415\">MModifier_Monster_W4_Claymore_Ability03_Summon</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}