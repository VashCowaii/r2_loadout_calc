const configAbility = {
  "fileName": "8003050_Monster_AML_Elite01_01_Ability06_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-412932365\">Enemy_AML_Elite01_01_ShootEff_Arrow</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1780037570\">Enemy_AML_Elite01_01_ShootEff_Body</a>"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1527066682\">Monster_AML_Elite01_Endurance</a>"
    },
    {
      "name": "Achievement",
      "matchTags": true,
      "relatedAchievements": [
        {
          "title": "Doldrums",
          "desc": "Make Stormbringer fail to use Windfall Storm due to having no ally with Wind Shear",
          "rarity": "Low"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}