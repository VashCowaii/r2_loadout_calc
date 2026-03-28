const configAbility = {
  "fileName": "2033021_Monster_W2_FeixiaoPart_Ability05_Part01",
  "childAbilityList": [
    "2033021_Monster_W2_FeixiaoPart_Ability05_Camera",
    "2033021_Monster_W2_FeixiaoPart_Ability05_Part01",
    "2033021_Monster_W2_FeixiaoPart_Ability05_Part02"
  ],
  "skillTrigger": "Skill05",
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
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{ST and Blast}}"
      },
      "ability": "Monster_W2_FeixiaoPart_Ability05_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}