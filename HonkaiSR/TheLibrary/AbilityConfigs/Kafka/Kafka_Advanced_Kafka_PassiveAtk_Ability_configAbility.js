const configAbility = {
  "fileName": "Kafka_Advanced_Kafka_PassiveAtk_Ability",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_InsertCount",
      "value": -1,
      "max": {
        "displayLines": "2"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_InsertCount",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "_InsertCount"
          },
          "maximum": {
            "displayLines": "2"
          },
          "assignState": "True",
          "priorState": "CoolDown",
          "bar#": 3,
          "cooldown": 1
        }
      ],
      "failed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "_InsertCount"
          },
          "maximum": {
            "displayLines": "2"
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE, with Unselectables)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-671501657\">Advanced_Kafka_Friend_Mark_Main</a>"
    },
    {
      "name": "UI Display Event",
      "popUpText": "Gentle but Cruel"
    },
    "Deleted bullshit",
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "1"
      },
      "variableName": "SkillP01_P2_BaseChance"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(2 + 1)"
          },
          "variableName": "Skill03_P3_LifeTime"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(2.9 + 1.56)"
          },
          "variableName": "Skill03_P4_DOTPercentage"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "2"
          },
          "variableName": "Skill03_P3_LifeTime"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "2.9"
          },
          "variableName": "Skill03_P4_DOTPercentage"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1537350177\">Advanced_Kafka_PassiveDotDamage_Eidolon1</a>[<span class=\"descriptionNumberColor\">DoT Vulnerability</span>]",
          "duration": {
            "displayLines": "2"
          },
          "baseChance": {
            "displayLines": "1"
          },
          "valuePerStack": {
            "MDF_DotRatio": {
              "displayLines": "0.3"
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
          "displayLines": "1.4"
        },
        "HitSplit": 0.15,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
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
          "displayLines": "1.4"
        },
        "HitSplit": 0.15,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
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
          "displayLines": "1.4"
        },
        "HitSplit": 0.15,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
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
          "displayLines": "1.4"
        },
        "HitSplit": 0.15,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
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
          "displayLines": "1.4"
        },
        "HitSplit": 0.15,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
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
          "displayLines": "1.4"
        },
        "HitSplit": 0.25,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
      "duration": {
        "displayLines": "Skill03_P3_LifeTime"
      },
      "baseChance": {
        "displayLines": "SkillP01_P2_BaseChance"
      },
      "valuePerStack": {
        "Modifier_Electric_DamagePercentage": {
          "displayLines": "Skill03_P4_DOTPercentage"
        }
      },
      "stackFlag": "CharacterSkill"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Thorns"
      },
      "passed": [
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "DOT_TriggerRatio",
          "eventType": "DOT",
          "value": {
            "displayLines": "0.8"
          }
        }
      ]
    },
    "Trigger: Attack End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}