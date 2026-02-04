const configAbility = {
  "fileName": "Archer_Archer_Ability01_Part01",
  "childAbilityList": [
    "Archer_Archer_Ability01_Camera",
    "Archer_Archer_Ability01_Part01",
    "Archer_Archer_Ability01_Part02"
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
      "ability": "Archer_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}