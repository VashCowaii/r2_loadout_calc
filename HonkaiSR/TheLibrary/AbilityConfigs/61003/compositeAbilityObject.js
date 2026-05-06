const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 61003,
  "trimCharacterName": 61003,
  "abilityList": [
    "61003_ActionEventAbility_Standard_PassiveAbility",
    "61003_ActionEventAbility_Camera_AllLightTeam",
    "61003_HeliobusActionAbilitySPRecover_Ability03_Part02",
    "61003_HeliobusActionAbilitySPRecover_Ability03_Part01",
    "61003_HeliobusActionAbilitySPRecover_Ability03_EnterReady"
  ],
  "abilityObject": {
    "61003_ActionEventAbility_Standard_PassiveAbility": {
      "fileName": "61003_ActionEventAbility_Standard_PassiveAbility",
      "childAbilityList": [
        "61003_ActionEventAbility_Standard_PassiveAbility"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "toughnessList": null,
      "parse": [
        {
          "name": "Show BattleEvent Button",
          "show": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1945570590\">Modifier_AutoUseUltraAbility</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1945570590\">Modifier_AutoUseUltraAbility</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Automatically use Ultimate",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "61003_ActionEventAbility_Camera_AllLightTeam": {
      "fileName": "61003_ActionEventAbility_Camera_AllLightTeam",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "61003_HeliobusActionAbilitySPRecover_Ability03_Part02": {
      "fileName": "61003_HeliobusActionAbilitySPRecover_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "UI Display Event",
          "popUpText": "Amulet: Coreflow Supreme"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)v2}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "popUpText": "Energy Obtained"
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "valuePercent": {
                "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                "displayLines": "#BattleEvent_P1_ADF",
                "constants": [],
                "variables": [
                  "#BattleEvent_P1_ADF"
                ]
              },
              "isFixed": "(Fixed)"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-40724235\">Modifier_HeliobusActionAbilitySPRecover</a>[<span class=\"descriptionNumberColor\">Ultimate DMG Boost</span>]"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__325476542\">Modifier_HeliobusActionAbilitySPRecover_DamageUp</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "#BattleEvent_P2_ADF"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-40724235\">Modifier_HeliobusActionAbilitySPRecover</a>[<span class=\"descriptionNumberColor\">Ultimate DMG Boost</span>]",
          "description": "DMG dealt by the next Ultimate increases by <span class=\"descriptionNumberColor\">#BattleEvent_P2_ADF</span>.",
          "type": "Buff",
          "effectName": "Ultimate DMG Boost",
          "statusName": "Ultimate DMG Boost",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"325476542\">Modifier_HeliobusActionAbilitySPRecover_DamageUp</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"325476542\">Modifier_HeliobusActionAbilitySPRecover_DamageUp</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-40724235\">Modifier_HeliobusActionAbilitySPRecover</a>[<span class=\"descriptionNumberColor\">Ultimate DMG Boost</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "All Player Team Members"
      }
    },
    "61003_HeliobusActionAbilitySPRecover_Ability03_Part01": {
      "fileName": "61003_HeliobusActionAbilitySPRecover_Ability03_Part01",
      "childAbilityList": [
        "61003_HeliobusActionAbilitySPRecover_Ability03_EnterReady",
        "61003_HeliobusActionAbilitySPRecover_Ability03_Part01",
        "61003_HeliobusActionAbilitySPRecover_Ability03_Part02",
        "61003_ActionEventAbility_Camera_AllLightTeam"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "HeliobusActionAbilitySPRecover_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Player Team Members"
      },
      "realTargetData": {
        "primaryTarget": "All Enemy Team"
      }
    },
    "61003_HeliobusActionAbilitySPRecover_Ability03_EnterReady": {
      "fileName": "61003_HeliobusActionAbilitySPRecover_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    }
  },
  "enemyData": {
    "Skill03": {
      "skillID": 6100301,
      "trigger": "Skill03",
      "name": "Amulet: Coreflow Supreme",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "All allies regenerate Energy equal to #1[i]% of their respective Max Energy, and increase the next instance of Ultimate DMG by #2[i]%.",
      "energyCost": 100,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          0
        ]
      },
      "skillEffect": "Support",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_HeliobusActionAbilitySPRecover_Skill03_EnterReady",
        "Avatar_HeliobusActionAbilitySPRecover_Skill03_Phase01",
        "Avatar_HeliobusActionAbilitySPRecover_Skill03_Phase02",
        "ActionEventAbility_Camera_AllLightTeam"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}