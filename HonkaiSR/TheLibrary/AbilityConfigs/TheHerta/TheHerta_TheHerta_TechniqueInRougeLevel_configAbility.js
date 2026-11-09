const configAbility = {
  "fileName": "TheHerta_TheHerta_TechniqueInRougeLevel",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2036504722\">TheHerta_TechniqueInRougeLevel</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2036504722\">TheHerta_TechniqueInRougeLevel</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -60,
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "TargetHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Null Type",
                        "DamageFlat": {
                          "operator": "Variables[0] (TargetHP) || Variables[1] (EliteDamagePercentage) || MUL || RETURN",
                          "displayLines": "(TargetHP * EliteDamagePercentage)",
                          "constants": [],
                          "variables": [
                            "TargetHP",
                            "EliteDamagePercentage"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "True DMG"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Null Type",
                        "DamageFlat": {
                          "operator": "Variables[0] (TargetHP) || Variables[1] (BasicDamagePercentage) || MUL || RETURN",
                          "displayLines": "(TargetHP * BasicDamagePercentage)",
                          "constants": [],
                          "variables": [
                            "TargetHP",
                            "BasicDamagePercentage"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "True DMG"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}