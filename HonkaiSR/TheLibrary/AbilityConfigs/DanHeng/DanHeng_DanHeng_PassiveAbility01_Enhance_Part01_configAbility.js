const configAbility = {
  "fileName": "DanHeng_DanHeng_PassiveAbility01_Enhance_Part01",
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
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "DanHeng_PassiveAbility01_Enhance_Part02",
          "isTrigger": true
        }
      ]
    }
  ],
  "references": []
}