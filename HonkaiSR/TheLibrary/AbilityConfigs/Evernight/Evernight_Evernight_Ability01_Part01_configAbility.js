const configAbility = {
  "fileName": "Evernight_Evernight_Ability01_Part01",
  "childAbilityList": [
    "Evernight_Evernight_Ability01_Camera",
    "Evernight_Evernight_Ability01_Far_Camera",
    "Evernight_Evernight_Ability01_Part01",
    "Evernight_Evernight_Ability01_Part02"
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
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Target Count SUM",
            "target": {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            "conditions": {
              "name": "Compare: Monster Rank",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "compareType": ">=",
              "value2": 5
            }
          },
          {
            "name": "Is Part Of Team",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "team": "Enemy Team"
          }
        ]
      },
      "passed": [
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit",
        "Deleted bullshit"
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Evernight_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}