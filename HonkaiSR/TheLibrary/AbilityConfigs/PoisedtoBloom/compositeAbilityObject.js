const compositeAbilityObject = {
  "fullCharacterName": "Poised to Bloom",
  "trimCharacterName": "PoisedtoBloom",
  "abilityList": [
    "PoisedtoBloom_Ability21046"
  ],
  "abilityObject": {
    "PoisedtoBloom_Ability21046": {
      "fileName": "PoisedtoBloom_Ability21046",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_21046_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21046_Bonus[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.16) || RETURN",
                    "displayLines": "0.16",
                    "constants": [],
                    "variables": [
                      0.16
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases CRIT DMG by <span class=\"descriptionNumberColor\">#SkillEquip_P2_CriticalDamageBase</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "CRIT DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21046_Sub",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Matching Path",
                  "target": "Allied Team(No Memosprite)",
                  "matchToPathFrom": "Owner of this Modifier",
                  "variableName": "SameTypeCount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SameTypeCount",
                    "compareType": ">",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "LC_21046_Bonus[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21046_Main",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Allied Team(No Memosprite)",
                  "modifier": "LC_21046_Sub"
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
      "desc": "Increases the wearer's ATK by #1[i]%. Upon entering battle, if two or more characters follow the same Path, then these characters' CRIT DMG increases by #2[i]%. Abilities of the same type cannot stack.",
      "params": [
        [
          0.16,
          0.16
        ],
        [
          0.2,
          0.2
        ],
        [
          0.24,
          0.24
        ],
        [
          0.28,
          0.28
        ],
        [
          0.32,
          0.32
        ]
      ]
    }
  },
  "isLightcone": true
}