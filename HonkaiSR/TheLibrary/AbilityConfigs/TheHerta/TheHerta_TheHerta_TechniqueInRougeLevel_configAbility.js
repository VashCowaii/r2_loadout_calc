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
      "modifier": "TheHerta_TechniqueInRougeLevel"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "TheHerta_TechniqueInRougeLevel",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "TargetHP",
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
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": {}
                        },
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
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": {}
                        },
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
          ],
          "priorityLevel": -60
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}