const configAbility = {
  "fileName": "Lynx_Lynx_Ability01_Part01",
  "childAbilityList": [
    "Lynx_Lynx_Ability01_Part01",
    "Lynx_Lynx_Ability01_Part02",
    "Lynx_Lynx_Ability01_Camera"
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
      "ability": "Lynx_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}