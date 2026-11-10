const configAbility = {
  "fileName": "4012023_Monster_W4_Scholar_PassiveAbility02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1310429689\">MModifier_Monster_W4_Scholar_BookKillerListener</a>",
      "valuePerStack": {
        "MDF_SpeedUpRatio": {
          "displayLines": "{[PassiveSkill02[0]]}"
        },
        "MDF_DamageUpRatio": {
          "displayLines": "{[PassiveSkill02[1]]}"
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