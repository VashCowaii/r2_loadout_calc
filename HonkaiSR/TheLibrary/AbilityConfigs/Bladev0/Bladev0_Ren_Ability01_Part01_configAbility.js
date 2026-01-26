const configAbility = {
  "fileName": "Bladev0_Ren_Ability01_Part01",
  "childAbilityList": [
    "Bladev0_Ren_Ability01_Camera",
    "Bladev0_Ren_Ability01_Part01",
    "Bladev0_Ren_Ability01_Part02"
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
      "ability": "Ren_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}