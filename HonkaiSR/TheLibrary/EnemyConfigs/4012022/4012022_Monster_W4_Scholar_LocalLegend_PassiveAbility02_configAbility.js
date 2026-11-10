const configAbility = {
  "fileName": "4012022_Monster_W4_Scholar_LocalLegend_PassiveAbility02",
  "skillTrigger": "PassiveSkill02",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-644714460\">MModifier_Monster_W4_Scholar_LocalLegend_Status</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1076100196\">MModifier_Monster_W4_Scholar_LocalLegend_BookKillerListener</a>",
      "valuePerStack": {
        "MDF_SpeedUpRatio": {
          "displayLines": "{[PassiveSkill02[0]]}"
        },
        "MDF_LifeTime": {
          "displayLines": "{[PassiveSkill02[2]]}"
        }
      }
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