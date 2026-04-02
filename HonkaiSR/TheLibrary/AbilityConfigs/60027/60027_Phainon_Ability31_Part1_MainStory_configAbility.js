const configAbility = {
  "fileName": "60027_Phainon_Ability31_Part1_MainStory",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"754083449\">Enemy_W4_DawnsEyePart_03_DieController</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"740710426\">Monster_Standard_DisableAction</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Battle Event List}}"
      },
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Battle Event ID",
            "ID": 20015,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          },
          {
            "name": "Battle Event ID",
            "ID": 60029,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Destroy Battle Entity",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        }
      ]
    },
    {
      "name": "UI Display Event",
      "popUpText": "He Who Bears the World Must Burn"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Phainon_Ability31_Part2_MainStory",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Clear DMG Numbers(UI)",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      }
    },
    {
      "name": "Clear DMG Numbers(UI)",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      }
    },
    {
      "name": "Clear DMG Numbers(UI)",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      }
    },
    {
      "name": "Clear DMG Numbers(UI)",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Clear DMG Numbers(UI)",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Clear DMG Numbers(UI)",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}