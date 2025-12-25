const compositeAbilityObject = {
  "fullCharacterName": "Lushaka, the Sunken Seas",
  "trimCharacterName": "LushakatheSunkenSeas",
  "abilityList": [
    "LushakatheSunkenSeas_Ability53171"
  ],
  "abilityObject": {
    "LushakatheSunkenSeas_Ability53171": {
      "fileName": "LushakatheSunkenSeas_Ability53171",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_317_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_317_Sub[<span class=\"descriptionNumberColor\">Lushaka, the Sunken Seas</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.12) || RETURN",
                    "displayLines": "0.12",
                    "constants": [],
                    "variables": [
                      0.12
                    ]
                  }
                }
              ]
            }
          ],
          "description": "ATK increases by <span class=\"descriptionNumberColor\">#SkillRelic_317_2_P2_AttackAddedRatio</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Lushaka, the Sunken Seas"
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_317_Main",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of",
                        "of": "Caster",
                        "target": "First Character in Lineup (No Memosprites)",
                        "mustBeAlive2": true
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "First Character in Lineup (No Memosprites)",
                          "modifier": "Relic_317_Sub[<span class=\"descriptionNumberColor\">Lushaka, the Sunken Seas</span>]"
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "isRelic": true,
      "desc": [
        "Increases the wearer's Energy Regeneration Rate by 5%. If the wearer is not the first character in the team lineup, then increases the ATK of the first character in the team lineup by 12%."
      ],
      "params": [
        [
          0.05,
          0.12
        ],
        []
      ]
    }
  },
  "fixedStats": {
    "2": {
      "EnergyRegenRate": 0.05
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}