const configAbility = {
  "fileName": "2004014_Monster_W2_Kafka_Ability03_Part01",
  "childAbilityList": [
    "2004014_Monster_W2_Kafka_Ability03_Part01",
    "2004014_Monster_W2_Kafka_Ability03_Part02",
    "2004014_Monster_W2_Kafka_Ability03_Camera",
    "2004014_Monster_W2_Kafka_IF_Ability03_Insert_Part01",
    "2004014_Monster_W2_Kafka_IF_Ability03_Insert_Part02",
    "2004014_Monster_W2_Kafka_IF_Ability03_Camera"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W2_Kafka_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}