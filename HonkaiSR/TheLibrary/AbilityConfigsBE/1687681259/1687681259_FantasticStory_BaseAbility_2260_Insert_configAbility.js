const configAbility = {
  "fileName": "1687681259_FantasticStory_BaseAbility_2260_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "DV_TargetDebuffCountMax"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Battle Event List}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Battle Event ID",
        "ID": 30501,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        }
      },
      "noTargetFound": [
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "eventID": 30501,
          "variables": {
            "DV_BE_BaseSpeed": {
              "displayLines": "DV_FeverBESpeed"
            }
          },
          "whenCreated": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1085123526\">Modifier_FantasticStory_BaseAbility_2260_ListenBEDelay</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Status Counter",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "DV_TargetDebuffCount"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1935126530\">Modifier_FantasticStory_BaseAbility_2260_FeverDmgCount</a>",
          "counter": {
            "displayLines": "DV_TargetDebuffCount"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_TargetDebuffCount",
            "compareType": ">",
            "value2": {
              "displayLines": "DV_TargetDebuffCountMax"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "DV_TargetDebuffCount"
              },
              "variableName": "DV_TargetDebuffCountMax"
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "DV_FantasticStory_BaseAbility_TriggerFlag"
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "DV_TargetDebuffCountMax",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "DV_TargetDebuffCountMax"
          },
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"1935126530\">Modifier_FantasticStory_BaseAbility_2260_FeverDmgCount</a>",
                    "compareType": ">",
                    "value2": 0
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
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "displayLines": "(BattleEvent_BaseHP * DV_FantasticStory_BaseAbility_2260_EnterFever_P1_FixedDmgRatio)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "True DMG"
                      }
                    },
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1935126530\">Modifier_FantasticStory_BaseAbility_2260_FeverDmgCount</a>",
                      "function": "Add"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1935126530\">Modifier_FantasticStory_BaseAbility_2260_FeverDmgCount</a>"
        },
        "Trigger: Attack End"
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1496517518\">Modifier_FantasticStory_BaseAbility_2260_aura</a>"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "0"
      },
      "variableName": "DV_FantasticStory_BaseAbility_CountSum"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}