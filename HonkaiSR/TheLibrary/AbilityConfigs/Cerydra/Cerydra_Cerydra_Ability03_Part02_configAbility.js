const configAbility = {
  "fileName": "Cerydra_Cerydra_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "scope": "ContextCaster",
      "value": {
        "displayLines": "20"
      },
      "variableName": "DV_PursuedDamage_LimitCount"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "includeDyingTargets": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1716749059\">Cerydra_Ability02_Target</a>"
      },
      "noTargetFound": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Far Left Player Entity(no Memosprite)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1716749059\">Cerydra_Ability02_Target</a>",
              "valuePerStack": {
                "DV_PointAdded_Get": {
                  "displayLines": "1"
                }
              }
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Living State",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "livingState": "Mask_AliveOnly"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1716749059\">Cerydra_Ability02_Target</a>",
                  "valuePerStack": {
                    "DV_PointAdded_Get": {
                      "displayLines": "1"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1612575312\">Cerydra_Template_MaxPointHandle</a>",
      "variables": {
        "DV_AddPoint": {
          "displayLines": "2"
        }
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
        "DamageType": "Wind",
        "Damage": {
          "displayLines": "(2.4 + 2.4)"
        },
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "instanceTag": "Cerydra_Skill03_Attack",
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}