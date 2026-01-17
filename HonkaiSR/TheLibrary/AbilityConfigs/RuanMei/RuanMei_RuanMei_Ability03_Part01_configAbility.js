const configAbility = {
  "fileName": "RuanMei_RuanMei_Ability03_Part01",
  "childAbilityList": [
    "RuanMei_RuanMei_Ability03_Camera",
    "RuanMei_RuanMei_Ability03_EnterReady",
    "RuanMei_RuanMei_Ability03_Part01",
    "RuanMei_RuanMei_Ability03_Part02",
    "RuanMei_RuanMei_TriggerImprintEffect"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
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
      "ability": "RuanMei_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}