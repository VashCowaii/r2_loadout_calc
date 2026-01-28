const configAbility = {
  "fileName": "DanHengPT_DanHengPT_Ability01_Part01",
  "childAbilityList": [
    "DanHengPT_DanHengPT_Ability01_Camera",
    "DanHengPT_DanHengPT_Ability01_Part01",
    "DanHengPT_DanHengPT_Ability01_Part02"
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
      "ability": "DanHengPT_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}