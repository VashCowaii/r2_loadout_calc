const configAbility = {
  "fileName": "TopazNumby_Topaz_BE_Hit",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": "Caster",
        "modifier": "Topaz_BE_HitEffect"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "HasHitEffect",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Topaz_BE_HitEffect"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "HasHitEffect",
          "value": 0
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HasHitEffect",
        "compareType": ">",
        "value2": 0
      }
    }
  ],
  "references": []
}