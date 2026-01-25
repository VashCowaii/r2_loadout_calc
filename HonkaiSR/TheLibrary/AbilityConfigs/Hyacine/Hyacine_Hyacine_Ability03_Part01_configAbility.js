const configAbility = {
  "fileName": "Hyacine_Hyacine_Ability03_Part01",
  "childAbilityList": [
    "Hyacine_Hyacine_Ability03_Camera",
    "Hyacine_Hyacine_Ability03_EnterReady",
    "Hyacine_Hyacine_Ability03_Part01",
    "Hyacine_Hyacine_Ability03_Part02"
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
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Hyacine_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}