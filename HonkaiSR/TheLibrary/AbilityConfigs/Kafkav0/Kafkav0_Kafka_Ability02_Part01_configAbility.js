const configAbility = {
  "fileName": "Kafkav0_Kafka_Ability02_Part01",
  "childAbilityList": [
    "Kafkav0_Kafka_Ability02_Camera",
    "Kafkav0_Kafka_Ability02_Part01",
    "Kafkav0_Kafka_Ability02_Part02"
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
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
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
      "ability": "Kafka_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}