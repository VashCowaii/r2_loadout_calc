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
      "from": "Single Target (Primary) + Blast (Adjacent)",
      "maxTargets": 1,
      "conditions": {
        "name": "Has Flag",
        "target": "Use Prior Target(s) Defined",
        "flagName": "STAT_DOT"
      }
    },
    {
      "name": "Trigger Ability",
      "from": "Caster",
      "ability": "Advanced_Kafka_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}