const configAbility = {
  "fileName": "2035012_Monster_W2_Feixiao_IF_EX01_PassiveAbility",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1243020063\">Modifier_Monster_W2_Feixiao_IF_EX01</a>"
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
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1243020063\">Modifier_Monster_W2_Feixiao_IF_EX01</a>"
    }
  ]
}