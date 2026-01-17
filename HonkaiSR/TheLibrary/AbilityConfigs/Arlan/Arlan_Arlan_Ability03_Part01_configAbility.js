const configAbility = {
  "fileName": "Arlan_Arlan_Ability03_Part01",
  "childAbilityList": [
    "Arlan_Arlan_Ability03_Camera",
    "Arlan_Arlan_Ability03_EnterReady",
    "Arlan_Arlan_Ability03_Part01",
    "Arlan_Arlan_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    20,
    0,
    20
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Arlan_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}