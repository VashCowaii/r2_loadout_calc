const configAbility = {
  "fileName": "Fugue_Fugue_Ability02_Part01",
  "childAbilityList": [
    "Fugue_Fugue_Ability02_Camera",
    "Fugue_Fugue_Ability02_Camera_Self",
    "Fugue_Fugue_Ability02_Part01",
    "Fugue_Fugue_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    0,
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
      "ability": "Fugue_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "references": []
}