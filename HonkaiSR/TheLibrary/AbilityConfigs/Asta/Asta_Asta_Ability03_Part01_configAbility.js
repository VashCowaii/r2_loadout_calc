const configAbility = {
  "fileName": "Asta_Asta_Ability03_Part01",
  "childAbilityList": [
    "Asta_Asta_Ability03_Camera",
    "Asta_Asta_Ability03_EnterReady",
    "Asta_Asta_Ability03_Part01",
    "Asta_Asta_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
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
      "ability": "Asta_Ability03_Part02"
    }
  ],
  "references": []
}