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
        "target": {
          "name": "Target Name",
          "target": "{{Battle Event's Caster}}"
        },
        "modifier": "Topaz_UltraEnhance[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
      },
      "passed": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Battle Event's Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "_damageStart",
          "value": 1
        }
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Battle Event's Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "_damageStart",
          "value": 1
        }
      ]
    }
  ],
  "references": []
}