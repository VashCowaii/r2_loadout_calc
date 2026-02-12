const configAbility = {
  "fileName": "4053020_Monster_W4_Unicorn_01_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "BaseSpeed"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "BaseSpeed",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
    },
    {
      "name": "Add Battle Event",
      "teamName": "Enemy Team",
      "eventID": 20022,
      "variables": {
        "MDF_W4_Unicorn_01_BattleEvent_Ultimate_BaseSpeed": {
          "operator": "Variables[0] (BaseSpeed) || RETURN",
          "displayLines": "BaseSpeed",
          "constants": [],
          "variables": [
            "BaseSpeed"
          ]
        }
      },
      "whenCreated": [
        {
          "name": "Assign Unique Name",
          "uniqueName": "SummonMonster",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SummonCount",
      "value": {
        "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
        "displayLines": "{[Skill03[3]]}",
        "constants": [],
        "variables": [
          "{[Skill03[3]]}"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-565541120\">Enemy_W4_Unicorn_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Breeding Frenzy</span>]",
      "valuePerStack": {
        "MDF_AllDamageTypeResistance": {
          "operator": "Variables[0] ({[Skill03[5]]}) || RETURN",
          "displayLines": "{[Skill03[5]]}",
          "constants": [],
          "variables": [
            "{[Skill03[5]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-775198668\">Enemy_W4_Unicorn_01_Ability03ModifyDelayCost</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}