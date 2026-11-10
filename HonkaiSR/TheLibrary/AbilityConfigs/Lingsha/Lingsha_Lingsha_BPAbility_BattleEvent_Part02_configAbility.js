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
          "target": "{{Fuyuan}}"
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
            "target": "{{Fuyuan}}"
          },
          "value": 0,
          "variableName": "BattleEvent_Lingsha_00_PointB3"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"551246003\">Lingsha_PointB3_CD</a>[<span class=\"descriptionNumberColor\">Ember's Echo</span>]",
          "duration": {
            "displayLines": "2"
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
          "displayLines": "0.75"
        },
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "Tags": [
          "Summon-Tag DMG"
        ],
        "attackType": "Follow-up"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1849801979\">Lingsha_Passive_Target</a>"
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
          "functionName": "<a class=\"gTempYellow\" id=\"988152442\">Lingsha_Passive_Target_Eidolon6</a>"
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
        "displayLines": "1"
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
        "displayLines": "0.12"
      },
      "healFlat": {
        "displayLines": "360"
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
                "displayLines": "0.4"
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
          "target": "{{Fuyuan}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1876847773\">Lingsha_BPAbility_BattleEvent_LifeTime</a>",
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
            "target": "{{Fuyuan}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Fuyuan}}"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1458980452\">Lingsha_Eidolon6_Listen</a>"
            }
          ]
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}