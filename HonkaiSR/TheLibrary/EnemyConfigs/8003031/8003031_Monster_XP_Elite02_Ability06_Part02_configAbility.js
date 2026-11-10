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
        "target": "{{Enemies by Taunt OR Random Aggro}}"
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
              "displayLines": "{[Skill06[0]]}"
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
            "displayLines": "{[Skill06[4]]}"
          },
          "baseChance": {
            "displayLines": "{[Skill06[2]]}"
          },
          "immediateEffect": true,
          "valuePerStack": {
            "Modifier_Electric_DamagePercentage": {
              "displayLines": "{[Skill06[3]]}"
            }
          },
          "stackFlag": "CharacterSkill"
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>({[Skill06[1]]}) - 1)"
      },
      "execute": [
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
                  "displayLines": "{[Skill06[0]]}"
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
                "displayLines": "{[Skill06[4]]}"
              },
              "baseChance": {
                "displayLines": "{[Skill06[2]]}"
              },
              "immediateEffect": true,
              "valuePerStack": {
                "Modifier_Electric_DamagePercentage": {
                  "displayLines": "{[Skill06[3]]}"
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
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}