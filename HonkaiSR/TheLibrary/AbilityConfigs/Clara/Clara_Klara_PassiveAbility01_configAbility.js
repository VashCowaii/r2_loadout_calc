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
      "modifier": "Klara_PassiveAbility01_ListenCounter",
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
      "modifier": "Klara_PassiveAbility01_AddRevenge"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Klara_Passive_DamageReduce[<span class=\"descriptionNumberColor\">Guardian</span>]",
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
      "for": "Klara_PassiveAbility01_AddRevenge",
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
              "modifier": "Klara_BPAbility_Revenge[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
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
              "modifier": "Klara_BPAbility_Revenge[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Klara_PassiveAbility01_ListenCounter",
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
                  "modifier": "Klara_PassiveATK_Mark"
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