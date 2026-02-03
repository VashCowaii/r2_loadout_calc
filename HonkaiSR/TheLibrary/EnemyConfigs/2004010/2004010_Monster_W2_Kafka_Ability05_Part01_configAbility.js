const configAbility = {
  "fileName": "2004010_Monster_W2_Kafka_Ability05_Part01",
  "childAbilityList": [
    "2004010_Monster_W2_Kafka_Ability05_Part01",
    "2004010_Monster_W2_Kafka_Ability05_Part02",
    "2004010_Monster_W2_Kafka_Ability05_Camera"
  ],
  "skillTrigger": "Skill05",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W2_Kafka_Ability05_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}