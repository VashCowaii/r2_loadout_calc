const configAbility = {
  "fileName": "Seele_Seele_Ability01_Part01",
  "childAbilityList": [
    "Seele_Seele_Ability01_Camera",
    "Seele_Seele_Ability01_Part01",
    "Seele_Seele_Ability01_Part02"
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
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Seele_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}