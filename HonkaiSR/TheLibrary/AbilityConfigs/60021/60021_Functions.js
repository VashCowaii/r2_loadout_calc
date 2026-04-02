const configAbility = {
  "fileName": "60021_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 1,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__270618984\">StageSpecialAbility_20412061_BEPerform</a>",
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "User Banned"
        },
        {
          "name": "Looped Event",
          "maxLoops": 8,
          "Event": []
        },
        {
          "name": "Looped Event",
          "maxLoops": 8,
          "Event": []
        },
        {
          "name": "Call Parameter Sequence",
          "parameterName": "SpecialEffectForAvatar"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
              "displayLines": "{[SkillP01[3]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[3]]}"
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Quantum"
            },
            "Tags": null,
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling"
      ]
    }
  ],
  "references": []
}