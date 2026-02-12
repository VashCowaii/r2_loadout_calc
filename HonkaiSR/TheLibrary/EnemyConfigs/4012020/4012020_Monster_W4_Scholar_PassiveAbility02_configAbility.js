const configAbility = {
  "fileName": "4012020_Monster_W4_Scholar_PassiveAbility02",
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
          "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill02[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill02[0]]}"
          ]
        },
        "MDF_DamageUpRatio": {
          "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
          "displayLines": "{[PassiveSkill02[1]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill02[1]]}"
          ]
        },
        "MDF_LifeTime": {
          "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
          "displayLines": "{[PassiveSkill02[2]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill02[2]]}"
          ]
        }
      }
    }
  ],
  "references": []
}