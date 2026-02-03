const configAbility = {
  "fileName": "3024012_Monster_W2_Argenti_Ability01_Part01",
  "childAbilityList": [
    "3024012_Monster_W2_Argenti_Ability01_Camera",
    "3024012_Monster_W2_Argenti_Ability01_Part01",
    "3024012_Monster_W2_Argenti_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
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
      "ability": "Monster_W2_Argenti_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}