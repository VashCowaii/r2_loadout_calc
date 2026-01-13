const configAbility = {
  "fileName": "TopazNumby_Topaz_BE_LaterAttack",
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
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": "Caster [of Battle Event]",
        "modifier": "Topaz_UltraEnhance[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": "Caster [of Battle Event]",
          "inherentTarget": "Single Target (Primary)",
          "ability": "Topaz_BE_UltraAttackDamage",
          "isTrigger": true
        }
      ],
      "failed": [
        {
          "name": "Trigger Ability",
          "from": "Caster [of Battle Event]",
          "inherentTarget": "Single Target (Primary)",
          "ability": "Topaz_BE_NormalAttackDamage",
          "isTrigger": true
        }
      ]
    }
  ],
  "onAbort": [
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": "Caster [of Battle Event]",
            "flagName": "STAT_CTRL"
          },
          {
            "name": "Has Flag",
            "target": "Caster [of Battle Event]",
            "flagName": "STAT_CTRL_Frozen"
          }
        ]
      }
    }
  ],
  "references": []
}