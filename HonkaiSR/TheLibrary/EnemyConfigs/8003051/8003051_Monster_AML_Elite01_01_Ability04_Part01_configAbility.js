const configAbility = {
  "fileName": "8003051_Monster_AML_Elite01_01_Ability04_Part01",
  "childAbilityList": [
    "8003051_Monster_AML_Elite01_01_Ability04_Camera",
    "8003051_Monster_AML_Elite01_01_Ability04_Part01",
    "8003051_Monster_AML_Elite01_01_Ability04_Part02"
  ],
  "skillTrigger": "Skill04",
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
      "ability": "Monster_AML_Elite01_01_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}",
    "targetIsVariable": true
  },
  "references": []
}