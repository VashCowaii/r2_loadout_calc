const configAbility = {
  "fileName": "3024013_Monster_W2_Argenti_IF_EX01_PassiveAbility",
  "skillTrigger": "SkillEX01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": ">=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W2_Cocolia_IF_SuperArmorController",
          "valuePerStack": {
            "MDF_IF_BOSS_BreakDelay": {
              "operator": "Variables[0] ({[SkillEX01[2]]}) || RETURN",
              "displayLines": "{[SkillEX01[2]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[2]]}"
              ]
            },
            "MDF_IF_BOSS_WeaknessDMGUpRatio": {
              "operator": "Variables[0] ({[SkillEX01[1]]}) || RETURN",
              "displayLines": "{[SkillEX01[1]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[1]]}"
              ]
            },
            "MDF_IF_BOSS_Standard_Defence": {
              "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
              "displayLines": "{[SkillEX01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[0]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W2_Cocolia_IF_SoftFrenzyController",
          "valuePerStack": {
            "MDF_FrenzyStartDelay": {
              "operator": "Variables[0] ({[SkillEX05[0]]}) || RETURN",
              "displayLines": "{[SkillEX05[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[0]]}"
              ]
            },
            "MDF_FrenzyIntervalDelay": {
              "operator": "Variables[0] ({[SkillEX05[1]]}) || RETURN",
              "displayLines": "{[SkillEX05[1]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[1]]}"
              ]
            },
            "MDF_MaxFrenzyLayer": {
              "operator": "Variables[0] ({[SkillEX05[2]]}) || RETURN",
              "displayLines": "{[SkillEX05[2]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[2]]}"
              ]
            },
            "MDF_TokenDMGAddRatioPerLayer": {
              "operator": "Variables[0] ({[SkillEX05[3]]}) || RETURN",
              "displayLines": "{[SkillEX05[3]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[3]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_IF_EX01_PassiveAbility_Boss"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Argenti_IF_EX01_PassiveAbility_Boss",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 4
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_W2_Cocolia_IF_SuperArmorController",
                  "valuePerStack": {
                    "MDF_IF_BOSS_BreakDelay": {
                      "operator": "Variables[0] ({[SkillEX01[2]]}) || RETURN",
                      "displayLines": "{[SkillEX01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillEX01[2]]}"
                      ]
                    },
                    "MDF_IF_BOSS_WeaknessDMGUpRatio": {
                      "operator": "Variables[0] ({[SkillEX01[1]]}) || RETURN",
                      "displayLines": "{[SkillEX01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillEX01[1]]}"
                      ]
                    },
                    "MDF_IF_BOSS_Standard_Defence": {
                      "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
                      "displayLines": "{[SkillEX01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillEX01[0]]}"
                      ]
                    }
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
  ]
}