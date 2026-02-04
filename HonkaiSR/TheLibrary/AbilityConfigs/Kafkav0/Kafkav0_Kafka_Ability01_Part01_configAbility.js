const configAbility = {
  "fileName": "Kafkav0_Kafka_Ability01_Part01",
  "childAbilityList": [
    "Kafkav0_Kafka_Ability01_Camera",
    "Kafkav0_Kafka_Ability01_Part01",
    "Kafkav0_Kafka_Ability01_Part02"
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
      "ability": "Kafka_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "references": []
}