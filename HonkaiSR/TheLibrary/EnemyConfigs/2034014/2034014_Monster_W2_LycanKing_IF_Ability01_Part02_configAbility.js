const configAbility = {
  "fileName": "2034014_Monster_W2_LycanKing_IF_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"370251759\">Enemy_W2_lycanKing_Locking</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
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
            "DamageType": "Thunder",
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
    "Trigger: Attack End",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "revertDefault": true
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "set": 0
    },
    {
      "name": "Advance/Delay up to Target",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}.[[getAttachedSummon]] - {{Ability Target(ST)}}.[[getAttachedSummon]].[[removeBattleEventsFromOthers]]"
      },
      "targetRef": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "refPoint": "After",
      "isStartingAV": true
    },
    {
      "name": "Advance/Delay up to Target",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}.[[getMemosprite]]"
      },
      "targetRef": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "refPoint": "After",
      "isStartingAV": true
    },
    {
      "name": "Advance/Delay up to Target",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}.[[getAttachedSummon]].[[removeBattleEventsFromOthers]]"
      },
      "targetRef": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "refPoint": "After",
      "isStartingAV": true
    },
    {
      "name": "Assign Advance/Delay to Current Ability Use",
      "adjustmentValue": 1,
      "adjustmentType": "="
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}