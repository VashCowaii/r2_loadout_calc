const configAbility = {
  "fileName": "TopazNumby_Topaz_BE_FirstAttack",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": "Caster [of Battle Event]",
        "modifier": "Topaz_UltraEnhance[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
      },
      "passed": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "target": "Caster [of Battle Event]",
          "scope": "ContextCaster",
          "variableName": "_damageStart",
          "value": 1
        }
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "target": "Caster [of Battle Event]",
          "scope": "ContextCaster",
          "variableName": "_damageStart",
          "value": 1
        }
      ]
    }
  ],
  "references": []
}