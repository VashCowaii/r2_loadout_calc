const configAbility = {
  "fileName": "3024010_Monster_W2_Argenti_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "ENEMIES_OBJECT_UNUSED__113"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill05[0]]}) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "({[Skill05[0]]} * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "{[Skill05[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "20%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill05[0]]}) || Constants[0] (0.8) || MUL || RETURN",
          "displayLines": "({[Skill05[0]]} * 0.8)",
          "constants": [
            0.8
          ],
          "variables": [
            "{[Skill05[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "80%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 3024011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Argenti (Complete)"
          },
          {
            "name": "Enemy ID",
            "ID": 302401100,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
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
          "modifier": "<a class=\"gModGreen\" id=\"352751855\">Monster_W1_Gepard_RL_DamageUP</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "valuePerStack": {
            "MDF_DamageAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_13) || RETURN",
              "displayLines": "UnusedUnderThisBase_13",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_13"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 302401000,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": null
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}