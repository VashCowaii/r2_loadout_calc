const compositeAbilityObject = {
  "fullCharacterName": "World-Remaking Deliverer",
  "trimCharacterName": "WorldRemakingDeliverer",
  "abilityList": [
    "WorldRemakingDeliverer_Ability51271"
  ],
  "abilityObject": {
    "WorldRemakingDeliverer_Ability51271": {
      "fileName": "WorldRemakingDeliverer_Ability51271",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_127_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_127_Sub4[<span class=\"descriptionNumberColor\">World-Remaking Deliverer</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.15) || RETURN",
                    "displayLines": "0.15",
                    "constants": [],
                    "variables": [
                      0.15
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">#SkillRelic_127_4_P2_DamageAddRatio</span>.",
          "type": "Buff",
          "statusName": "World-Remaking Deliverer"
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_127_Sub3[<span class=\"descriptionNumberColor\">World-Remaking Deliverer</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.24) || RETURN",
                    "displayLines": "0.24",
                    "constants": [],
                    "variables": [
                      0.24
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Max HP increases by <span class=\"descriptionNumberColor\">#SkillRelic_127_4_P1_HPAddedRatio</span>.",
          "type": "Buff",
          "statusName": "World-Remaking Deliverer"
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_127_Sub2",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Allied Team(ALL) [Exclude battle mechanics]",
              "modifier": "Relic_127_Sub4[<span class=\"descriptionNumberColor\">World-Remaking Deliverer</span>]",
              "haloStatus": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_127_Sub1",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Caster + Memosprite",
              "modifier": "Relic_127_Sub3[<span class=\"descriptionNumberColor\">World-Remaking Deliverer</span>]",
              "haloStatus": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_127_Main",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": "Caster's Memosprite",
                        "compareType": ">=",
                        "value2": 1,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Relic_127_Sub1"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Relic_127_Sub2"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Relic_127_Sub1"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Relic_127_Sub2"
                        }
                      ]
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
        "Increases CRIT Rate by 8%.",
        "After the wearer uses Basic ATK or Skill, if the wearer's memosprite is on the field, increases Max HP of the wearer and their memosprite by 24%, and increases all allies' dealt DMG by 15%, lasting until after the wearer's next use of Basic ATK or Skill."
      ],
      "params": [
        [
          0.08
        ],
        [
          0.24,
          0.15
        ]
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