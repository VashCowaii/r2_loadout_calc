const configAbility = {
  "fileName": "Aventurine_Aventurine_PassiveAbility01_InsertAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Shot Loaded Right"
    },
    "Deleted bullshit",
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
      "ability": "Aventurine_PassiveAbility01_InsertAbilityPhase02",
      "isTrigger": true
    }
  ],
  "onAbort": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Aventurine_Trace03_Trigger"
    }
  ],
  "references": []
}