const configAbility = {
  "fileName": "4032060_Monster_W4_IronTombCorePart_Ability02_Part01",
  "childAbilityList": [
    "4032060_Monster_W4_IronTombCorePart_Ability02_Part01",
    "4032060_Monster_W4_IronTombCorePart_Ability02_Part02",
    "4032060_Monster_W4_IronTombCorePart_Ability02_Camera",
    "4032060_Monster_W4_IronTombCorePart_Ability02_Camera02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_IronTombCorePart_Ability02_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Irontomb: Core}}"
        },
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 1
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