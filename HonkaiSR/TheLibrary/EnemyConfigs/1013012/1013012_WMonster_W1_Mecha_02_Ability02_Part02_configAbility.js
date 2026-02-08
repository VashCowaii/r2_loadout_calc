const configAbility = {
  "fileName": "1013012_WMonster_W1_Mecha_02_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"118150896\">Monster_W1_Mecha03_RL_Ability03_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1670817312\">W1_Mecha02_AttackBonus</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1670817312\">W1_Mecha02_AttackBonus</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
          "duration": 1,
          "valuePerStack": {
            "ModifierDamageUpValue": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 1013011,
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "characterName": "Automaton Grizzly (Bug)"
          },
          {
            "name": "Enemy ID",
            "ID": 1013012,
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "characterName": "Automaton Grizzly (Complete)"
          },
          {
            "name": "Enemy ID",
            "ID": 1013013,
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "characterName": "Automaton Grizzly (Complete)"
          },
          {
            "name": "Enemy ID",
            "ID": 1013014,
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "characterName": "Automaton Grizzly (Complete)"
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1364752860\">W1_Mecha02_AttackBonus_Effect</a>"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}