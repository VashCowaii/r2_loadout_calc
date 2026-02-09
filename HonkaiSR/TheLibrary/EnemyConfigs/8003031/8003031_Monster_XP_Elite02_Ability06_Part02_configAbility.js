const configAbility = {
  "fileName": "8003031_Monster_XP_Elite02_Ability06_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemies by Aggro OR Random}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "ifTargetFound": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
            "displayLines": "{[Skill06[4]]}",
            "constants": [],
            "variables": [
              "{[Skill06[4]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
            "displayLines": "{[Skill06[2]]}",
            "constants": [],
            "variables": [
              "{[Skill06[2]]}"
            ]
          },
          "immediateEffect": true,
          "valuePerStack": {
            "Modifier_Electric_DamagePercentage": {
              "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
              "displayLines": "{[Skill06[3]]}",
              "constants": [],
              "variables": [
                "{[Skill06[3]]}"
              ]
            }
          },
          "stackFlag": "CharacterSkill"
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (WHOLE) || Variables[1] ({[Skill06[1]]}) || PARAM_1 || FUNCTION || Constants[0] (1) || SUB || RETURN",
        "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>({[Skill06[1]]}) - 1)",
        "constants": [
          1
        ],
        "variables": [
          "WHOLE",
          "{[Skill06[1]]}"
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
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                  "displayLines": "{[Skill06[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                "displayLines": "{[Skill06[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[4]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
                "displayLines": "{[Skill06[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[2]]}"
                ]
              },
              "immediateEffect": true,
              "valuePerStack": {
                "Modifier_Electric_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                  "displayLines": "{[Skill06[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[3]]}"
                  ]
                }
              },
              "stackFlag": "CharacterSkill"
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    "Trigger: Ability End"
  ],
  "references": []
}