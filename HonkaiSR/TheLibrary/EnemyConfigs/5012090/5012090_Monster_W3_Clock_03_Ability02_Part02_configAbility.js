const configAbility = {
  "fileName": "5012090_Monster_W3_Clock_03_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "displayLines": "{[Skill02[0]]}"
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-315004140\">Standard_Shake</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
      "duration": 1,
      "baseChance": {
        "displayLines": "{[Skill02[1]]}"
      },
      "valuePerStack": {
        "MDF_ActionDelayRatio": {
          "displayLines": "{[Skill02[3]]}"
        }
      },
      "success": []
    },
    {
      "name": "Adjust Team Punchline Value",
      "value": {
        "displayLines": "{[Skill02[2]]}"
      },
      "adjustment": "Add"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Is_Charge"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Is_BeingAttacked"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1466426252\">Monster_W3_Clock_03_Charge</a>[<span class=\"descriptionNumberColor\">Strength Boost!</span>]"
    },
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase_normal"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}