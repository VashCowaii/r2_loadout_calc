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
      "to": "Caster",
      "modifier": "FuXuan_PassiveAbility"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "FuXuan_ExChangeHP"
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
          "to": "Caster",
          "modifier": "FuXuan_Eidolon6[<span class=\"descriptionNumberColor\">Total HP lost</span>]"
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
      "for": "FuXuan_PassiveAbility",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "FuXuan_DamageReduce[<span class=\"descriptionNumberColor\">Misfortune Avoidance</span>]"
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
              "to": "All Team Members(In Context)",
              "modifier": "FuXuan_DamageReduce[<span class=\"descriptionNumberColor\">Misfortune Avoidance</span>]",
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
                "target": "Use Prior Target(s) Defined",
                "team": "TeamLight"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "FuXuan_DamageReduce[<span class=\"descriptionNumberColor\">Misfortune Avoidance</span>]",
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