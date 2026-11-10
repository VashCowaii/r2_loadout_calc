const configAbility = {
  "fileName": "Guinaifen_Guinaifen_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{ST and Blast}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1962050217\">Guinaifen_Eidolon1_StatusResistance</a>[<span class=\"descriptionNumberColor\">Slurping Noodles During Handstand</span>]",
              "duration": {
                "displayLines": "2"
              },
              "baseChance": {
                "displayLines": "1"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.1"
                }
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "searchRandom": true,
          "maxTargets": 3,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_DOT_Burn"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "baseChance": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "Modifier_Burn_DamagePercentage": {
                      "displayLines": "(2.18208 + 0.4)"
                    }
                  },
                  "stackFlag": "CharacterSkill"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "baseChance": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "Modifier_Burn_DamagePercentage": {
                      "displayLines": "2.18208"
                    }
                  },
                  "stackFlag": "CharacterSkill"
                }
              ]
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "1.2"
            },
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "0.4"
            },
            "Toughness": {
              "displayLines": "Blast Toughness Value"
            },
            "Tags": null
          }
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}