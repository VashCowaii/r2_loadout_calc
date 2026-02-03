const configAbility = {
  "fileName": "3024010_Monster_W2_Argenti_Ability02_Part01",
  "childAbilityList": [
    "3024010_Monster_W2_Argenti_Ability02_Camera",
    "3024010_Monster_W2_Argenti_Ability02_Part01",
    "3024010_Monster_W2_Argenti_Ability02_Part02"
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
      "ability": "Monster_W2_Argenti_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}