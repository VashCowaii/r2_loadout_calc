const configAbility = {
  "fileName": "8015010_Monster_AML_Boss_Ability03_Part02",
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
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Constants[0] (1) || Constants[1] (0.5) || MUL || RETURN",
          "displayLines": "(1 * 0.5)",
          "constants": [
            1,
            0.5
          ],
          "variables": []
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "50%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Constants[0] (1) || Constants[1] (0.5) || MUL || RETURN",
          "displayLines": "(1 * 0.5)",
          "constants": [
            1,
            0.5
          ],
          "variables": []
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "50%"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "Standard_Confine[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
      "duration": 1,
      "baseChance": 1,
      "immediateEffect": true,
      "valuePerStack": {
        "MDF_SpeedDownRatio": 1,
        "MDF_ActionDelayRatio": 1
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}