const configAbility = {
  "fileName": "3024014_Monster_W2_Argenti_Ability07_Part01",
  "childAbilityList": [
    "3024014_Monster_W2_Argenti_Ability07_Camera",
    "3024014_Monster_W2_Argenti_Ability07_Part01",
    "3024014_Monster_W2_Argenti_Ability07_Part02"
  ],
  "skillTrigger": "Skill07",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Spear & Shield"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W2_Argenti_Ability07_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}