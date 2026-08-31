const configAbility = {
  "fileName": "8034011_Monster_W3_Aventurine_Ability05_Part01_RL",
  "childAbilityList": [
    "8034011_Monster_W3_Aventurine_Ability05_Camera_RL",
    "8034011_Monster_W3_Aventurine_Ability05_Part01_RL",
    "8034011_Monster_W3_Aventurine_Ability05_Part02_RL"
  ],
  "skillTrigger": "Skill05",
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
      "ability": "Monster_W3_Aventurine_Ability05_Part02_RL",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}