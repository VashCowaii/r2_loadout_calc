const configAbility = {
  "fileName": "Castorice_Castorice_Ability01_Part01",
  "childAbilityList": [
    "Castorice_Castorice_Ability01_Camera",
    "Castorice_Castorice_Ability01_Part01",
    "Castorice_Castorice_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": [
    10,
    0,
    0
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Castorice_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}