const configAbility = {
  "fileName": "1004026_Monster_W1_Gepard_IF_02_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "UsedShieldFlag",
      "value": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1335578601\">Gepard_IF_02_Shield</a>",
      "valuePerStack": {
        "MDF_ShieldPercentage": {
          "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
          "displayLines": "{[Skill03[1]]}",
          "constants": [],
          "variables": [
            "{[Skill03[1]]}"
          ]
        },
        "MDF_MaxHPHitPercentage1": {
          "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
          "displayLines": "{[Skill03[2]]}",
          "constants": [],
          "variables": [
            "{[Skill03[2]]}"
          ]
        },
        "MDF_MaxHPHitPercentage2": {
          "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
          "displayLines": "{[Skill03[3]]}",
          "constants": [],
          "variables": [
            "{[Skill03[3]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1788931056\">Gepard_RL_ShieldIcon</a>[<span class=\"descriptionNumberColor\">Collective Shield</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1185722758\">Gepard_RL_ShieldIcon2</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}