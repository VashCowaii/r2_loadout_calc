const configAbility = {
  "fileName": "4044010_Monster_W4_Theoroi_Passive01",
  "skillTrigger": "PassiveSkill03",
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
      "modifier": "<a class=\"gModGreen\" id=\"-62507954\">W4_Theoroi_BattleScore1</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-79285573\">W4_Theoroi_BattleScore2</a>"
    },
    {
      "name": "Boss Bar Display",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "display": true
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
      "name": "Divide BossHP into Bars",
      "barCount": {
        "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
        "displayLines": "{[PassiveSkill03[5]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill03[5]]}"
        ]
      }
    },
    {
      "name": "Preload Battle Event(s)",
      "eventID": [
        20024,
        20028
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "InSkill05",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20024,
          "variables": {
            "SummonInitDelay": {
              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[1]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1225407383\">Monster_W4_Theoroi_Passive</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 4044011,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "First Genius, Entelechy, Zandar",
        "isBaseCompare": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
        }
      ]
    }
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"534638248\">Monster_W4_Theoroi_Part1</a>[<span class=\"descriptionNumberColor\">To Logos</span>]"
    }
  ],
  "references": []
}