const configAbility = {
  "fileName": "Cipher_Cipher_Ability03_Part01",
  "childAbilityList": [
    "Cipher_Cipher_Ability03_Camera",
    "Cipher_Cipher_Ability03_Part01",
    "Cipher_Cipher_Ability03_Part02",
    "Cipher_Cipher_Ability03_EnterReady"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    30,
    0,
    20
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Cipher_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}