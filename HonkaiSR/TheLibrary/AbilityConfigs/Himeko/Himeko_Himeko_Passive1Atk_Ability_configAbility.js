const configAbility = {
  "fileName": "Himeko_Himeko_Passive1Atk_Ability",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Enemies Still Alive",
        "target": "Caster",
        "includeNonTargets": true
      },
      "passed": [
        {
          "name": "UI Display Event",
          "popUpText": "Victory Rush"
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Himeko_Passive1Atk02_Ability",
          "isTrigger": true
        }
      ]
    }
  ],
  "onAbort": [
    {
      "name": "Define Custom Variable",
      "variableName": "_Himeko_Attack",
      "value": 1
    }
  ],
  "references": []
}