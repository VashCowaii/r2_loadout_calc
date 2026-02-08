const configAbility = {
  "fileName": "FuXuan_FuXuan_PassiveAbility01",
  "childAbilityList": [
    "FuXuan_FuXuan_PassiveAbility01",
    "FuXuan_FuXuan_Passive_Ability",
    "FuXuan_FuXuan_PassiveAbility01_Camera"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"302655931\">FuXuan_PassiveAbility</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2001636468\">FuXuan_ExChangeHP</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1862182829\">FuXuan_Eidolon6</a>[<span class=\"descriptionNumberColor\">Total HP lost</span>]"
        }
      ]
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (GDF_ExChangeHPCount) || RETURN",
        "displayLines": "GDF_ExChangeHPCount",
        "constants": [],
        "variables": [
          "GDF_ExChangeHPCount"
        ]
      },
      "maximum": 2,
      "assignState": "True",
      "priorState": "Active",
      "bar#": 3,
      "cooldown": 0
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__302655931\">FuXuan_PassiveAbility</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1537044450\">FuXuan_DamageReduce</a>[<span class=\"descriptionNumberColor\">Misfortune Avoidance</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "HitFlag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1537044450\">FuXuan_DamageReduce</a>[<span class=\"descriptionNumberColor\">Misfortune Avoidance</span>]",
              "valuePerStack": {
                "MDF_DamageResistanceRatio": {
                  "operator": "Variables[0] (0.18) || RETURN",
                  "displayLines": "0.18",
                  "constants": [],
                  "variables": [
                    0.18
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1537044450\">FuXuan_DamageReduce</a>[<span class=\"descriptionNumberColor\">Misfortune Avoidance</span>]",
                  "valuePerStack": {
                    "MDF_DamageResistanceRatio": {
                      "operator": "Variables[0] (0.18) || RETURN",
                      "displayLines": "0.18",
                      "constants": [],
                      "variables": [
                        0.18
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "HitFlag",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}