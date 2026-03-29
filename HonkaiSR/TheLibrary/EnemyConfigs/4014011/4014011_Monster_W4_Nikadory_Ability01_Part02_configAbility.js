const configAbility = {
  "fileName": "4014011_Monster_W4_Nikadory_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Enemy Team All(with Unselectable)}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 1,
        "conditions": {
          "name": "Enemy ID",
          "ID": 401402,
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "characterName": null,
          "isCompareUniqueID": true
        }
      }
    },
    "Ability Start",
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1947729446\">Enemy_W4_Nikadory_FT_SpecialAction</a>"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_4) || RETURN",
                  "displayLines": "UnusedUnderThisBase_4",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_4"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                  "displayLines": "{[Skill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End"
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Enemy Team All(with Unselectable)}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 1,
        "conditions": {
          "name": "Enemy ID",
          "ID": 401402,
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "characterName": null,
          "isCompareUniqueID": true
        }
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}