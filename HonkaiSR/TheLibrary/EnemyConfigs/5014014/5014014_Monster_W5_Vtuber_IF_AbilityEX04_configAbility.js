const configAbility = {
  "fileName": "5014014_Monster_W5_Vtuber_IF_AbilityEX04",
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
          "modifier": "<a class=\"gModGreen\" id=\"236497204\">Enemy_W5_Vtuber_IF_AbilityEX04</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1191558894\">Enemy_W5_Vtuber_IF_AbilityEX04_EMY</a>",
          "valuePerStack": {
            "MDF_AllDamageReduce": {
              "operator": "Variables[0] ({[SkillEX04[0]]}) || RETURN",
              "displayLines": "{[SkillEX04[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX04[0]]}"
              ]
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