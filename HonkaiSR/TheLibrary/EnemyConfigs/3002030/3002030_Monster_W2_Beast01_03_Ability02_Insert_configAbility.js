const configAbility = {
  "fileName": "3002030_Monster_W2_Beast01_03_Ability02_Insert",
  "childAbilityList": [
    "3002030_Monster_W2_Beast01_03_Ability02_Camera",
    "3002030_Monster_W2_Beast01_03_Ability02_Insert",
    "3002030_Monster_W2_Beast01_03_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Libation of Sweetness"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W2_Beast01_03_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}