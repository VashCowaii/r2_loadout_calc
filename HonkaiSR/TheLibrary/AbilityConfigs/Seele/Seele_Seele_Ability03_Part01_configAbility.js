const configAbility = {
  "fileName": "Seele_Seele_Ability03_Part01",
  "childAbilityList": [
    "Seele_Seele_Ability03_Camera",
    "Seele_Seele_Ability03_EnterReady",
    "Seele_Seele_Ability03_Part01",
    "Seele_Seele_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    30,
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
      "ability": "Seele_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}