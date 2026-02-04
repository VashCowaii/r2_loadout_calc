const configAbility = {
  "fileName": "Garmentmaker_Servant_AglaeaServant_Ability11_Part01",
  "childAbilityList": [
    "Garmentmaker_Servant_AglaeaServant_Ability11_Part01",
    "Garmentmaker_Servant_AglaeaServant_Ability11_Part02",
    "Garmentmaker_Servant_AglaeaServant_Ability11_Camera",
    "Garmentmaker_Servant_AglaeaServant_Ability11_Camera_Charm"
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
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Servant_AglaeaServant_Ability11_Part02",
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
    },
    "Deleted bullshit"
  ],
  "references": []
}