const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 61002,
  "trimCharacterName": 61002,
  "abilityList": [
    "61002_ActionEventAbility_Standard_PassiveAbility",
    "61002_ActionEventAbility_Camera_AllLightTeam",
    "61002_HeliobusActionAbilityBPRecover_Ability03_Part02",
    "61002_HeliobusActionAbilityBPRecover_Ability03_Part01",
    "61002_HeliobusActionAbilityBPRecover_Ability03_EnterReady"
  ],
  "abilityObject": {
    "61002_ActionEventAbility_Standard_PassiveAbility": {
      "fileName": "61002_ActionEventAbility_Standard_PassiveAbility",
      "childAbilityList": [
        "61002_ActionEventAbility_Standard_PassiveAbility"
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
    "61002_ActionEventAbility_Camera_AllLightTeam": {
      "fileName": "61002_ActionEventAbility_Camera_AllLightTeam",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "61002_HeliobusActionAbilityBPRecover_Ability03_Part02": {
      "fileName": "61002_HeliobusActionAbilityBPRecover_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "UI Display Event",
          "popUpText": "Amulet: Fiend Seal"
        },
        {
          "name": "Skill Points Modification",
          "adjustmentValue": {
            "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
            "displayLines": "#BattleEvent_P1_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P1_ADF"
            ]
          },
          "adjustmentType": "+"
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "popUpText": "Skill Point Obtained"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-139066169\">Modifier_HeliobusActionAbilityBPRecover_Listener</a>[<span class=\"descriptionNumberColor\">Spiritual Command</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1110720773\">Modifier_HeliobusActionAbilityBPRecover_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">#BattleEvent_P2_ADF</span>, lasting until the end of turn",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1110720773\">Modifier_HeliobusActionAbilityBPRecover_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK",
                      "Skill"
                    ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__-139066169\">Modifier_HeliobusActionAbilityBPRecover_Listener</a>[<span class=\"descriptionNumberColor\">Spiritual Command</span>]",
          "description": "When consuming Skill Points, increases the character's Basic ATK and Skill DMG by <span class=\"descriptionNumberColor\">#BattleEvent_P2_ADF</span>, lasting until the end of their turn.",
          "type": "Buff",
          "effectName": "Spiritual Command",
          "statusName": "Spiritual Command",
          "execute": [
            {
              "eventTrigger": "Skill Point Changes",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1110720773\">Modifier_HeliobusActionAbilityBPRecover_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "duration": 1
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-139066169\">Modifier_HeliobusActionAbilityBPRecover_Listener</a>[<span class=\"descriptionNumberColor\">Spiritual Command</span>]"
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
    "61002_HeliobusActionAbilityBPRecover_Ability03_Part01": {
      "fileName": "61002_HeliobusActionAbilityBPRecover_Ability03_Part01",
      "childAbilityList": [
        "61002_HeliobusActionAbilityBPRecover_Ability03_EnterReady",
        "61002_HeliobusActionAbilityBPRecover_Ability03_Part01",
        "61002_HeliobusActionAbilityBPRecover_Ability03_Part02",
        "61002_ActionEventAbility_Camera_AllLightTeam"
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
          "ability": "HeliobusActionAbilityBPRecover_Ability03_Part02",
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
    "61002_HeliobusActionAbilityBPRecover_Ability03_EnterReady": {
      "fileName": "61002_HeliobusActionAbilityBPRecover_Ability03_EnterReady",
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
      "skillID": 6100201,
      "trigger": "Skill03",
      "name": "Amulet: Fiend Seal",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "Recover #1[i] Skill Points and apply Spiritual Command to all allies for 1 time. While in the Spiritual Command state, consuming Skill Points will increase the character's DMG by #2[i]% until the end of the attack.",
      "energyCost": 100,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          0.3
        ]
      },
      "skillEffect": "Support",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_HeliobusActionAbilityBPRecover_Skill03_EnterReady",
        "Avatar_HeliobusActionAbilityBPRecover_Skill03_Phase01",
        "Avatar_HeliobusActionAbilityBPRecover_Skill03_Phase02",
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