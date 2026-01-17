const configAbility = {
  "fileName": "Kafka_Advanced_Kafka_Ability01_Part01",
  "childAbilityList": [
    "Kafka_Kafka_Ability01_Camera",
    "Kafka_Advanced_Kafka_Ability01_Part01",
    "Kafka_Advanced_Kafka_Ability01_Part02"
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
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Advanced_Kafka_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}