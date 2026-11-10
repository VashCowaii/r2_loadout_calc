const configAbility = {
  "fileName": "Cyrene_Cyrene_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1682831339\">Cyrene_ChargeEnergy</a>",
      "variables": {
        "parameter[0]_AddValue": {
          "displayLines": "3"
        }
      }
    },
    {
      "name": "Define Custom Variable with Team Count",
      "variableName": "EnemyCount",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "living": true
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "displayLines": "0.3"
        },
        "dmgFormula": "Max HP Scaling",
        "Toughness": {
          "displayLines": 15
        },
        "Tags": null
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "EnemyCount"
      },
      "execute": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "conditions": {
            "name": "NOT",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1383897460\">Cyrene_AbilityTarget</a>"
            }
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "0.3"
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.3,
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
                },
                "Tags": null
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1383897460\">Cyrene_AbilityTarget</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "displayLines": "0.3"
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.7,
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "Tags": null
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1383897460\">Cyrene_AbilityTarget</a>",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}