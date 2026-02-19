const configAbility = {
  "fileName": "3022011_Monster_W3_SundayPart_IF_PassiveAbility_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
        "displayLines": "{[SkillP01[0]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[0]]}"
        ]
      },
      "defender": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "canDelay": true,
      "ToughnessDMGType": {
        "name": "Damage Type Source",
        "sourceType": {}
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 3
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1909411233\">Enemy_W3_SundayPart_IF_AlreadyWeaknessShare</a>",
            "invertCondition": true
          }
        ]
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"882833488\">Monster_W3_SundayPart_IF_Status</a>"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1909411233\">Enemy_W3_SundayPart_IF_AlreadyWeaknessShare</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"889164751\">Enemy_W3_SundayPart_IF_WeaknessShare</a>",
          "valuePerStack": {
            "MDF_WeaknessShare": {
              "operator": "Variables[0] (_SummonerBreak) || RETURN",
              "displayLines": "_SummonerBreak",
              "constants": [],
              "variables": [
                "_SummonerBreak"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "variable": "#SkillP01_P3_PartBreak_EnergyCharge",
      "target2": null,
      "variable2": "_EnergyCharge"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Unselectable Targets}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1375694400\">MissionBattleEvent60013_PassiveAbility</a>"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1765479801\">MissionBattleEvent60019_Charge_permission</a>"
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "flagName": "Break",
            "invertCondition": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": {
            "operator": "Variables[0] (_EnergyCharge) || RETURN",
            "displayLines": "_EnergyCharge",
            "constants": [],
            "variables": [
              "_EnergyCharge"
            ]
          },
          "isFixed": "(Fixed)"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "MDF_BattleEvent60019_SP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "MDF_BattleEvent60019_SP",
                "compareType": ">=",
                "value2": 8
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1863598202\">Monster_W3_Sunday_IF_ChargeDoneHint_Lock</a>",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1863598202\">Monster_W3_Sunday_IF_ChargeDoneHint_Lock</a>"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "ability": "Monster_W3_Sunday_IF_PassiveAbilityInitiate_ChargeDone_Toast"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}