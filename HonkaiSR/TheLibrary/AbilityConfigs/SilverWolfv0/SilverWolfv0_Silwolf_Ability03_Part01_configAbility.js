const configAbility = {
  "fileName": "SilverWolfv0_Silwolf_Ability03_Part01",
  "childAbilityList": [
    "SilverWolfv0_Silwolf_Ability03_Camera",
    "SilverWolfv0_Silwolf_Ability03_EnterReady",
    "SilverWolfv0_Silwolf_Ability03_Part01",
    "SilverWolfv0_Silwolf_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    30,
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
      "ability": "Silwolf_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}