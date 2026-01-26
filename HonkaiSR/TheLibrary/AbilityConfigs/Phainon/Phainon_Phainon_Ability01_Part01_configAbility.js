const configAbility = {
  "fileName": "Phainon_Phainon_Ability01_Part01",
  "childAbilityList": [
    "Phainon_Phainon_Ability01_Part01",
    "Phainon_Phainon_Ability01_Part02",
    "Phainon_Phainon_Ability01_Camera"
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
      "ability": "Phainon_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}