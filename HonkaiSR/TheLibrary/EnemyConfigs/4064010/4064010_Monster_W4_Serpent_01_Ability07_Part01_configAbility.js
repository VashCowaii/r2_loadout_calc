const configAbility = {
  "fileName": "4064010_Monster_W4_Serpent_01_Ability07_Part01",
  "childAbilityList": [
    "4064010_Monster_W4_Serpent_01_Ability07_Camera",
    "4064010_Monster_W4_Serpent_01_Ability07_Part01",
    "4064010_Monster_W4_Serpent_01_Ability07_Part02"
  ],
  "skillTrigger": "Skill07",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Body-Types",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "types": [
                  "LittleAvatar"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Body-Types",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "types": [
                  "LittleAvatar"
                ]
              }
            }
          ]
        }
      ],
      "noTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Body-Types",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "types": [
              "LittleAvatar"
            ]
          }
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_Serpent_01_Ability07_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}