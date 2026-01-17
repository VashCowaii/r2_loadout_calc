const compositeAbilityObject = {
  "fullCharacterName": "The Story's Next Page",
  "trimCharacterName": "TheStorysNextPage",
  "abilityList": [
    "TheStorysNextPage_Ability21054"
  ],
  "fixedStats": {
    "1": {
      "HP%": 0.16
    },
    "2": {
      "HP%": 0.2
    },
    "3": {
      "HP%": 0.24
    },
    "4": {
      "HP%": 0.28
    },
    "5": {
      "HP%": 0.32
    }
  },
  "abilityObject": {
    "TheStorysNextPage_Ability21054": {
      "fileName": "TheStorysNextPage_Ability21054",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "LC_21054_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21054_Sub[<span class=\"descriptionNumberColor\">Outgoing Healing Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoing</span>&nbsp;",
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
          "description": "Outgoing Healing increases by <span class=\"descriptionNumberColor\">#SkillEquip_P2_HealRatio</span>.",
          "type": "Buff",
          "effectName": "Outgoing Healing Boost",
          "statusName": "Outgoing Healing Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21054_Main",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "LC_21054_Sub[<span class=\"descriptionNumberColor\">Outgoing Healing Boost</span>]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "modifier": "LC_21054_Sub[<span class=\"descriptionNumberColor\">Outgoing Healing Boost</span>]",
                      "duration": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      }
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
      "desc": "Increases the wearer's Max HP by #1[i]%. After the wearer's memosprite attacks, the Outgoing Healing of the wearer and their memosprite increases by #2[i]%, lasting for #3[i] turn(s).",
      "params": [
        [
          0.16,
          0.12,
          1
        ],
        [
          0.2,
          0.15,
          1
        ],
        [
          0.24,
          0.18,
          1
        ],
        [
          0.28,
          0.21,
          1
        ],
        [
          0.32,
          0.24,
          1
        ]
      ]
    }
  },
  "isLightcone": true
}