const compositeAbilityObject = {
  "fullCharacterName": "We Are Wildfire",
  "trimCharacterName": "WeAreWildfire",
  "abilityList": [
    "WeAreWildfire_Ability21023"
  ],
  "fixedStats": {},
  "abilityObject": {
    "WeAreWildfire_Ability21023": {
      "fileName": "WeAreWildfire_Ability21023",
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
          "modifier": "LC_21023_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21023_Sub[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
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
          "description": "DMG taken -<span class=\"descriptionNumberColor\">#SkillEquip_P2_DamageReduce</span>.",
          "type": "Buff",
          "effectName": "DMG Mitigation",
          "statusName": "DMG Mitigation"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21023_Main",
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<",
                        "value2": 1
                      },
                      "ifTargetFound": [
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "healPercent": {
                            "operator": "Variables[0] (0.3) || RETURN",
                            "displayLines": "0.3",
                            "constants": [],
                            "variables": [
                              0.3
                            ]
                          },
                          "formula": "Heal from Target's MissingHP"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "LC_21023_Sub[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
                      "duration": {
                        "operator": "Variables[0] (5) || RETURN",
                        "displayLines": "5",
                        "constants": [],
                        "variables": [
                          5
                        ]
                      }
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
      "desc": "At the start of the battle, the DMG dealt to all allies decreases by #2[i]% for #3[i] turn(s). At the same time, immediately restores HP to all allies equal to #1[i]% of the respective HP difference between the characters' Max HP and current HP.",
      "params": [
        [
          0.3,
          0.08,
          5
        ],
        [
          0.35,
          0.1,
          5
        ],
        [
          0.4,
          0.12,
          5
        ],
        [
          0.45,
          0.14,
          5
        ],
        [
          0.5,
          0.16,
          5
        ]
      ]
    }
  },
  "isLightcone": true
}