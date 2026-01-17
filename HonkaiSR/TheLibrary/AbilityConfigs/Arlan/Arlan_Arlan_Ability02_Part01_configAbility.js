const configAbility = {
  "fileName": "Arlan_Arlan_Ability02_Part01",
  "childAbilityList": [
    "Arlan_Arlan_Ability02_Camera",
    "Arlan_Arlan_Ability02_Part01",
    "Arlan_Arlan_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    20,
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
      "ability": "Arlan_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}