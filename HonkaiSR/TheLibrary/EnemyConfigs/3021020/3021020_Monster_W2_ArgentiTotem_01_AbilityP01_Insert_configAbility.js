const configAbility = {
  "fileName": "3021020_Monster_W2_ArgentiTotem_01_AbilityP01_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Stone of Plummeting Foundation"
    },
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
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
      "ability": "Monster_W2_ArgentiTotem_01_AbilityP01_Part01",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}