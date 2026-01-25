const configAbility = {
  "fileName": "Lingsha_Lingsha_BPAbility_BattleEvent_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Self-Made Battle-Events}}"
        },
        "value1": "BattleEvent_Lingsha_00_PointB3",
        "compareType": ">=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Self-Made Battle-Events}}"
          },
          "variableName": "BattleEvent_Lingsha_00_PointB3",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Lingsha_PointB3_CD[<span class=\"descriptionNumberColor\">Ember's Echo</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (0.75) || RETURN",
          "displayLines": "0.75",
          "constants": [],
          "variables": [
            0.75
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": [
          "Summon-Tag DMG"
        ],
        "attackType": "Follow-up"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Lingsha_Passive_Target"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Lingsha_Passive_Target_Eidolon6"
        }
      ]
    },
    {
      "name": "Trigger: Attack End",
      "fakeCharacterAttack": true
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "dispelCount": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      },
      "dispelOrder": "LastAdded"
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "healPercent": {
        "operator": "Variables[0] (0.12) || RETURN",
        "displayLines": "0.12",
        "constants": [],
        "variables": [
          0.12
        ]
      },
      "healFlat": {
        "operator": "Variables[0] (360) || RETURN",
        "displayLines": "360",
        "constants": [],
        "variables": [
          360
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[living]].[[sortByHPCurrent]]"
          },
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "healPercent": {
                "operator": "Variables[0] (0.4) || RETURN",
                "displayLines": "0.4",
                "constants": [],
                "variables": [
                  0.4
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Self-Made Battle-Events}}"
        },
        "modifier": "Lingsha_BPAbility_BattleEvent_LifeTime",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 4
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Self-Made Battle-Events}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Self-Made Battle-Events}}"
          },
          "ignoreHPLossTriggers": true,
          "ignoreDeathTriggers": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Lingsha_Eidolon6_Listen"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}