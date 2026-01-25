const configAbility = {
  "fileName": "LittleIca_Servant_HyacineServant_Ability01_Part01",
  "childAbilityList": [
    "LittleIca_Servant_HyacineServant_Ability01_Part01",
    "LittleIca_Servant_HyacineServant_Ability01_Part02",
    "LittleIca_Servant_HyacineServant_Insert_Camera",
    "LittleIca_Servant_HyacineServant_Insert_Camera_Charm"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Memosprite",
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
      "ability": "Servant_HyacineServant_Ability01_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "Charm"
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    }
  ],
  "references": []
}