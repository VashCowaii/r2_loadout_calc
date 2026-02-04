const configAbility = {
  "fileName": "1023011_Monster_W1_Mecha_Fire_Ability08_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] ({[Skill08[2]]}) || RETURN",
          "displayLines": "{[Skill08[2]]}",
          "constants": [],
          "variables": [
            "{[Skill08[2]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "LightTeam_Count"
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "variableName": "LightTeam_Count",
      "livingTargets": true
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (LightTeam_Count) || RETURN",
        "displayLines": "LightTeam_Count",
        "constants": [],
        "variables": [
          "LightTeam_Count"
        ]
      },
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Standard_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
                  "displayLines": "{[Skill08[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill08[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Targets Adjacent to Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill08[1]]}) || RETURN",
                  "displayLines": "{[Skill08[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill08[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Standard_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]"
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W1_Mecha04_01_HeadEffect"
    },
    "Trigger: Ability End"
  ],
  "references": []
}