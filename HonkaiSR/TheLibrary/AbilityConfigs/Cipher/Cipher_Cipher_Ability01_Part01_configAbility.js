const configAbility = {
  "fileName": "Cipher_Cipher_Ability01_Part01",
  "childAbilityList": [
    "Cipher_Cipher_Ability01_Camera",
    "Cipher_Cipher_Ability01_Part01",
    "Cipher_Cipher_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": 20,
  "toughnessList": [
    10,
    0,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Cipher_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}