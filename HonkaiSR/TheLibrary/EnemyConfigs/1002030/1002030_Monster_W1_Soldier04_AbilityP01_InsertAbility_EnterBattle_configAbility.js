const configAbility = {
  "fileName": "1002030_Monster_W1_Soldier04_AbilityP01_InsertAbility_EnterBattle",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Animation Event",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "state": "Skill02",
      "passed": [
        {
          "name": "Animation Task"
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported[<span class=\"descriptionNumberColor\">Reinforced</span>]"
                    }
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Enemy ID",
                      "ID": 1002030,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "characterName": "Silvermane Cannoneer"
                    }
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
                  "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported_Effect"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported[<span class=\"descriptionNumberColor\">Reinforced</span>]"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported_Effect"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_W1_Soldier04_AbilityP01_Supporting[<span class=\"descriptionNumberColor\">Support</span>]"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CurrentSupportNumber",
              "context": "TargetEntity",
              "value": 1,
              "max": 99
            }
          ]
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported_Effect"
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported_Effect"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported[<span class=\"descriptionNumberColor\">Reinforced</span>]"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}