const configAbility = {
  "fileName": "Kafka_Advanced_Kafka_Ability02_Part01",
  "childAbilityList": [
    "Kafka_Kafka_Ability02_Camera",
    "Kafka_Advanced_Kafka_Ability02_Part01",
    "Kafka_Advanced_Kafka_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    20,
    0,
    10
  ],
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{ST and Blast}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "flagName": "STAT_DOT"
      }
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Advanced_Kafka_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}