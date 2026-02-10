const configAbility = {
  "fileName": "8032034_Monster_W3_AventurinePart_IF_AbilityP01_DeathRattle_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1592277974\">Enemy_W3_Aventurine_IF_Score_Dark</a>[<span class=\"descriptionNumberColor\">House Points</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"280539715\">Enemy_W3_Aventurine_IF_Defence_Protect</a>[<span class=\"descriptionNumberColor\">House Advantage (II)</span>]"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"280539715\">Enemy_W3_Aventurine_IF_Defence_Protect</a>[<span class=\"descriptionNumberColor\">House Advantage (II)</span>]"
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          },
          "attacker": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "defender": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "forceReduction": true,
          "canDelay": true,
          "ToughnessDMGType": "Imaginary"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"280539715\">Enemy_W3_Aventurine_IF_Defence_Protect</a>[<span class=\"descriptionNumberColor\">House Advantage (II)</span>]"
        }
      ],
      "failed": [
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          },
          "attacker": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "defender": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "forceReduction": true,
          "canDelay": true,
          "ToughnessDMGType": "Imaginary"
        }
      ]
    },
    {
      "name": "Consume",
      "consumeFrom": "MaxHP",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "sourceTarget": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "consumePercent": {
        "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[1]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[1]]}"
        ]
      },
      "consumeFloor": 1
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-769919494\">Enemy_W3_Aventurine_IF_Score_Light_Add</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-769919494\">Enemy_W3_Aventurine_IF_Score_Light_Add</a>",
      "addStacksPerTrigger": {
        "operator": "Variables[0] (W3_Aventurine_00_IF_Score) || RETURN",
        "displayLines": "W3_Aventurine_00_IF_Score",
        "constants": [],
        "variables": [
          "W3_Aventurine_00_IF_Score"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"197888775\">Enemy_W3_Aventurine_IF_Score_Light_Display</a>",
      "addStacksPerTrigger": {
        "operator": "Variables[0] (W3_Aventurine_00_IF_Score) || RETURN",
        "displayLines": "W3_Aventurine_00_IF_Score",
        "constants": [],
        "variables": [
          "W3_Aventurine_00_IF_Score"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "SummonCountNumber",
            "compareType": ">=",
            "value2": 7
          },
          "failed": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W3_Aventurine_IF_AbilityP01_InsertAbility02_Part01",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "priorityTag": "MonsterReviveOthers",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 2
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "SummonCountNumber",
            "compareType": ">=",
            "value2": 10
          },
          "failed": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W3_Aventurine_IF_AbilityP01_InsertAbility02_Part01",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "priorityTag": "MonsterReviveOthers",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    }
  ],
  "references": []
}