const configAbility = {
  "fileName": "Tingyun_TingYun_Ability01_Part01",
  "childAbilityList": [
    "Tingyun_Tingyun_Ability01_Camera",
    "Tingyun_TingYun_Ability01_Part01",
    "Tingyun_TingYun_Ability01_Part02"
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
      "ability": "TingYun_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}