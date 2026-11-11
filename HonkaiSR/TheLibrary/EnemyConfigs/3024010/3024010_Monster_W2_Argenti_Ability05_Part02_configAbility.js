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
        "variableName": "ENEMIES_OBJECT_UNUSED__113"
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
          "displayLines": "({[Skill05[0]]} * 0.2)"
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
          "displayLines": "({[Skill05[0]]} * 0.8)"
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
        "name": "OR",
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
              "displayLines": "UnusedUnderThisBase_9918"
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
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}