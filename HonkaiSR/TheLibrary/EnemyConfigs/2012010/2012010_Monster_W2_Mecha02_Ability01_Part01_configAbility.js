const configAbility = {
  "fileName": "2012010_Monster_W2_Mecha02_Ability01_Part01",
  "childAbilityList": [
    "2012010_Monster_W2_Mecha02_Ability01_Camera",
    "2012010_Monster_W2_Mecha02_Ability01_Camera_Special",
    "2012010_Monster_W2_Mecha02_Ability01_Part01",
    "2012010_Monster_W2_Mecha02_Ability01_Part02"
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
      "ability": "Monster_W2_Mecha02_Ability01_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team All}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 5
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    }
  ],
  "references": []
}