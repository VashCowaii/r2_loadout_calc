const configAbility = {
  "fileName": "Sampo_Sampo_Ability01_Part01",
  "childAbilityList": [
    "Sampo_Sampo_Ability01_Camera",
    "Sampo_Sampo_Ability01_Part01",
    "Sampo_Sampo_Ability01_Part02"
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
      "ability": "Sampo_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}