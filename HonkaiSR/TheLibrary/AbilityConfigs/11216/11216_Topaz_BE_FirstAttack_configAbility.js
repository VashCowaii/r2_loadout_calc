const configAbility = {
  "fileName": "11216_Topaz_BE_FirstAttack",
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
        "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
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
          "value": 1,
          "variableName": "_damageStart"
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
          "value": 1,
          "variableName": "_damageStart"
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}