const configAbility = {
  "fileName": "Cipher_Cipher_PassiveAbility01_Insert_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "The Hospitable Dolosian"
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
      "ability": "Cipher_PassiveAbility01_Insert_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}