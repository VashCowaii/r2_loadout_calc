const configAbility = {
  "fileName": "2004010_Monster_W2_Kafka_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 2004011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Stellaron Hunter: Kafka (Complete)",
            "isBaseCompare": true
          },
          {
            "name": "Enemy ID",
            "ID": 2004012,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Stellaron Hunter: Kafka (Complete)",
            "isBaseCompare": true
          },
          {
            "name": "Enemy ID",
            "ID": 2004013,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Stellaron Hunter: Kafka (Illusion)",
            "isBaseCompare": true
          },
          {
            "name": "Enemy ID",
            "ID": 2004015,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Stellaron Hunter: Kafka",
            "isBaseCompare": true
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
          "modifier": "<a class=\"gModGreen\" id=\"228795985\">Monster_W2_Kafka_RL_MeleeAttack</a>",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "displayLines": "UnusedUnderThisBase_9482"
            }
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "({[Skill01[0]]} * 0.5)"
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "50%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "({[Skill01[0]]} * 0.5)"
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "50%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]"
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "ElectricFlag",
          "resetValue": 1,
          "scope": "TargetEntity"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
      "duration": {
        "displayLines": "{[Skill01[2]]}"
      },
      "baseChance": {
        "displayLines": "{[Skill01[1]]}"
      },
      "immediateEffect": true,
      "valuePerStack": {
        "Modifier_Electric_DamagePercentage": {
          "displayLines": "{[Skill01[3]]}"
        }
      },
      "stackFlag": "CharacterSkill"
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "ElectricFlag",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1442954604\">Monster_W2_Kafka_EnhanceElectricDamage</a>"
        }
      ]
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "ElectricFlag",
      "scope": "TargetEntity"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"228795985\">Monster_W2_Kafka_RL_MeleeAttack</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}