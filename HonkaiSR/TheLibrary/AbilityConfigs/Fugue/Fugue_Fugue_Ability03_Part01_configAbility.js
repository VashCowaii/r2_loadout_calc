const configAbility = {
  "fileName": "Fugue_Fugue_Ability03_Part01",
  "childAbilityList": [
    "Fugue_Fugue_Ability03_Camera",
    "Fugue_Fugue_Ability03_EnterReady",
    "Fugue_Fugue_Ability03_Part01",
    "Fugue_Fugue_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
    20,
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
      "ability": "Fugue_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}