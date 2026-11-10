const configAbility = {
  "fileName": "4064012_Monster_W4_Serpent_01_IF_AbilityEX04",
  "skillTrigger": "SkillEX04",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": ">=",
        "value2": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883611863\">Enemy_W4_Serpent_01_IF_AbilityEX04</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1352221125\">Enemy_W4_Serpent_01_IF_AbilityEX04_EMY</a>",
          "valuePerStack": {
            "MDF_AllDamageReduce": {
              "displayLines": "{[SkillEX04[0]]}"
            },
            "MDF_AllDamageTypeAddedRatio": {
              "displayLines": "{[SkillEX04[1]]}"
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