const configAbility = {
  "fileName": "Clara_Klara_Ability03_Part01",
  "childAbilityList": [
    "Clara_Klara_Ability03_Camera",
    "Clara_Klara_Ability03_EnterReady",
    "Clara_Klara_Ability03_Part01",
    "Clara_Klara_Ability03_Part02"
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
      "ability": "Klara_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}