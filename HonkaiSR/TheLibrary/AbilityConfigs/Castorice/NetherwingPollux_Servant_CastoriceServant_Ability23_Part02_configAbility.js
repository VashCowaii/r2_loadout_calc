const configAbility = {
  "fileName": "NetherwingPollux_Servant_CastoriceServant_Ability23_Part02",
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
          "modifier": "Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_CastoriceServant_GoDie"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_CastoriceServant_BP_Explode"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_CastoriceServant_Ability23Check"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_CastoriceServant_TiggerKiller"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_CastoriceServant_Deathrattle"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Servant_CastoriceServant_GetMaxHP"
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
          "functionName": "Bounce_SelectTarget",
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
                  "functionName": "Servant_CastoriceServant_SetDamageRatio"
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
          "modifier": "Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "modifier": "Castorice_Ability03_Field"
    },
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ignoreHPLossTriggers": true,
      "ignoreDeathTriggers": true,
      "abortInsertedAbilities": true
    },
    {
      "name": "Mark Entity For Immediate Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Force Auto-Battle on Target",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}