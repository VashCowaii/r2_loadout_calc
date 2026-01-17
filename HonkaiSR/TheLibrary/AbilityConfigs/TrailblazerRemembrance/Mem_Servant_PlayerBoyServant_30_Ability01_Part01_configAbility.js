const configAbility = {
  "fileName": "Mem_Servant_PlayerBoyServant_30_Ability01_Part01",
  "childAbilityList": [
    "Mem_Servant_PlayerBoyServant_30_Ability01_Part01",
    "Mem_Servant_PlayerBoyServant_30_Ability01_Part02",
    "Mem_Servant_PlayerBoyServant_30_Ability01_Camera",
    "Mem_Servant_PlayerBoyServant_30_Ability01_Camera_Charm"
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
      "ability": "Servant_PlayerBoyServant_30_Ability01_Part02",
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