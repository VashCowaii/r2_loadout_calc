const configAbility = {
  "fileName": "2004014_Monster_W2_Kafka_IF02_Ability02_Part01",
  "childAbilityList": [
    "2004014_Monster_W2_Kafka_IF02_Ability02_Part01",
    "2004014_Monster_W2_Kafka_IF02_Ability02_Part02",
    "2004014_Monster_W2_Kafka_Ability02_Camera",
    "2004014_Monster_W2_Kafka_IF02_Ability02_Camera"
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
      "ability": "Monster_W2_Kafka_IF02_Ability02_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "Monster_W2_Kafka_IF02_ContainJXDTag"
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    },
    "Deleted bullshit"
  ],
  "references": []
}