const configAbility = {
  "fileName": "Luka_Luka_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "STAT_DOT_Bleed"
          },
          {
            "name": "Eidolon Activated",
            "eidolon": 1
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
          "modifier": "<a class=\"gModGreen\" id=\"-632542414\">Luka_Eidolon1_Sub</a>[<span class=\"descriptionNumberColor\">Fighting Endlessly</span>]",
          "duration": {
            "displayLines": "2"
          },
          "stackLimit": 1,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.15"
            }
          }
        }
      ]
    },
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Kinetic Overload"
          },
          "passed": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "typeOverride": "Buff",
              "dispelCount": {
                "displayLines": "1"
              },
              "dispelOrder": "LastAdded",
              "counterKey": "BuffClear"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "1.2"
            },
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1202378594\">Luka_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "duration": {
            "displayLines": "3"
          },
          "baseChance": {
            "displayLines": "1"
          },
          "valuePerStack": {
            "Modifier_Tear_DamageRatio": {
              "displayLines": "0.24"
            },
            "Modifier_Tear_MaxPercentage": {
              "displayLines": "3.38"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1275149529\">Luka_ReloadBullet</a>",
      "valuePerStack": {
        "MDF_AddValue": {
          "displayLines": "1"
        }
      }
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}