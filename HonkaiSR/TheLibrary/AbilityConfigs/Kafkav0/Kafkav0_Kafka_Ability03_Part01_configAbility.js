const configAbility = {
  "fileName": "Kafkav0_Kafka_Ability03_Part01",
  "childAbilityList": [
    "Kafkav0_Kafka_Ability03_Camera",
    "Kafkav0_Kafka_Ability03_Part01",
    "Kafkav0_Kafka_Ability03_Part02",
    "Kafkav0_Kafka_Ability03_EnterReady"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
    20,
    0
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Kafka_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}