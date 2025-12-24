const compositeAbilityObject = {
  "fullCharacterName": "Sacerdos' Relived Ordeal",
  "trimCharacterName": "SacerdosRelivedOrdeal",
  "abilityList": [
    "SacerdosRelivedOrdeal_Ability51211"
  ],
  "abilityObject": {
    "SacerdosRelivedOrdeal_Ability51211": {
      "fileName": "SacerdosRelivedOrdeal_Ability51211",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_121_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_121_Sub[<span class=\"descriptionNumberColor\">Sacerdos' Relived Ordeal</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": "Owner of this Modifier",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.18) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(0.18 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      0.18,
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases CRIT DMG dealt by <span class=\"descriptionNumberColor\">#SkillRelic_121_4_P1_CriticalDamage</span>. This effect can stack up to <span class=\"descriptionNumberColor\">#SkillRelic_121_4_P3_MaxLayer</span> time(s).",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Sacerdos' Relived Ordeal",
          "stackLimit": 2,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_121_Main",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Target Count",
                            "target": "Skill Target List",
                            "compareType": "=",
                            "value2": 1,
                            "livingTargets": true
                          },
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Target Count",
                                "target": "Skill Sub-Target List",
                                "compareType": "=",
                                "value2": 0,
                                "livingTargets": true
                              },
                              {
                                "name": "Character ID",
                                "ID": 1313,
                                "target": "Caster",
                                "characterName": "Sunday"
                              }
                            ]
                          },
                          {
                            "name": "Is Part Of",
                            "of": "Skill Target List",
                            "target": "Allied Team",
                            "mustBeAlive2": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Character ID",
                            "ID": 1313,
                            "target": "Caster",
                            "characterName": "Sunday"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Skill Target List + Memosprites",
                              "modifier": "Relic_121_Sub[<span class=\"descriptionNumberColor\">Sacerdos' Relived Ordeal</span>]",
                              "duration": {
                                "operator": "Variables[0] (2) || RETURN",
                                "displayLines": "2",
                                "constants": [],
                                "variables": [
                                  2
                                ]
                              },
                              "stackLimit": {
                                "operator": "Variables[0] (2) || RETURN",
                                "displayLines": "2",
                                "constants": [],
                                "variables": [
                                  2
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Skill Target List",
                              "modifier": "Relic_121_Sub[<span class=\"descriptionNumberColor\">Sacerdos' Relived Ordeal</span>]",
                              "duration": {
                                "operator": "Variables[0] (2) || RETURN",
                                "displayLines": "2",
                                "constants": [],
                                "variables": [
                                  2
                                ]
                              },
                              "stackLimit": {
                                "operator": "Variables[0] (2) || RETURN",
                                "displayLines": "2",
                                "constants": [],
                                "variables": [
                                  2
                                ]
                              }
                            }
                          ]
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
        "Increases SPD by 6%.",
        "When using Skill or Ultimate on one ally target, increases the ability target's CRIT DMG by 18%, lasting for 2 turn(s). This effect can stack up to 2 time(s)."
      ],
      "params": [
        [
          0.06
        ],
        [
          0.18,
          2,
          2
        ]
      ]
    }
  },
  "fixedStats": {
    "2": {
      "SPD%": 0.06
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}