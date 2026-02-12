const configAbility = {
  "fileName": "4012023_Monster_W4_Scholar_LocalLegend_PassiveAbility02",
  "abilityType": null,
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
          "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill02[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill02[0]]}"
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