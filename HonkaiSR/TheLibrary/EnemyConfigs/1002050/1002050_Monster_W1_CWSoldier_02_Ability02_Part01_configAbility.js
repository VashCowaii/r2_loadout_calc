const configAbility = {
  "fileName": "1002050_Monster_W1_CWSoldier_02_Ability02_Part01",
  "childAbilityList": [
    "1002050_Monster_W1_CWSoldier_02_Ability02_Camera",
    "1002050_Monster_W1_CWSoldier_02_Ability02_Part01",
    "1002050_Monster_W1_CWSoldier_02_Ability02_Part02"
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
      "ability": "Monster_W1_CWSoldier_02_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}