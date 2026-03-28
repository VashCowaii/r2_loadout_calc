const configAbility = {
  "fileName": "3002043_Monster_W3_Clock_02_IF_Ability04_Part01",
  "childAbilityList": [
    "3002043_Monster_W3_Clock_02_IF_Ability04_Part01",
    "3002043_Monster_W3_Clock_02_IF_Ability04_Part02",
    "3002043_Monster_W3_Clock_Ability03_Camera"
  ],
  "skillTrigger": "Skill04",
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
      "ability": "Monster_W3_Clock_02_IF_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  },
  "references": []
}