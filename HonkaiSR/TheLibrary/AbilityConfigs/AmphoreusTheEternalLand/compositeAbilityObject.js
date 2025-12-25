const compositeAbilityObject = {
  "fullCharacterName": "Amphoreus, The Eternal Land",
  "trimCharacterName": "AmphoreusTheEternalLand",
  "abilityList": [
    "AmphoreusTheEternalLand_Ability53231"
  ],
  "abilityObject": {
    "AmphoreusTheEternalLand_Ability53231": {
      "fileName": "AmphoreusTheEternalLand_Ability53231",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_323_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_323_Sub3[<span class=\"descriptionNumberColor\">Amphoreus, The Eternal Land</span>]",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.08) || RETURN",
                    "displayLines": "0.08",
                    "constants": [],
                    "variables": [
                      0.08
                    ]
                  }
                }
              ]
            }
          ],
          "description": "SPD increases by <span class=\"descriptionNumberColor\">#SkillRelic_323_2_P2_SpeedAddRatio</span>.",
          "type": "Buff",
          "statusName": "Amphoreus, The Eternal Land"
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_323_Sub2",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Relic_323_Sub3[<span class=\"descriptionNumberColor\">Amphoreus, The Eternal Land</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Relic_323_Sub3[<span class=\"descriptionNumberColor\">Amphoreus, The Eternal Land</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Allied Team(ALL) [Exclude battle mechanics]",
              "modifier": "Relic_323_Sub3[<span class=\"descriptionNumberColor\">Amphoreus, The Eternal Land</span>]",
              "haloStatus": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_323_Main",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": "Use Prior Target(s) Defined",
                    "target2": "Caster's Memosprite"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Relic_323_Sub2"
                    }
                  ]
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
        "Increases the wearer's CRIT Rate by 8%. While the wearer's memosprite is on the field, increases all allies' SPD by 8%. This effect cannot be stacked."
      ],
      "params": [
        [
          0.08,
          0.08
        ],
        []
      ]
    }
  },
  "fixedStats": {
    "2": {
      "CritRateBase": 0.08
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}