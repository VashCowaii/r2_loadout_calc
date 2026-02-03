const configAbility = {
  "fileName": "2004010_Monster_W2_Kafka_Ability02_Part01",
  "childAbilityList": [
    "2004010_Monster_W2_Kafka_Ability02_Part01",
    "2004010_Monster_W2_Kafka_Ability02_Part02",
    "2004010_Monster_W2_Kafka_Ability02_Camera"
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
      "ability": "Monster_W2_Kafka_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}