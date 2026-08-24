const configAbility = {
  "fileName": "4014034_Monster_W4_Pollux_PassiveAbility_Initiate_FateRin",
  "skillTrigger": "Passive",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Create Enemies",
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonID0) || RETURN",
            "displayLines": "SummonID0",
            "constants": [],
            "variables": [
              "SummonID0"
            ]
          },
          "locationType": "BeforeCaster",
          "locationOffset": -1,
          "leader": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-193308861\">Monster_W4_PolluxPart_L</a>"
    },
    {
      "name": "Create Enemies",
      "delayPercent": 1.3,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonID1) || RETURN",
            "displayLines": "SummonID1",
            "constants": [],
            "variables": [
              "SummonID1"
            ]
          },
          "locationType": "AfterCaster",
          "locationOffset": 1,
          "leader": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-226864099\">Monster_W4_PolluxPart_R</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[0]]}"
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
      "modifier": "<a class=\"gModGreen\" id=\"1173679541\">Monster_W4_Pollux_Passive_FateRin</a>"
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
      "name": "Set Enemy Phase"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2023503123\">Monster_W4_Pollux_PartController_LockHP_FateRin</a>"
    }
  ],
  "whenAdded": [
    {
      "name": "UI Display Event",
      "popUpText": "Defeat The Long Arms of Sorrow to claim your reward!"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1173679541\">Monster_W4_Pollux_Passive_FateRin</a>",
      "execute": [
        {
          "eventTrigger": "Being Attacked [Owner]: End",
          "execute": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "healPercent": {
                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || Constants[0] (2) || DIV || RETURN",
                "displayLines": "({[PassiveSkill01[1]]} / 2)",
                "constants": [
                  2
                ],
                "variables": [
                  "{[PassiveSkill01[1]]}"
                ]
              },
              "formula": "Heal from Target MaxHP"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-226864099\">Monster_W4_PolluxPart_R</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-193308861\">Monster_W4_PolluxPart_L</a>"
    }
  ]
}