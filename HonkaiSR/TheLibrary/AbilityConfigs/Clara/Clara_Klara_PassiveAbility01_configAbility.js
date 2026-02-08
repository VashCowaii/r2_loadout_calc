const configAbility = {
  "fileName": "Clara_Klara_PassiveAbility01",
  "childAbilityList": [
    "Clara_Klara_PassiveAbility_Camera",
    "Clara_Klara_PassiveAbility01",
    "Clara_Klara_PassiveAbility01_InsertAbility"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": 5,
  "toughnessList": [
    10,
    0,
    10
  ],
  "parse": [
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
        "displayLines": "(2 + 1)",
        "constants": [],
        "variables": [
          2,
          1
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1664082780\">Klara_PassiveAbility01_ListenCounter</a>",
      "valuePerStack": {
        "MDF_Chance": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1481439916\">Klara_PassiveAbility01_AddRevenge</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-796199138\">Klara_Passive_DamageReduce</a>[<span class=\"descriptionNumberColor\">Guardian</span>]",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.1) || RETURN",
          "displayLines": "0.1",
          "constants": [],
          "variables": [
            0.1
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1481439916\">Klara_PassiveAbility01_AddRevenge</a>",
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"90816647\">Klara_BPAbility_Revenge</a>[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"90816647\">Klara_BPAbility_Revenge</a>[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1664082780\">Klara_PassiveAbility01_ListenCounter</a>",
      "execute": [
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (MDF_Chance) || RETURN",
                      "displayLines": "MDF_Chance",
                      "constants": [],
                      "variables": [
                        "MDF_Chance"
                      ]
                    }
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1426674462\">Klara_PassiveATK_Mark</a>"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Chance"
      ],
      "latentQueue": []
    }
  ]
}