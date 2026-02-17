const configAbility = {
  "fileName": "3002012_Monster_W3_TV_02_Ability02_Part02",
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
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)v2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1732782012\">MModifier_Monster_W3_TV_ReduceSPEffect</a>"
    },
    "Trigger: Attack End",
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)v2}}"
      },
      "value": {
        "operator": "Variables[0] ({[Skill02[1]]}) || INVERT || RETURN",
        "displayLines": "-{[Skill02[1]]}",
        "constants": [],
        "variables": [
          "{[Skill02[1]]}"
        ]
      },
      "isFixed": "(Fixed)"
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)v2}}"
      },
      "popUpText": "Energy Reduced",
      "living": true
    },
    "Trigger: Ability End"
  ],
  "references": []
}