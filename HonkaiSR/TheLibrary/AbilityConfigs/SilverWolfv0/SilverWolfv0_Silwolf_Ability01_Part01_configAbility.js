const configAbility = {
  "fileName": "SilverWolfv0_Silwolf_Ability01_Part01",
  "childAbilityList": [
    "SilverWolfv0_Silwolf_Ability01_Camera",
    "SilverWolfv0_Silwolf_Ability01_Part01",
    "SilverWolfv0_Silwolf_Ability01_Part02",
    "SilverWolfv0_Silwolf_PassiveAbility_RandomBug"
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
      "ability": "Silwolf_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}