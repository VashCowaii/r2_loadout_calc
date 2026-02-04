const configAbility = {
  "fileName": "Xueyi_Xueyi_Ability01_Part01",
  "childAbilityList": [
    "Xueyi_Xueyi_Ability01_Camera",
    "Xueyi_Xueyi_Ability01_Part01",
    "Xueyi_Xueyi_Ability01_Part02"
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
      "ability": "Xueyi_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "references": []
}