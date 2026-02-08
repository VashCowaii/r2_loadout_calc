const configAbility = {
  "fileName": "NetherwingPollux_Servant_CastoriceServant_PassiveInsertAbility_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-902705289\">Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1793501095\">Memosprite_CastoriceServant_GoDie</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-256072391\">Memosprite_CastoriceServant_BP_Explode</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"156488588\">Memosprite_CastoriceServant_TiggerKiller</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1354985533\">Memosprite_CastoriceServant_Deathrattle</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1714839092\">Servant_CastoriceServant_GetMaxHP</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_LoopCount",
          "value": {
            "operator": "Variables[0] (6) || Variables[1] (CastoriceServant_Eidolon6_AddCount) || ADD || RETURN",
            "displayLines": "(6 + CastoriceServant_Eidolon6_AddCount)",
            "constants": [],
            "variables": [
              6,
              "CastoriceServant_Eidolon6_AddCount"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_LoopCount",
          "value": {
            "operator": "Variables[0] (6) || RETURN",
            "displayLines": "6",
            "constants": [],
            "variables": [
              6
            ]
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SkillP04_P1_HPPercentage",
      "value": {
        "operator": "Variables[0] (0.4) || Variables[1] (SkillP04_P1_ExtraAddPercentage) || ADD || RETURN",
        "displayLines": "(0.4 + SkillP04_P1_ExtraAddPercentage)",
        "constants": [],
        "variables": [
          0.4,
          "SkillP04_P1_ExtraAddPercentage"
        ]
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (CastoriceServant_LoopCount) || RETURN",
        "displayLines": "CastoriceServant_LoopCount",
        "constants": [],
        "variables": [
          "CastoriceServant_LoopCount"
        ]
      },
      "Event": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "paramSequence": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1405272466\">Servant_CastoriceServant_SetDamageRatio</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (SkillP04_P1_HPPercentage) || Variables[1] (Castorice_Rank01_DamageRatio) || MUL || RETURN",
                      "displayLines": "(SkillP04_P1_HPPercentage * Castorice_Rank01_DamageRatio)",
                      "constants": [],
                      "variables": [
                        "SkillP04_P1_HPPercentage",
                        "Castorice_Rank01_DamageRatio"
                      ]
                    },
                    "dmgFormula": "[SUMMONER] Max HP Scaling",
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || RETURN",
                      "displayLines": "ST Toughness Value",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Memosprite",
                    "EnergyGainPercent": "100%"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (SkillP04_P1_HPPercentage) || RETURN",
                      "displayLines": "SkillP04_P1_HPPercentage",
                      "constants": [],
                      "variables": [
                        "SkillP04_P1_HPPercentage"
                      ]
                    },
                    "dmgFormula": "[SUMMONER] Max HP Scaling",
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || RETURN",
                      "displayLines": "ST Toughness Value",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Memosprite",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}} -{{Caster}}"
      },
      "healFlat": {
        "operator": "Variables[0] (CastoriceServant_SummonMaxHP) || Variables[1] (0.06) || MUL || Variables[2] (800) || ADD || RETURN",
        "displayLines": "((CastoriceServant_SummonMaxHP * 0.06) + 800)",
        "constants": [],
        "variables": [
          "CastoriceServant_SummonMaxHP",
          0.06,
          800
        ]
      },
      "formula": "Heal from Base Value"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-604294216\">Castorice_Ability03_Field</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-902705289\">Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"253720974\">ClearAvatarArea_ByAbility</a>"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"253720974\">ClearAvatarArea_ByAbility</a>"
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ignoreHPLossTriggers": true,
          "ignoreDeathTriggers": true
        }
      ]
    },
    {
      "name": "Mark Entity For Immediate Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    }
  ],
  "references": []
}