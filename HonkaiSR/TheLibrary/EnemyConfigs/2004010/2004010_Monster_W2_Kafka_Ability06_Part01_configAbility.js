const configAbility = {
  "fileName": "2004010_Monster_W2_Kafka_Ability06_Part01",
  "childAbilityList": [
    "2004010_Monster_W2_Kafka_Ability06_Part01",
    "2004010_Monster_W2_Kafka_Ability06_Part02",
    "2004010_Monster_W2_Kafka_Ability06_Camera"
  ],
  "skillTrigger": "Skill06",
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
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_W2_Kafka_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}