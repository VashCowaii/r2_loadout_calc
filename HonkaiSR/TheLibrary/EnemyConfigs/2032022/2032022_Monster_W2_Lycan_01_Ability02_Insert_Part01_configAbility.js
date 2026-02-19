const configAbility = {
  "fileName": "2032022_Monster_W2_Lycan_01_Ability02_Insert_Part01",
  "childAbilityList": [
    "2032022_Monster_W2_Lycan_01_Ability02_Insert_Part01",
    "2032022_Monster_W2_Lycan_01_Ability02_Insert_Part02",
    "2032022_Monster_W2_Lycan_01_Ability02_Insert_Camera"
  ],
  "skillTrigger": "Skill02",
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
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_W2_Lycan_01_Ability02_Insert_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}