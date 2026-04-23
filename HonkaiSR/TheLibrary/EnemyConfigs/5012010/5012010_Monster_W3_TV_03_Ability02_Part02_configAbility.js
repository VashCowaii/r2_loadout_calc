const configAbility = {
  "fileName": "5012010_Monster_W3_TV_03_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Happiness Charm"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1125178298\">Enemy_W3_TV_03_PowerUnlockListener</a>[<span class=\"descriptionNumberColor\">Happy Smiles</span>]"
    },
    {
      "name": "Random Event",
      "isUnique": true,
      "odds": [
        {
          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
          "displayLines": "{[Skill02[3]]}",
          "constants": [],
          "variables": [
            "{[Skill02[3]]}"
          ]
        },
        {
          "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
          "displayLines": "{[Skill02[4]]}",
          "constants": [],
          "variables": [
            "{[Skill02[4]]}"
          ]
        },
        {
          "operator": "Variables[0] ({[Skill02[5]]}) || RETURN",
          "displayLines": "{[Skill02[5]]}",
          "constants": [],
          "variables": [
            "{[Skill02[5]]}"
          ]
        }
      ],
      "execute": [
        {
          "name": "Sequence Event",
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1638600472\">Standard_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Sequence Event",
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "ifTargetFound": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "popUpText": "Action Advance"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Assign Advance/Delay to Current Ability Use",
                      "adjustmentValue": {
                        "operator": "Constants[0] (0) || Variables[0] ({[Skill02[1]]}) || SUB || RETURN",
                        "displayLines": "(0 - {[Skill02[1]]})",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "{[Skill02[1]]}"
                        ]
                      },
                      "adjustmentType": "Advance"
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "(0 - {[Skill02[1]]})"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "(0 - {[Skill02[1]]})"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Sequence Event",
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1044186345\">Enemy_W3_TV_03_Shake</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
              "duration": 1,
              "baseChance": 1,
              "valuePerStack": {
                "MDF_ActionDelayRatio": {
                  "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                  "displayLines": "{[Skill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[2]]}"
                  ]
                }
              }
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}