const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 61005,
  "trimCharacterName": 61005,
  "abilityList": [
    "61005_ActionEventAbility_Standard_PassiveAbility",
    "61005_ActionEventAbility_Camera_AllDarkTeam",
    "61005_HeliobusActionAbilityDelayAction_Ability03_Part02",
    "61005_HeliobusActionAbilityDelayAction_Ability03_Part01",
    "61005_HeliobusActionAbilityDelayAction_Ability03_EnterReady"
  ],
  "abilityObject": {
    "61005_ActionEventAbility_Standard_PassiveAbility": {
      "fileName": "61005_ActionEventAbility_Standard_PassiveAbility",
      "childAbilityList": [
        "61005_ActionEventAbility_Standard_PassiveAbility"
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
    "61005_ActionEventAbility_Camera_AllDarkTeam": {
      "fileName": "61005_ActionEventAbility_Camera_AllDarkTeam",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "61005_HeliobusActionAbilityDelayAction_Ability03_Part02": {
      "fileName": "61005_HeliobusActionAbilityDelayAction_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "UI Display Event",
          "popUpText": "Suppression: Demon Shackle"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "advanceType": "Set",
          "add": {
            "operator": "Variables[0] (#BattleEvent_P1_ADF) || Constants[0] (10) || DIV || RETURN",
            "displayLines": "(#BattleEvent_P1_ADF / 10)",
            "constants": [
              10
            ],
            "variables": [
              "#BattleEvent_P1_ADF"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
          "duration": 1,
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_SpeedDownRatio": 0,
            "MDF_ActionDelayRatio": 0
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"373407425\">Modifier_HeliobusActionAbilityDelayAction</a>[<span class=\"descriptionNumberColor\">Paranoia</span>]",
          "duration": {
            "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
            "displayLines": "#BattleEvent_P2_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P2_ADF"
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__822356417\">Modifier_HeliobusActionAbilityDelayAction_Attacker</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_Attack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "DamageFlat": {
                      "operator": "Variables[0] (DamageValue) || Variables[1] (_Attack) || MUL || RETURN",
                      "displayLines": "(DamageValue * _Attack)",
                      "constants": [],
                      "variables": [
                        "DamageValue",
                        "_Attack"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"822356417\">Modifier_HeliobusActionAbilityDelayAction_Attacker</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__373407425\">Modifier_HeliobusActionAbilityDelayAction</a>[<span class=\"descriptionNumberColor\">Paranoia</span>]",
          "description": "After every attack received, receive Imaginary Additional DMG equal to <span class=\"descriptionNumberColor\">#BattleEvent_P3_ADF</span> of the attacker's ATK. This DMG is not affected by additional multipliers.",
          "type": "Debuff",
          "effectName": "Paranoia",
          "statusName": "Paranoia",
          "execute": [
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"822356417\">Modifier_HeliobusActionAbilityDelayAction_Attacker</a>",
                  "valuePerStack": {
                    "DamageValue": {
                      "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P3_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P3_ADF"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      }
    },
    "61005_HeliobusActionAbilityDelayAction_Ability03_Part01": {
      "fileName": "61005_HeliobusActionAbilityDelayAction_Ability03_Part01",
      "childAbilityList": [
        "61005_HeliobusActionAbilityDelayAction_Ability03_EnterReady",
        "61005_HeliobusActionAbilityDelayAction_Ability03_Part01",
        "61005_HeliobusActionAbilityDelayAction_Ability03_Part02",
        "61005_ActionEventAbility_Camera_AllDarkTeam"
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
          "ability": "HeliobusActionAbilityDelayAction_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      },
      "realTargetData": {
        "primaryTarget": "All Enemy Team"
      }
    },
    "61005_HeliobusActionAbilityDelayAction_Ability03_EnterReady": {
      "fileName": "61005_HeliobusActionAbilityDelayAction_Ability03_EnterReady",
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
      "skillID": 6100501,
      "trigger": "Skill03",
      "name": "Suppression: Demon Shackle",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "Apply Imprisonment to all enemies and delay their action by #1[i] as well as applying Paranoia to all enemies, lasting for #2[i] turn(s). While in the Paranoia state, every time enemy targets are attacked, they will receive Imaginary Additional DMG equal to #3[i]% of the attacker's ATK once. This DMG is not affected by additional multipliers.",
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
      "skillEffect": "Impair",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_HeliobusActionAbilityDelayAction_Skill03_EnterReady",
        "Avatar_HeliobusActionAbilityDelayAction_Skill03_Phase01",
        "Avatar_HeliobusActionAbilityDelayAction_Skill03_Phase02",
        "ActionEventAbility_Camera_AllDarkTeam"
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