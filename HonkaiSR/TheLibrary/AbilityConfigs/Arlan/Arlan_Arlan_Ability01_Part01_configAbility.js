const configAbility = {
  "fileName": "Arlan_Arlan_Ability01_Part01",
  "childAbilityList": [
    "Arlan_Arlan_Ability01_Camera",
    "Arlan_Arlan_Ability01_Part01",
    "Arlan_Arlan_Ability01_Part02"
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
      "ability": "Arlan_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}