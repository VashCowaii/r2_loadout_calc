const configAbility = {
  "fileName": "2033011_Monster_W2_LycanMecha_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Left of Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Right of Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
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
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 2033011,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Howling Casket (Bug)",
        "isBaseCompare": true
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1708564836\">Standard_Fear</a>[<span class=\"descriptionNumberColor\">Terrified</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]",
              "baseChance": {
                "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                "displayLines": "{[Skill04[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[0]]}"
                ]
              },
              "valuePerStack": {
                "MDF_LoseSP": {
                  "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                  "displayLines": "{[Skill04[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[1]]}"
                  ]
                }
              },
              "casterAssign": "CasterSelf"
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}