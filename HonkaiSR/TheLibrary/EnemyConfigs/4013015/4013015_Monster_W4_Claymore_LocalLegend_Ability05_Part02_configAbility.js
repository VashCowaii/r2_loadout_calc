const configAbility = {
  "fileName": "4013015_Monster_W4_Claymore_LocalLegend_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID04) || RETURN",
                  "displayLines": "SummonID04",
                  "constants": [],
                  "variables": [
                    "SummonID04"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              }
            }
          ]
        },
        "compareType": "=",
        "value2": 0,
        "livingTargets": true
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
            "displayLines": "{[Skill05[1]]}",
            "constants": [],
            "variables": [
              "{[Skill05[1]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID04) || RETURN",
                "displayLines": "SummonID04",
                "constants": [],
                "variables": [
                  "SummonID04"
                ]
              },
              "locationType": "AroundCaster"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-247858425\">Monster_W4_Claymore_LocalLegend_LasterSummon</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID01) || RETURN",
                  "displayLines": "SummonID01",
                  "constants": [],
                  "variables": [
                    "SummonID01"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              }
            }
          ]
        },
        "compareType": "=",
        "value2": 0,
        "livingTargets": true
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
            "displayLines": "{[Skill05[0]]}",
            "constants": [],
            "variables": [
              "{[Skill05[0]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID01) || RETURN",
                "displayLines": "SummonID01",
                "constants": [],
                "variables": [
                  "SummonID01"
                ]
              },
              "locationType": "AroundCasterOnEdge"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-247858425\">Monster_W4_Claymore_LocalLegend_LasterSummon</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID03) || RETURN",
                  "displayLines": "SummonID03",
                  "constants": [],
                  "variables": [
                    "SummonID03"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              }
            }
          ]
        },
        "compareType": "=",
        "value2": 0,
        "livingTargets": true
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
            "displayLines": "{[Skill05[1]]}",
            "constants": [],
            "variables": [
              "{[Skill05[1]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID03) || RETURN",
                "displayLines": "SummonID03",
                "constants": [],
                "variables": [
                  "SummonID03"
                ]
              },
              "locationType": "AroundCaster"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-247858425\">Monster_W4_Claymore_LocalLegend_LasterSummon</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID02) || RETURN",
                  "displayLines": "SummonID02",
                  "constants": [],
                  "variables": [
                    "SummonID02"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              }
            }
          ]
        },
        "compareType": "=",
        "value2": 0,
        "livingTargets": true
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
            "displayLines": "{[Skill05[1]]}",
            "constants": [],
            "variables": [
              "{[Skill05[1]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID02) || RETURN",
                "displayLines": "SummonID02",
                "constants": [],
                "variables": [
                  "SummonID02"
                ]
              },
              "locationType": "AroundCasterOnEdge"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-247858425\">Monster_W4_Claymore_LocalLegend_LasterSummon</a>"
        }
      ]
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
        "modifier": "<a class=\"gModGreen\" id=\"-247858425\">Monster_W4_Claymore_LocalLegend_LasterSummon</a>"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-247858425\">Monster_W4_Claymore_LocalLegend_LasterSummon</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-247858425\">Monster_W4_Claymore_LocalLegend_LasterSummon</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}