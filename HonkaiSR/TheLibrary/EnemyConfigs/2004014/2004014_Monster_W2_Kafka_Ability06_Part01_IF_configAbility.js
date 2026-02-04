const configAbility = {
  "fileName": "2004014_Monster_W2_Kafka_Ability06_Part01_IF",
  "childAbilityList": [
    "2004014_Monster_W2_Kafka_Ability06_Part01_IF",
    "2004014_Monster_W2_Kafka_Ability06_Part02_IF",
    "2004014_Monster_W2_Kafka_Ability06_Camera"
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
      "ability": "Monster_W2_Kafka_Ability06_Part02_IF",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}