const configAbility = {
  "fileName": "3002043_Monster_W3_Clock_02_Ability02_Part01",
  "childAbilityList": [
    "3002043_Monster_W3_Clock_02_Ability02_Part01",
    "3002043_Monster_W3_Clock_02_Ability02_Part02",
    "3002043_Monster_W3_Clock_02_Ability02_Camera",
    "3002043_Monster_W3_Clock_02_Ability02_Camera_Special"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W3_Clock_02_Ability02_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Right"
          }
        ]
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}