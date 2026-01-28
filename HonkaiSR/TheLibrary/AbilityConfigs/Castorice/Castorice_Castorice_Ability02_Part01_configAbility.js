const configAbility = {
  "fileName": "Castorice_Castorice_Ability02_Part01",
  "childAbilityList": [
    "Castorice_Castorice_Ability02_Camera",
    "Castorice_Castorice_Ability02_Part01",
    "Castorice_Castorice_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": [
    20,
    0,
    10
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Castorice_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}