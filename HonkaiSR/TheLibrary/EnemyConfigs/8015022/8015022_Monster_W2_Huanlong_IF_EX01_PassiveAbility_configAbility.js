const configAbility = {
  "fileName": "8015022_Monster_W2_Huanlong_IF_EX01_PassiveAbility",
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
          "modifier": "<a class=\"gModGreen\" id=\"1587187705\">Enemy_W2_Cocolia_IF_SuperArmorController</a>",
          "valuePerStack": {
            "MDF_IF_BOSS_BreakDelay": {
              "displayLines": "{[SkillEX01[2]]}"
            },
            "MDF_IF_BOSS_WeaknessDMGUpRatio": {
              "displayLines": "{[SkillEX01[1]]}"
            },
            "MDF_IF_BOSS_Standard_Defence": {
              "displayLines": "{[SkillEX01[0]]}"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1246789467\">Enemy_W2_Cocolia_IF_SoftFrenzyController</a>",
          "valuePerStack": {
            "MDF_FrenzyStartDelay": {
              "displayLines": "{[SkillEX05[0]]}"
            },
            "MDF_FrenzyIntervalDelay": {
              "displayLines": "{[SkillEX05[1]]}"
            },
            "MDF_MaxFrenzyLayer": {
              "displayLines": "{[SkillEX05[2]]}"
            },
            "MDF_TokenDMGAddRatioPerLayer": {
              "displayLines": "{[SkillEX05[3]]}"
            }
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}