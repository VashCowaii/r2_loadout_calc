const configAbility = {
  "fileName": "Yanqing_Yanqing_PassiveAbility01_InsertAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "One With the Sword"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Single Target (Primary)",
      "modifier": "Yanqing_BonusTargetMark"
    },
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": "Caster",
      "inherentTarget": "Single Target (Primary)",
      "ability": "Yanqing_PassiveAbility01_InsertAbilityPhase02",
      "isTrigger": true
    }
  ],
  "references": []
}