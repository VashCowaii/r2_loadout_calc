const configAbility = {
  "fileName": "Blade_AdvancedRen_Passive1Atk_Ability",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Enemies Still Alive",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "includeNonTargets": true
      },
      "passed": [
        {
          "name": "UI Display Event",
          "popUpText": "Shuhu's Gift"
        },
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "variableName": "MwRen_isAttack",
          "value": 1
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "AdvancedRen_Passive1Atk02_Ability",
          "isTrigger": true
        }
      ]
    }
  ],
  "references": []
}