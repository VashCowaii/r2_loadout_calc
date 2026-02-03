const configAbility = {
  "fileName": "2004012_Monster_W2_Kafka_RL_Ability07_Part01",
  "childAbilityList": [
    "2004012_Monster_W2_Kafka_RL_Ability07_Part01",
    "2004012_Monster_W2_Kafka_RL_Ability07_Part02",
    "2004012_Monster_W2_Kafka_RL_Ability07_Camera"
  ],
  "skillTrigger": "Skill07",
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
      "ability": "Monster_W2_Kafka_RL_Ability07_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}