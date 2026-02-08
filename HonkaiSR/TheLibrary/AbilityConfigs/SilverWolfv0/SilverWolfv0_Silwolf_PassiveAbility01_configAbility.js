const configAbility = {
  "fileName": "SilverWolfv0_Silwolf_PassiveAbility01",
  "childAbilityList": [
    "SilverWolfv0_Silwolf_PassiveAbility01"
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
      "modifier": "<a class=\"gModGreen\" id=\"1061621734\">M_SilverWolf_Passive</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Generate"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_Silwolf_00_AddModifier_LifeTime",
          "value": {
            "operator": "Variables[0] (3) || Variables[1] (1) || ADD || RETURN",
            "displayLines": "(3 + 1)",
            "constants": [],
            "variables": [
              3,
              1
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_Silwolf_00_AddModifier_LifeTime",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          }
        }
      ]
    },
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
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1991784090\">Silwolf_Eidolon1</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1941451233\">Silwolf_Eidolon4</a>"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1941451233\">Silwolf_Eidolon4</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Status Counter",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Attack Targets}}"
                  },
                  "variableName": "_DebuffCountForRank04"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1991784090\">Silwolf_Eidolon1</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Status Counter",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Attack Targets}}"
                  },
                  "variableName": "_DebuffCountForRank01"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1061621734\">M_SilverWolf_Passive</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Silwolf_00_AddModifier_Chance",
              "value": {
                "operator": "Variables[0] (0.72) || RETURN",
                "displayLines": "0.72",
                "constants": [],
                "variables": [
                  0.72
                ]
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Ability Attack Targets}}"
              },
              "maxTargets": 10,
              "ifTargetFound": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Silwolf_PassiveAbility_RandomBug"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}