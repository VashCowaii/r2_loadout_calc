const configAbility = {
  "fileName": "4032022_Monster_W4_FireProwler_01_PassiveAbilityInitiate_FantasticStory",
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
      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-881069101\">Enemy_W4_FireProwler_01_Repeat_FantasticStory</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2020453285\">Enemy_W4_FireProwler_01_DamageValue</a>",
      "valuePerStack": {
        "MDF_Ability01": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "MDF_Ability01_Adjoin": {
          "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
          "displayLines": "{[Skill01[1]]}",
          "constants": [],
          "variables": [
            "{[Skill01[1]]}"
          ]
        },
        "MDF_Ability02": {
          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
          "displayLines": "{[Skill02[0]]}",
          "constants": [],
          "variables": [
            "{[Skill02[0]]}"
          ]
        }
      },
      "casterAssign": "TargetSelf"
    }
  ],
  "whenAdded": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}