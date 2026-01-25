const configAbility = {
  "fileName": "Fugue_Fugue_Ability11_Part01",
  "childAbilityList": [
    "Fugue_Fugue_Ability11_Camera",
    "Fugue_Fugue_Ability11_Part01",
    "Fugue_Fugue_Ability11_Part02"
  ],
  "skillTrigger": "Skill11",
  "abilityType": "Basic ATK",
  "energy": 20,
  "toughnessList": [
    10,
    0,
    5
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Fugue_Ability11_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}