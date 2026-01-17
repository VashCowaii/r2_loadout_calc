const configAbility = {
  "fileName": "Hysilens_Harscyline_Ability01_Part01",
  "childAbilityList": [
    "Hysilens_Harscyline_Ability01_Camera",
    "Hysilens_Harscyline_Ability01_Part01",
    "Hysilens_Harscyline_Ability01_Part02"
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
      "ability": "Harscyline_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}