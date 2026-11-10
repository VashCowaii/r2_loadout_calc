const configAbility = {
  "fileName": "Clara_Klara_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Team Count",
      "variableName": "Skill02_TargetNumber",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"90816647\">Klara_BPAbility_Revenge</a>[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
      }
    },
    {
      "name": "Shot Fired",
      "caster": {
        "name": "Target Name",
        "target": "{{Pseudo-Character Partner}}"
      },
      "projectileCountTotal": 4
    },
    {
      "name": "Shot Fired",
      "caster": {
        "name": "Target Name",
        "target": "{{Pseudo-Character Partner}}"
      },
      "projectileCountTotal": 4,
      "projectileDMG": {
        "name": "ATK Scaling DMG",
        "target": {
          "name": "Target Name",
          "target": "{{Clara's Counter Target}}"
        },
        "AttackScaling": {
          "DamageType": "Physical",
          "Damage": {
            "displayLines": "(1.2 * 0.25)"
          },
          "Toughness": null,
          "Tags": null,
          "attackType": "Skill"
        }
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "displayLines": "1.2"
        },
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "Tags": null,
        "attackType": "Skill",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "failed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Clara's Counter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"90816647\">Klara_BPAbility_Revenge</a>[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}