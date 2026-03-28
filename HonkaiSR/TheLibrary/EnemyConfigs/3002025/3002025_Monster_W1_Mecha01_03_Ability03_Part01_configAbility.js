const configAbility = {
  "fileName": "3002025_Monster_W1_Mecha01_03_Ability03_Part01",
  "childAbilityList": [
    "3002025_Monster_W1_Mecha01_03_Ability03_Part01",
    "3002025_Monster_W1_Mecha01_03_Ability03_Part02",
    "3002025_Monster_W1_Mecha01_03_Ability03_Camera"
  ],
  "skillTrigger": "Skill03",
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
      "ability": "Monster_W1_Mecha01_03_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}