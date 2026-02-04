const configAbility = {
  "fileName": "Fugue_Fugue_Ability01_Part01",
  "childAbilityList": [
    "Fugue_Fugue_Ability01_Camera",
    "Fugue_Fugue_Ability01_Part01",
    "Fugue_Fugue_Ability01_Part02"
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
      "ability": "Fugue_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}