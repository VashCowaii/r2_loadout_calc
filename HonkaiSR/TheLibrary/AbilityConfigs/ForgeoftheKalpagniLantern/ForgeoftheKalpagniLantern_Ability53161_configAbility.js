const configAbility = {
  "fileName": "ForgeoftheKalpagniLantern_Ability53161",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Relic_316_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Relic_316_Sub[<span class=\"descriptionNumberColor\">Forge of the Kalpagni Lantern</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.4) || RETURN",
                "displayLines": "0.4",
                "constants": [],
                "variables": [
                  0.4
                ]
              }
            }
          ]
        }
      ],
      "description": "Break Effect increases by <span class=\"descriptionNumberColor\">#SkillRelic_316_2_P2_BreakDamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "Break Effect Boost",
      "statusName": "Forge of the Kalpagni Lantern"
    },
    {
      "name": "Modifier Construction",
      "for": "Relic_316_Main",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Flag",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": "Use Prior Target(s) Defined",
                    "DamageType": "Fire"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Relic_316_Sub[<span class=\"descriptionNumberColor\">Forge of the Kalpagni Lantern</span>]",
                      "duration": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Flag",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "isRelic": true,
  "desc": [
    "Increases the wearer's SPD by 6%. When the wearer hits an enemy target that has Fire Weakness, the wearer's Break Effect increases by 40%, lasting for 1 turn(s)."
  ],
  "params": [
    [
      0.06,
      0.4,
      1
    ],
    []
  ]
}